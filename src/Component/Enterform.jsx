import React, { Component } from 'react'
import Chat from './Chat';

export default class Enterform extends Component {
    constructor() {
        super();
        this.state = {
            logged: null,
            name: ''
        };
        this.handleNameSubmit = this.handleNameSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleNameSubmit(e) {
        e.preventDefault();
        this.setState({...this.state,logged:true});
    }
    handleChange(e) {
        this.setState({ name: e.target.value });
    }
    render() {
        if (this.state.logged) {
            return <Chat name={this.state.name} />
        } else {
            return (
                <div id='enter-form' className='neon'>
                    <h3>My chat app</h3>
                    <form onSubmit={this.handleNameSubmit}>
                        <input type='text' id="name" placeholder="Write your name . . ." value={this.state.name} onChange={this.handleChange} />
                        <input type="submit" value="Enter" />
                    </form>
                </div>
            )
        }
    }
}
