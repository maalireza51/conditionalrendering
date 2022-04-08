import React from 'react'
import MediaQuery from 'react-responsive'
import Content from './Content'
import Sidebar from './Sidebar'

export default function Chat(props) {
    return (
        <div className='chat'>
            <Sidebar name={props.name} handleLogin={props.handleLogin} />
            <MediaQuery minWidth={768}>
                <Content />
            </MediaQuery>
        </div>
    )
}
