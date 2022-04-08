import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import Content from './Content'
import Sidebar from './Sidebar'

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {contact:null};
        this.handlePhoneClick = this.handlePhoneClick.bind(this);
    }

    handlePhoneClick = (recieved) =>{
        alert(recieved);
    }

    render() {
        return (
            <div className='chat'>
                <Sidebar name={this.props.name} handleLogin={this.props.handleLogin} handlePhoneClick={this.handlePhoneClick} />
                <MediaQuery minWidth={768}>
                    <Content />
                </MediaQuery>
            </div>
        )
    }
}