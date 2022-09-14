import {React, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpPage.css';
import {useDispatch} from  'react-redux';
import {signUpUser} from '../actions/signUp';

/* The layouts of the sign up page and the login page are similar, so these two pages can share 
some styles in styles.css */

function SignUpPage() {

  const history = useNavigate();
  const [signUpDetails, setSignUpDetails] = useState({
      firstName: '', lastName: '', email: '', password: '', confirmPassword: ''
  });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(signUpUser(signUpDetails, history));
  }
  
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
