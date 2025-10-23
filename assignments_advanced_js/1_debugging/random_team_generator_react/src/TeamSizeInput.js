import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {texts} from "./modules/language";
import detectBrowserLanguage from "detect-browser-language";

class TeamSizeInput extends Component {

    state = {
        error: false,
        language: {
            code: (detectBrowserLanguage().substring(0,2) === 'nl') ? 'nl' : 'en',
            name: 'Nederlands'
        },
        texts,
        msg: {
            isOpen: false,
            title: '',
            description: ''
        }
    };

    /**
     * When teamsize has changed
     * @param e
     */
    onChange(e) {
        const newVal = e.target.value;
        if(newVal < 1 || newVal > 500) {
            this.props.cb(0);
            this.setState({error: true});
        } else {
            this.props.cb(newVal);
            this.setState({error: false});
        }
    }

    /**
     * Rende the teams size component
     * @returns {JSX.Element}
     */
    render() {
        // const classes = this.props.classes;
        return (
            <div className="teamSizeInput">
                <TextField
                    type="number"
                    label={texts.tooltips.teamsize[this.props.language||'nl']}
                    required
                    placeholder={this.props.placeholder}
                    onChange={this.onChange.bind(this)}
                    variant="filled"
                    margin="normal"
                    helperText={this.props.importanttext}
                    onClick={this.props.onClick}
                    defaultValue={this.props.teamsize}
                    error={this.state.error}
                    disabled={!!this.props.disabled}
                />
            </div>
        );
    }
}

export default TeamSizeInput;




