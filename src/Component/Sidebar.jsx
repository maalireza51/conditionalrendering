import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import Contact from './Contact'
import { render } from '@testing-library/react'

export default class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      info: [
        { id: 1, name: "Ali", message: "hello.how are you?" },
        { id: 2, name: "Mehdi", message: "hello.how are you?" },
        { id: 3, name: "Reza", message: "hello.how are you?" },
      ],
      actived: null,
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(id) {
    this.setState({actived:id});
  }

  render() {
    const friends = this.state.info.map(friend => {
      return <Contact name={friend.name} message={friend.message} clickHandler={(e)=>this.clickHandler(friend.id)} actived={friend.id === this.state.actived?true:false}/>
    });

    return (
      <div className='sidebar'>
        <div className='s-header'>
          <a href='#' onClick={this.props.handleLogin}><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></a>
          <span>Hello {this.props.name}</span>
          <a href='#'><FontAwesomeIcon icon={faGear}></FontAwesomeIcon></a>
        </div>
        {friends}
      </div>
    )
  }
}
