import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Cheader(props) {
    return (
        <div className='c-header'>
            <a href='#' onClick={props.handleBack}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></a>
            <a href='#'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a>
        </div>
    )
}
