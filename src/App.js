import React, { Component } from 'react'
// import { Route, Switch } from 'react-router'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Contacts from './Contacts'
import Nav from './Nav'
import ContactDetails from './ContactDetails'
import About from './About'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Contacts/>} />
          <Route path="/contact/:id" element={<ContactDetails/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        {/* <Switch>
          <Route exact path="/">
            <Contacts/>
          </Route>
          <Route path="/contact/:id">
            <ContactDetails/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch> */}
      </BrowserRouter>
    )
  }
}
