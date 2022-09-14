import React from 'react'
import { Link } from 'react-router-dom'
import './SignUpPage.css'

/* The layouts of the sign up page and the login page are similar, so these two pages can share 
some styles in styles.css */

function SignUpPage() {
  return (
        <>
        <div className='SignUpPage'>
          <div className='SignUpPageBox'>
              <h1 className='SignUpPageTitle'>Create your account</h1>
              <form className='SignUpPageForm'>
                <p className='text4'>First Name </p>
                  <label className='SignUpPageInputBox'>
                      <input className='SignUpPageInputField' type="text" ></input>
                  </label>
                <p className='text4'>Last Name </p>
                  <label className='SignUpPageInputBox'>
                      <input className='SignUpPageInputField' type="text" ></input>
                  </label>
                <p className='text4'>Username </p>
                  <label className='SignUpPageInputBox'>
                      <input className='SignUpPageInputField' type="text" ></input>
                  </label>
                <p className='text4'>Email Address </p>
                  <label className='SignUpPageInputBox'>
                      <input className='SignUpPageInputField' type="text" ></input>
                  </label>
                <p className='text4'>Password </p>
                  <label className='SignUpPageInputBox'>
                      <input className='SignUpPageInputField' type="password" ></input>
                  </label>
                <p className='text4'>Confirm Password </p>
                  <label className='SignUpPageInputBox'>
                      <input className='SignUpPageInputField' type="password" ></input>
                  </label>
                <Link to='/Login'><input className='SignUpPageSubmitButton heading2' type="submit" value="Create an account"></input></Link> {/* Change this for auth?  */}

              </form>
          </div>
        </div>
        </>
  )
}

export default SignUpPage
