import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LoginPage extends Component {
  render() {
    return (
      <div className='LoginPage'>
        <div className='LoginPageBox'>
            <h1 className='LoginPageTitle'>Sign in to Phlec Travels</h1>
            <form className='loginPageForm'>
                <label className='LoginPageInputBox'>
                    <p className='text1'>Email Address: </p>
                    <input className='LoginPageInputField' type="text" name='Email'></input>
                </label>
                <label className='LoginPageInputBox'>
                    <p className='text1'>Password: </p>
                    <input className='LoginPageInputField' type="password" name='Password'></input>
                </label>
                <input className='LoginPageSubmitButton heading2' type="submit" value="Sign In"></input>
            </form>
        </div>
        <div className='LoginPageAlternatives'>
          <div className='LoginPageAlternativesItem1 text1'><Link to='/SignUp'><p>Sign Up</p></Link></div>
          <div className='LoginPageAlternativesItem2 text1'><Link to='/ResetPassword'><p>Forgot Password</p></Link></div>
        </div>
      </div>
    )
  }
}
