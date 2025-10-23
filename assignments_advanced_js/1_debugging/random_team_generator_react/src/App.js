import React, {Component} from 'react';

import './App.css';

// App components
import TeamSizeInput from "./TeamSizeInput";
import MembersInput from "./MembersInput";
import {validateEntries, getEntries} from "./modules/entries.js";
import {generateTeams, generateTeamsFromEntries} from "./modules/teamsgenerator";
import TeamsResult from "./TeamsResult";
import {texts} from "./modules/language";
import {storageAvailable} from "./modules/storage";

// Material-UI
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/Button';
import Tooltip from "@material-ui/core/Tooltip";

// Third party
import detectBrowserLanguage from 'detect-browser-language';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import GoogleAd from "./GoogleAd";
import CollapseBox from "./CollapseBox";

class App extends Component {

    constructor(props) {
        super(props);
        const supportedLanguages = ['nl', 'en', 'es', 'fr'];
        let languageCode =  detectBrowserLanguage().substring(0,2);
        languageCode = supportedLanguages.includes(languageCode) ? languageCode : 'en';
        this.state = {
            studentsInput: storageAvailable('localStorage') ? localStorage.getItem('students') : '',
            teamSize: 2,
            teams: [],
            filter: 'opacity(.4)',
            noFilter: 'opacity(1)',
            enabledfirst: true,
            language: {
                code: languageCode,
                name: 'Nederlands'
            },
            texts,
            msg: {
                isOpen:false,
                title: '',
                description:''
            }
        };
    }

    /**
     * Copy result (teams with names) to clipboard
     */
    copyResult = () => {

        // Format teams
        let result = this.state.teams.toString()  ;
        result = result.replace(new RegExp(',true,', 'g'), '\n');
        result = result.replace(new RegExp(',false,', 'g'), '\n');
        result = result.replace(new RegExp(',true', 'g'), '\n');
        result = result.replace(new RegExp(',false', 'g'), '\n');

        // Copy to clipboard and show toast copy succesful or error
        navigator.clipboard.writeText(result).then(async function() {
            await toast.success(this.state.texts.toast.copy[this.state.language.code].description, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
        }.bind(this), async function(e) {
            await toast.error(this.state.texts.toast.copy[this.state.language.code].title, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
        }.bind(this));
    };

    /**
     * UI contains two steps: first enter the names and the teamsize, second tune results
     */
    showFirstStep = () => {
        this.setState({filter: 'opacity(.4)', noFilter: 'opacity(1)'});
        this.setState({enabledfirst:true});
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    showSecondStep = () => {
        this.setState({filter: 'opacity(1)', noFilter: 'opacity(.4)'});
        this.setState({enabledfirst:false});
        window.setTimeout(()=>window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        }),200);
    };

    /*
     * Generate teams from text input
     */
    generateTeams = () => {
        // Save the teams in localstorage
        if (storageAvailable('localStorage'))
            localStorage.setItem('students', this.state.studentsInput);

        // Generate the teams
        const teams = generateTeamsFromEntries(validateEntries(getEntries(this.state.studentsInput, this.state.teamSize)));
        if(teams.length !== 0 && parseInt(this.state.teamSize) > 0) {
            this.setState({teams: teams});
            this.showSecondStep();
        }
    };

    /**
     * Generate teams from those not on hold
     */
    regenerateTeams = () => {
        const oldTeams = this.state.teams;

        //Get members from teams not on hold to form new ones
        const teamsNotOnHold = oldTeams.filter((team) => (team[1] === false));
        const members = teamsNotOnHold.map((team) => team[0]);
        const flattened = [].concat.apply([], members);

        //Generate new teams
        const newTeams = generateTeams(flattened, this.state.teamSize);

        //If new teams is x items larger then olteams, add x empty arrays to oldteam
        const newTeamsLength = newTeams.length;
        const oldTeamsLength = oldTeams.length;
        if(newTeamsLength > oldTeamsLength){
            for(let i = 0; i < newTeamsLength - oldTeamsLength; i++){
                oldTeams.push.apply(oldTeams, [[['dummy'], false]]);
            }
        }

        //Replace old teams with new ones when not on hold
        const teams = oldTeams.map((team)=>{
            if(team[1]) {
                return team;
            } else {
                return newTeams.shift();
            }
        });

        //Remove empty teams
        const teamsNoEmpty = teams.filter((team)=>team !== undefined);

        //Save new
        this.setState({teams: teamsNoEmpty});
    };


    /**
     * Callback to set a team on hold or not
     * @param index
     */
    hold = (index) => {
        const teams = this.state.teams;
        teams[index][1] = !teams[index][1];
        this.setState({teams});
    };

    /**
     * Callback to set the fill state with names
     * @param studentsInput
     */
    getTeamsTextInput = (studentsInput) => {
        this.setState({studentsInput: studentsInput});
    };

    /**
     * Callback to set the team size
     * @param teamSize
     */
    getTeamSize = (teamSize) => {
        this.setState({teamSize: teamSize});
        // Show toast message that team should be at least 1
        if (teamSize <= 0) {
            toast.warning(this.state.texts.toast.teamsize[this.state.language.code].description, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
        }
    };

    /**
     * Render the app
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div className="app">
                <div id='header'>
                    <h1 dangerouslySetInnerHTML={{__html: this.state.texts.headings.title[this.state.language.code]}}></h1>
                    <h2 dangerouslySetInnerHTML={{__html: this.state.texts.headings.subtitle[this.state.language.code]}}></h2>
                </div>
                <main>
                    <div className='text'>
                        <CollapseBox id='intro' isOpen={true} className="intro" contentHTML={this.state.texts.intro.description[this.state.language.code]} title={this.state.texts.intro.title[this.state.language.code]}></CollapseBox>
                        <CollapseBox id='manual' isOpen={true} className="manual" contentHTML={this.state.texts.manual.description[this.state.language.code]} title={this.state.texts.manual.title[this.state.language.code]}></CollapseBox>
                    </div>
                    <div className="tool">
                        <MembersInput style={{filter: this.state.noFilter}}
                                      cb={this.getTeamsTextInput}
                                      importanttext={this.state.texts.tooltips.entermembers[this.state.language.code]}
                                      disabled={!this.state.enabledfirst}
                                      language={this.state.language.code}
                                      default = {this.state.studentsInput}
                        />
                        <div className="action generate" style={{filter: this.state.noFilter}}>
                            <TeamSizeInput teamsize={this.state.teamSize} cb={this.getTeamSize} importanttext="" disabled={!this.state.enabledfirst} language={this.state.language.code} />
                            <Button variant="contained" color="primary" onClick={()=>this.generateTeams()} disabled={!this.state.enabledfirst}>{this.state.texts.buttons.generate[this.state.language.code]}</Button>
                        </div>
                        <div className="action regenerate" style={{filter: this.state.filter}}>
                            {/*<GoogleAd adLayout="in-article" adFormat="fluid" googleAdClient="ca-pub-5381045412475380" slot="6042478870" timeout={1000} classNames="adGoogle" />*/}
                            <TeamsResult onHold={this.hold} teams={this.state.teams} enabled={this.state.step2enabled} language={this.state.language.code} />
                            <div className='again'>
                                <Tooltip title={this.state.texts.tooltips.back[this.state.language.code]}>
                                    <IconButton variant="contained" color="secondary" onClick={()=>this.showFirstStep()} disabled={this.state.enabledfirst}>{this.state.texts.buttons.back[this.state.language.code]}</IconButton>
                                </Tooltip>
                                <Tooltip title={this.state.texts.tooltips.copy[this.state.language.code]}>
                                    <IconButton variant="contained" color="primary" onClick={()=>{this.copyResult();}} disabled={this.state.enabledfirst}>{this.state.texts.buttons.copy[this.state.language.code]}</IconButton>
                                </Tooltip>
                                <Tooltip title={this.state.texts.tooltips.regenerate[this.state.language.code]}>
                                    <IconButton variant="contained" color="primary" onClick={()=>this.regenerateTeams()} disabled={this.state.enabledfirst}>{this.state.texts.buttons.regenerate[this.state.language.code]}</IconButton>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </main>
                <footer></footer>
                <ToastContainer />
            </div>
        );
    }
}

export default App;


