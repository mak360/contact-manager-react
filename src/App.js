import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import Contacts from './Contacts'
import Nav from './Nav'
import ContactDetails from './ContactDetails'
import About from './About'
import Footer from './Footer'

import contacts from './data.json'

export default class App extends Component {
  state = {
    contacts
  }

  render() {
    return (
      <Router>
        <Nav />
        {/* <Routes>
          <Route path="/" element={<Contacts/>} />
          <Route path="/contact/:id" element={<ContactDetails/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer /> */}
        <Switch>
          <Route exact path="/">
            <Contacts contacts={contacts} />
          </Route>
          <Route path="/contact/:id">
            <ContactDetails contacts={contacts} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    )
  }
}
