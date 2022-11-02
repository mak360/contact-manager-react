import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import axios from 'axios'

class ContactDetails extends Component {
  state = {
    contact: {}
  }
  componentDidMount(){
    // console.log(`Up ${this.props.match.params.id}`)
    const id = this.props.match.params.id
    axios
      .get(`https://randomuser.me/api/?login.uuid=${id}&seed=contactmanager`)
      .then(data => {
        console.log(data.data.results[0])
        this.setState({
          contact: data.data.results[0]
        })
      })
      .catch(err => console.log(err))
  }  
  // findContact(){
  //   const id = this.props.match.params.id
  //   const contact = this.props.contacts.find(contact => contact.id === Number(id))
  //   this.setState({
  //     contact: contact
  //   })
  // }
  // componentDidMount(){
  //   this.findContact()
  // }
  render() {
    // console.log(this.props.match.params.id)
    return (
      // <div>{JSON.stringify(this.state.contact)}</div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 offset-lg-4 offset-md-3'>
            <div className="card mt-4">
            <img className='card-img-top' src={this.state.contact?.picture?.large} alt={this.state.contact?.name?.first} />
              <div className="card-body">
              <h5 className="card-title mb-1">{this.state.contact?.name?.first} {this.state.contact?.name?.last}</h5>
                <small className="card-text text-muted">Birth date: {this.state.contact?.dob?.date}</small>
                <br/>
                <small className="card-text text-muted">Gender: {this.state.contact?.gender}</small>
                <p className="card-text mb-1">Email: {this.state.contact?.email}</p> 
                <button className='btn btn-secondary' onClick={() => this.props.history.goBack()}>Go Back</button> 
              </div>
            </div>          
          </div>
        </div>
      </div>      
    )
  }
}

export default withRouter(ContactDetails)
