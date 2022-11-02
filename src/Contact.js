import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Contact extends Component {
  render() {
    // console.log(this.props)
    return (
        <div className='col-lg-4 col-md-6'>
            <div className="card mb-4 contact">
                <div className="card-body d-xl-flex">
                    <img className='rounded-circle' src={this.props.contact.picture.large} alt={this.props.contact.name.first} />
                    <div className='ms-3'>
                        <h5 className="card-title mb-1">{this.props.contact.name.first} {this.props.contact.name.last}</h5>
                        <small className="card-text text-muted">Phone: {this.props.contact.phone}</small>
                        <p className="card-text mb-0">{this.props.contact.email}</p> 
                        <Link className='btn btn-secondary btn-sm mt-1' to={`/contact/${this.props.contact.login.uuid}`}>Details</Link>
                    </div>
                </div>
            </div>            
        </div>
    )
  }
}
