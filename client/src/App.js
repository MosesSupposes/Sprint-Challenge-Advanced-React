import React, { Component } from 'react'
import './App.css'

import PlayerList from './components/PlayerList'

export default class App extends Component {
  state = {
    players: []
  }
  
  componentDidMount() {
    fetch("http://localhost:5000/api/players")
    .then(res => res.json())
    .then(res => {
      this.setState({ players: res })
    })
  }
  
  render() {
    return (
      <div className="App">
        <PlayerList players={this.state.players} />
      </div>
    )
  }
}


