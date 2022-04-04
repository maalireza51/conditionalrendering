import React from 'react'

export default function Sidebar(props) {
  return (
    <div className='sidebar'>
        <div className='s-header'>
            <a href='#'></a>
            <span>Hello {props.name}</span>
            <a href='#'></a>
        </div>
    </div>
  )
}
