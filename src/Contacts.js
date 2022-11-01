import React, { Component } from 'react'

import Contact from './Contact'

export default class Contacts extends Component {

  render() {
    // const {contacts} = this.state

    return (
      <>
        {/* <h2 className='text-center mt-3 mb-0'>All Contacts</h2> */}
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className="card p-5 mt-4 mb-4 text-center">
                  <h1 className="card-title text-uppercase">All Contacts</h1>
                  <p className='card-text'>Find your all contacts, edit and update online.</p>
              </div>              
            </div>  
          </div> 
        </div>     
        <div className='container'>
          <div className='row'>
            {this.props.contacts.map(contact => 
              <Contact contact={contact} key={contact.id} />
            )}            
          </div>
        </div>
      </>
    )
  }
}
