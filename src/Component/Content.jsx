import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Messagebox from './Messagebox'

export default function Content(props) {
  return (
    <div className='content'>
      <div className='c-header'>
        <a href='#' onClick={props.handleBack}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></a>
        <a href='#'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a>
      </div>
      <Messagebox />
      <form className='input'>
        <input type="text" className="text" />
        <button type="submit"><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></button>
      </form>
    </div>
  )
}
