import React, { Component } from 'react'
import './App.scss'
import Header from './pages/Header/Header'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Sections/Sections'
import Sections from './pages/Sections/Sections'

export default class App extends Component {
  render() {
    return (
      <body>
        
      <Header/>
      <Routes>
          <Route path='' element={<Sections />}/>
      </Routes>
      </body>
    )
  }
}

