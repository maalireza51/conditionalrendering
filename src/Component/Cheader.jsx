import React from 'react'

export default function Cheader(props) {
    return (
        <div className='c-header'>
            <a href='#' onClick={props.handleBack}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></a>
            <a href='#'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a>
        </div>
    )
}
