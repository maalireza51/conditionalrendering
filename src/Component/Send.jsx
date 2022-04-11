import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function Send() {
    return (
        <form className='input'>
            <input type="text" className="text" />
            <button type="submit"><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></button>
        </form>
    )
}
