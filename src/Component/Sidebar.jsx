import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(props) {
  return (
    <div className='sidebar'>
        <div className='s-header'>
            <a href='#'><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></a>
            <span onClick={props.handleLogin}>Hello {props.name}</span>
            <a href='#'><FontAwesomeIcon icon={faGear}></FontAwesomeIcon></a>
        </div>
    </div>
  )
}
