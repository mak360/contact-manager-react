import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-lg-12'>
                <div className="card p-5 mt-4 mb-4 text-center">
                    <h1 className="card-title text-uppercase">Contact Management App</h1>
                    <p className='card-text'>This app created with ReactJS. <br/> 
                    <span className='alert alert-primary d-inline-block mt-3'>If you have anything to say about this app, please contact.</span></p>
                </div>              
            </div>  
            </div> 
        </div>       
    )
  }
}
