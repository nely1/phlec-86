import React, { Component } from 'react'

export default class LoginPage extends Component {
  render() {
    return (
      <div className='LoginPage'>
        <div className='LoginPageBox'>
            <h1>Sign in to Phlec Travels</h1>
            <form className='loginPageForm'>
                <label>
                    <h3>Email Address</h3>
                    <input type="text" name='Email'></input>
                </label>
                <label>
                    <h3>Password</h3>
                    <input type="password" name='Password'></input>
                </label>
                <input type="submit" value="Sign In"></input>
            </form>
        </div>
      </div>
    )
  }
}
