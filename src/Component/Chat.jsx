import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import Content from './Content'
import Sidebar from './Sidebar'

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = { contact: null };

        this.handlePhoneClick = this.handlePhoneClick.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handlePhoneClick = (recievedcontact) => {
        this.setState({ contact: recievedcontact });
    }

    handleBack(){
        this.setState({ contact: null });
    }

    render() {
        if (this.state.contact == null) {
            return (
                <div className='chat'>
                    <Sidebar name={this.props.name} handleLogin={this.props.handleLogin} handlePhoneClick={this.handlePhoneClick} id={null}/>
                </div>
            )
        } else {
            return (
                <div className='chat'>
                    <MediaQuery minWidth={768}>
                        <Sidebar name={this.props.name} handleLogin={this.props.handleLogin} handlePhoneClick={this.handlePhoneClick} id={this.state.contact} />
                    </MediaQuery>
                    <Content contact={this.state.contact} handleBack={this.handleBack}/>
                </div>
            )
        }
    }
}