import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

/* The layouts of the sign up page and the login page are similar, so these two pages can share 
some styles in styles.css */

function SignUpPage() {
  return (
        <>
        <div className='LoginPage'>
          <div className='LoginPageBox'>
              <h1 className='LoginPageTitle'>Create your account</h1>
              <form className='loginPageForm'>
                <p className='text1'>First Name </p>
                  <label className='LoginPageInputBox'>
                      <input className='LoginPageInputField' type="text" ></input>
                  </label>
                <p className='text1'>Last Name </p>
                  <label className='LoginPageInputBox'>
                      <input className='LoginPageInputField' type="text" ></input>
                  </label>
                <p className='text1'>Email Address </p>
                  <label className='LoginPageInputBox'>
                      <input className='LoginPageInputField' type="text" ></input>
                  </label>
                <p className='text1'>Password </p>
                  <label className='LoginPageInputBox'>
                      <input className='LoginPageInputField' type="password" ></input>
                  </label>
                <p className='text1'>Confirm Password </p>
                  <label className='LoginPageInputBox'>
                      <input className='LoginPageInputField' type="password" ></input>
                  </label>
                <Link to='/Login'><input className='LoginPageSubmitButton heading2' type="submit" value="Create an account"></input></Link> {/* Change this for auth?  */}
                  
              </form>
          </div>
        </div>
        </>
  )
}

export default SignUpPage
