import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Messagebox from './Messagebox'
import Cheader from './Cheader'

export default function Content(props) {
  return (
    <div className='content'>
      <Cheader handleBack={props.handleBack}/>
      <Messagebox />
      <Send/>
    </div>
  )
}
