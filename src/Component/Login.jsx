import React from 'react'

export default function Login(props) {
    return (
        <div id='enter-form' className='neon'>
            <h3>My chat app</h3>
            <form onSubmit={props.handleLogin}>
                <input type='text' id="name" placeholder="Write your name . . ." value={props.name} onChange={props.handleName} />
                <input type="submit" value="Enter" />
            </form>
        </div>
    )
}
