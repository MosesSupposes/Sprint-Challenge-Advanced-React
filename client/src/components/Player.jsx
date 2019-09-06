import React from 'react'

export default function Player(props) {
    return (
        <div className="player">
            <h3>{props.name}</h3>
            <p>{props.country}</p>
            <p>Searches: {props.searches}</p>
        </div>
    )
}