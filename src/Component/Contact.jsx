import React from 'react'

export default function contact(props) {
    return (
        <div className={`s-chats ${props.actived?"active":null}`} onClick={props.clickHandler}>
            <img src="https://cdn5.vectorstock.com/i/1000x1000/07/39/man-avatar-profile-view-vector-22890739.jpg" alt="" />
            <div>
                <h4>{props.name}</h4>
                <p>{props.message}</p>
            </div>
        </div>
    )
}
