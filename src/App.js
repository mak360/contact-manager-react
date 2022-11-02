import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'

import Contacts from './Contacts'
import Nav from './Nav'
import ContactDetails from './ContactDetails'
import About from './About'
import Footer from './Footer'

// import contacts from './data.json'

export default class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount(){
    axios
      .get('https://randomuser.me/api/?seed=contactmanager&inc=name,email,login,gender,dob,picture,phone&results=21')
      .then(data => {
        // console.log(data.data.results)
        this.setState({
          contacts: data.data.results
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    // console.log(this.state.contacts)
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
            <Contacts contacts={this.state.contacts} />
          </Route>
          <Route path="/contact/:id">
            <ContactDetails contacts={this.state.contacts} />
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
