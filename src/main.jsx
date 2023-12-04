import React from 'react'
import ReactDOM from 'react-dom/client'
import Pokedex from './Pokedex/Pokedex.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pokedex />
  </React.StrictMode>,
)