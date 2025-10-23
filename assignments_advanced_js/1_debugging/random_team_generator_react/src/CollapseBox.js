import React, { Component } from 'react';
import {storageAvailable} from "./modules/storage";

class CollapseBox extends Component {

  constructor(props) {
    super(props);

    let opened = this.props?.isOpen + "" || "true";
    if(storageAvailable('localStorage')){
      opened = localStorage.getItem(this.props.id + '_isopen') ?? opened;
    }

    this.state = {
      open: (opened === "true") ? 'block' : 'none',
      arrow: (opened === "true") ? '&uarr;' : '&darr;'
    }
    console.log(opened, this.state);
  }

  collapse() {
    if (this.state.open === 'none') {
      this.setState({open: 'block'});
      this.setState({arrow: '&uarr;'});
    } else {
      this.setState({open: 'none'});
      this.setState({arrow: '&darr;'});
    }
    if (storageAvailable('localStorage')){
      localStorage.setItem(this.props?.id + '_isopen', (this.state.open === 'none'));
    }
  }

  render() {
    return (
      <div className={this.props.className} style={{display: 'flex', flexDirection: 'column'}}>
        <div className='title' style={{display: 'flex', justifyContent:'space-between', marginBottom:'.5em', padding: '.2em 1em', backgroundColor:'#000', color: 'white'}} onClick={()=>this.collapse()} dangerouslySetInnerHTML={{__html: `<div style="font-size:.8em">${this.props.title}</div><div>${this.state.arrow}</div>`}}></div>
        <div className='content' style={{display:this.state.open, padding:'.2em .2em 1em .2em', marginBottom: '1em'}} dangerouslySetInnerHTML={{__html: this.props.contentHTML}}></div>
      </div>
    );
  }
}


export default CollapseBox;
