import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'

export default function Chat(props) {
    return (
        <div className='chat'>
            <Sidebar name={props.name}/>
            <Content />
        </div>
    )
}
