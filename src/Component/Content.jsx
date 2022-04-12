import React from 'react'
import Messagebox from './Messagebox'
import Cheader from './Cheader'
import Send from './Send'

export default function Content(props) {
  return (
    <div className='content'>
      <Cheader handleBack={props.handleBack}/>
      <Messagebox />
      <Send/>
    </div>
  )
}
