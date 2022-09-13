import {React, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
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
        <div className='LoginPage'>
          <div className='LoginPageBox'>
              <h1 className='LoginPageTitle'>Create your account</h1>
              <form className='loginPageForm' onSubmit={handleSubmit}>
                <p className='text1'>First Name </p>
                  <label className='LoginPageInputBox'>
                      <input className='LoginPageInputField' type="text" name="firstName" value = {signUpDetails.firstName} onChange = {(e) => setSignUpDetails({...signUpDetails, firstName: e.target.value})}></input>
                  </label>
                <p className='text1'>Last Name </p>
                  <label className='LoginPageInputBox'>
                      <input className='LoginPageInputField' type="text" name="lastName" value = {signUpDetails.lastName} onChange = {(e) => setSignUpDetails({...signUpDetails, lastName: e.target.value})}></input>
                  </label>
                <p className='text1'>Email Address </p>
                  <label className='LoginPageInputBox'>
                      <input className='LoginPageInputField' type="text" name="email" value = {signUpDetails.email} onChange = {(e) => setSignUpDetails({...signUpDetails, email: e.target.value})}></input>
                  </label>
                <p className='text1'>Password </p>
                  <label className='LoginPageInputBox'>
                      <input className='LoginPageInputField' type="password" name="password"  value={signUpDetails.password} onChange = {(e) => setSignUpDetails({...signUpDetails, password: e.target.value})}></input>
                  </label>
                <p className='text1'>Confirm Password </p>
                  <label className='LoginPageInputBox'>
                      <input className='LoginPageInputField' type="password" name="confirmPassword" value = {signUpDetails.confirmPassword} onChange = {(e) => setSignUpDetails({...signUpDetails, confirmPassword: e.target.value})}></input>
                  </label>
                <input className='LoginPageSubmitButton heading2' type="submit" value="Create an account"></input>{/* Change this for auth?  */}
                  
              </form>
          </div>
        </div>
        </>
  )
}

export default SignUpPage
