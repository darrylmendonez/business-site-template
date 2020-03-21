import React, { Component } from 'react'

class Contact extends Component {

  state = {
    name: '',
    email: '',
    message: '',
    msgJustSent: false,
    animateIn: 'animated zoomIn'
  }

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleChangeMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      name: '',
      email: '',
      message: '',
      msgJustSent: true
    });
    setTimeout( () => {
      this.setState({
        msgJustSent: false
      })
    }, 5000)
  }

  render() {

    const successMsg = this.state.msgJustSent ? (
      <span id="success-msg" className={'text-success pt-5 ml-2 ' + this.state.animateIn}>
        <i className="fa fa-check-circle-o" aria-hidden="true"></i> Your message has been sent.<br />
        <small><em><code>Not really though ;)</code></em></small>
      </span>
    ) : (
      <span></span>
    );

    return (
      <ng-container>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h4 className="center">Contact</h4>
            <div className="card">
              <div className="body">
                <form className="p-4" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" onChange={this.handleChangeName} value={this.state.name} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleChangeEmail} value={this.state.email} />
                  </div>
                  <label>Message</label>
                  <div className="input-group">
                    <textarea className="form-control" aria-label="With textarea" onChange={this.handleChangeMessage} value={this.state.message}></textarea>
                  </div>
                  <button type="Submit" className="btn btn-outline-primary mt-3" data-toggle="tooltip" data-placement="top" title="To be honest, this message will not be sent anywhere. This is just a template website. Feel free to click anyway =)">Submit</button>
                  {successMsg}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-header">
                <code>Preview</code>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Name: {this.state.name}</li>
                  <li className="list-group-item">Email: {this.state.email}</li>
                  <li className="list-group-item">Message: {this.state.message}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    );
  }
}
 
export default Contact;