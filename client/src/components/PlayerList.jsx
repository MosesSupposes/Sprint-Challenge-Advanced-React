import React from 'react'
import Player from './Player'
import useDarkMode from '../hooks/useDarkMode'

export default function PlayerList(props) {
    const [toggleDarkMode, darkMode, setDarkMode] = useDarkMode()

    const toggleMode = e => {
        e.preventDefault()
        toggleDarkMode()
      }
    
    return (
        <>
        <div className="dark-mode__toggle">
            <div
            onClick={toggleMode}
            className={darkMode === 'true' ? 'toggle toggled' : 'toggle'}
            />
        </div>
        
        <div className="player-list">
            {props.players.map(function renderPlayer(player) {
                return <Player key={player.id} {...player} />
            })}
        </div>
        </>
    )
}