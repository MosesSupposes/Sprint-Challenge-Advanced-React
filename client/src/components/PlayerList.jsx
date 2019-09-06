import React from 'react'
import Player from './Player'

export default function PlayerList(props) {
    return (
        <div className="player-list">
            {props.players.map(function renderPlayer(player) {
                return <Player key={player.id} {...player} />
            })}
        </div>
    )
}