import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ContactDetails extends Component {
  state = {
    contact: {}
  }
  findContact(){
    const id = this.props.match.params.id
    const contact = this.props.contacts.find(contact => contact.id === Number(id))
    this.setState({
      contact: contact
    })
  }
  componentDidMount(){
    this.findContact()
  }
  render() {
    // console.log(this.props.match.params.id)
    return (
      // <div>{JSON.stringify(this.state.contact)}</div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 offset-lg-4 offset-md-3'>
            <div class="card mt-4">
            <img className='card-img-top' src={this.state.contact.photo} alt={this.state.contact.first_name} />
              <div class="card-body">
              <h5 className="card-title mb-1">{this.state.contact.first_name} {this.state.contact.last_name}</h5>
                <small className="card-text text-muted">{this.state.contact.age} yeasr old ({this.state.contact.gender})</small>
                <p className="card-text mb-1">{this.state.contact.email}</p> 
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
