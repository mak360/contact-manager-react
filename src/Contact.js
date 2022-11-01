import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    console.log(this.props)
    return (
        <div className='col-lg-4 col-md-6'>
            <div className="card mb-4 contact">
                <div className="card-body d-xl-flex">
                    <img className='rounded-circle' src={this.props.contact.photo} alt={this.props.contact.first_name} />
                    <div className='ms-3'>
                        <h5 className="card-title mb-1">{this.props.contact.first_name} {this.props.contact.last_name}</h5>
                        <small className="card-text text-muted">{this.props.contact.age} yeasr old ({this.props.contact.gender})</small>
                        <p className="card-text">{this.props.contact.email}</p>                    
                    </div>
                </div>
            </div>            
        </div>
    )
  }
}
