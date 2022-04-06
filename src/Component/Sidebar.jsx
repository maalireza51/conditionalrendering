import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import Contact from './Contact'

export default function Sidebar(props) {

  const contacts = [
    { name: "Ali", message: "hello.how are you?" },
    { name: "Mehdi", message: "hello.how are you?" },
    { name: "Reza", message: "hello.how are you?" }
  ]
  const friends = contacts.map(friend => {
    return <Contact name={friend.name} message={friend.message} clickHandler={clickHandler} />
  })

  function clickHandler(e) {
    var elems = document.querySelectorAll(".s-chats");
    [].forEach.call(elems, function (el) {
      el.classList.remove("active");
    });
    e.target.classList.add('active');
  }

  return (
    <div className='sidebar'>
      <div className='s-header'>
        <a href='#' onClick={props.handleLogin}><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></a>
        <span>Hello {props.name}</span>
        <a href='#'><FontAwesomeIcon icon={faGear}></FontAwesomeIcon></a>
      </div>
      {friends}
    </div>
  )
}
