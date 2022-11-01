import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
<nav className="navbar navbar-expand-sm navbar-dark navbar-custom">
  <div className="container">
    <Link className="navbar-brand" to="/"><strong className='text-uppercase'>Contact Manager</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" exact to="/">Contacts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>      
    )
  }
}
