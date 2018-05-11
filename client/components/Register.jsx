import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register'
import {loginError} from '../actions/login'

class Register extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      contact_number: '',
      email_address: '',
      password: '',
      confirm_password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(loginError(''))
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  //if the email addresss is not valid we need to STOP IT. 
  submit(e) {
    e.preventDefault()
    e.target.reset()
    let {user_name, password, confirm_password, email_address, contact_number} = this.state
    if (!this.validateEmail(email_address)) return (this.props.dispatch(loginError('Email is Invalid')))
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    this.props.dispatch(registerUserRequest(this.state))
  }

  //this just checks if the email is valid or not. 
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isValid = re.test(String(email).toLowerCase());
    console.log('No joke', {isValid})
  }

  render() {
    const {auth} = this.props
    return (
      <form className="Register form box" onSubmit={this.submit}>
        <h1>Register</h1>
        <hr />
        <b>{auth.errorMessage && <span>{auth.errorMessage}</span>}</b>
        <label>Username
          <input required placeholder="User Name" type="text" name="user_name" onChange={this.updateDetails}/>
        </label>
        <div>
          <label>Contact Number
            <input required placeholder="Contact Number" type="text" name="contact_number" onChange={this.updateDetails}/>
          </label>
          <label>Email Address
            <input required placeholder="Email Address" type="text" name="email_address" onChange={this.updateDetails}/>
          </label>
        </div>
        <br />
        <div>
          <label>Password
            <input required placeholder="Password" type="password" name="password" onChange={this.updateDetails}/>
          </label>
          <label>Confirm Password
            <input required placeholder="Confirm Password" type="password" name="confirm_password" onChange={this.updateDetails}/>
          </label>
        </div>
        <input value="Register" type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => ({auth}) //auth is being passed in by props and then it executes it, auth is being destructured from state by this fn

//Structurin Mehn!
// function mapStateToProps (state) {
//   var auth = state.auth
//   return {
//     auth: auth
//   }
// }

export default connect(mapStateToProps)(Register)