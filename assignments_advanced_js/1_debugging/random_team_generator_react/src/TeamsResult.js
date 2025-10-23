import React, {Component} from 'react';
import {Card, CardContent, Switch, FormGroup, FormControlLabel} from "@material-ui/core";
import {texts} from "./modules/language";

class TeamsResult extends Component {

    /**
     * When hold switch changed
     * @param index
     * @param event
     * @param checked
     */
    hold(index, event, checked){
        this.props.onHold(index,checked);
    };

    onDragOver = (ev) => {
        ev.preventDefault();
    };

    onDragStart = (ev, teamindex) => {
        console.log('dragstart:', teamindex);
        console.log(this.state.teams.slice());
        ev.dataTransfer.setData("teamindex", teamindex);
    };

    onDrop = (ev, iteamto) => {
        const teamdata = ev.dataTransfer.getData("teamindex");
        if (teamdata!== '') {
            let teamindex = teamdata.split("-");
            const iteamfrom = teamindex[0];
            const imember = teamindex[2];

            const teams = this.state.teams;

            if(teams[iteamfrom][0].length === 1){
                console.log("A team without members? Seriously?");
            } else {
                const name = teams[iteamfrom][0][imember];

                teams[iteamto][0].push(name);
                teams[iteamfrom][0].splice(imember, 1);
                this.setState({teams: teams});
            }
        } else {
            console.log("no data");
        }
    };

    state = {
        teams: []
    };

    componentDidUpdate(prevProps) {
        if (this.props.teams !== prevProps.teams) {
            this.setState({teams: this.props.teams});
        }
    };

    render() {
        /*
        this.props.teams:
        0: [["Kees Hart", "Ronny Bartjes", "Job Lenferink"], false]
        1: [["Christian Janssens", "Shudrick Vromans", "Jos Mons"], true]
        2:
         */
        return (
            <div className="teamsResult" onClick={this.props.onClick}>
                {
                this.state.teams.map(function (team, iteam) {
                    return (
                        <Card key={iteam} style={{marginBottom:"2em"}}>

                            <CardContent>
                                <div className="result">
                                    <div className='cover'>{(iteam + 1)}</div>
                                    <ul onDrop={(e)=>{this.onDrop(e, iteam)}} onDragOver={(e)=>this.onDragOver(e)}>
                                        {
                                            team[0].map((member, imember) => {
                                                return <li title={texts.tooltips.drag[this.props.language||'nl']} id={iteam + '-' + imember }
                                                           draggable onDragStart = {(e)=>this.onDragStart(e, iteam + '-' + imember)}
                                                           key={imember}>{member}</li>
                                            })
                                        }
                                    </ul>
                                    <div>
                                        <FormGroup>
                                            <FormControlLabel control={<Switch checked={team[1]} onChange={this.hold.bind(this, iteam)} />} label={team[1]?texts.tooltips.pinned[this.props.language||'nl']:texts.tooltips.unpinned[this.props.language||'nl']} />
                                        </FormGroup>
                                    </div>
                                </div>
                            </CardContent>

                        </Card>
                    )
                }.bind(this))
                }
            </div>
        );

    }
}

export default TeamsResult;
