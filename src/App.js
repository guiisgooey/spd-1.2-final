import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Upload from './components/pages/Upload.js'
import Gallery from './components/pages/Gallery.js'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/upload' component={Upload} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
