import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
import Navbar from '../components/Navbar'

function LoginPage() {
  return (
        <>
        <Navbar page="Login" loggedIn={false}/>
        <div className='LoginPage'>
          <div className='LoginPageBox'>
              <h1 className='LoginPageTitle'>Sign in to Phlec Travels</h1>
              <form className='loginPageForm'>
                  <label className='LoginPageInputBox'>
                      <p className='text1'>Email Address: </p>
                      <input className='LoginPageInputField' type="text" ></input>
                  </label>
                  <label className='LoginPageInputBox'>
                      <p className='text1'>Password: </p>
                      <input className='LoginPageInputField' type="password" ></input>
                  </label>
                  <Link to='/Home'><input className='LoginPageSubmitButton heading2' type="submit" value="Sign In"></input></Link> {/* Change this for auth?  */}
                  
              </form>
          </div>
          <div className='LoginPageAlternatives'>
            <div className='LoginPageAlternativesItem1 text1'><Link to='/SignUp'><p>Sign Up</p></Link></div>
            <div className='LoginPageAlternativesItem2 text1'><Link to='/ResetPassword'><p>Forgot Password</p></Link></div>
          </div>
        </div>
        </>
  )
}

export default LoginPage
