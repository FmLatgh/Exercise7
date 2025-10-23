import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {texts} from "./modules/language";

class MembersInput extends Component {
    state = {
        err: true,
    }

    onChange(e) {
        this.setState({err: (e.target.value.trim().length === 0)});
        this.props.cb(e.target.value);
    }
    render() {
        return (
            <TextField
                label={texts.tooltips.entermemberstitle[this.props.language||'nl']}
                required
                placeholder={this.props.placeholder}
                multiline
                rows='10'
                rowsmax='20'
                onChange={this.onChange.bind(this)}
                variant="filled"
                margin="normal"
                style={this.props.style}
                onClick={this.props.onClick}
                helperText={this.props.importanttext}
                disabled={!!this.props.disabled}
                error={this.state.err}
                value={this.props.default || ""}
            />

        );
    }
}

export default MembersInput;
