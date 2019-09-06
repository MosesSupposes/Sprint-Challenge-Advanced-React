import React from 'react'
import ReactDOM from 'react-dom'
import playerData from '../../data'

import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('Player data is present', () => {
  expect(playerData.data[0].name).toBe("Alex Morgan")
  expect(playerData.data[0].country).toBe("United States")
  expect(playerData.data[0].searches).toBe(100)

  expect(playerData.data[1].name).toBe("Megan Rapinoe")
  expect(playerData.data[1].country).toBe("United States")
  expect(playerData.data[1].searches).toBe(99)

  expect(playerData.data[2].name).toBe("Marta")
  expect(playerData.data[2].country).toBe("Brazil")
  expect(playerData.data[2].searches).toBe(18)
})

test('Ensure server is working', () => {
  expect(fetch("http://localhost:5000/api/players")).resolves.toBeTruthy()
  expect(fetch("http://localhost:5000/api/players")).rejects.toBeFalsy()
})


