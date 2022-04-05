import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(props) {
  return (
    <div className='sidebar'>
        <div className='s-header'>
            <a href='#' onClick={props.handleLogin}><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></a>
            <span>Hello {props.name}</span>
            <a href='#'><FontAwesomeIcon icon={faGear}></FontAwesomeIcon></a>
        </div>
    </div>
  )
}
