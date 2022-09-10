
import './LoginPage.css'

import { Login } from '../App';
import {React, useState} from 'react'
import { Link, Navigate } from 'react-router-dom'

import Navbar from '../components/Navbar'

function LoginPage() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <>
    <Navbar page="Login" loggedIn={false}/>
    <div className='LoginPage'>
      <div className='LoginPageBox'>
          <h1 className='LoginPageTitle'>Sign in to Phlec Travels</h1>
          <form className='loginPageForm' onSubmit={handleSubmit}>
              <label className='LoginPageInputBox'>
                  <p className='text1'>Email Address: </p>
                  <input className='LoginPageInputField' type="text" name ="uname"></input>
                  {renderErrorMessage("uname")}
              </label>
              <label className='LoginPageInputBox'>
                  <p className='text1'>Password: </p>
                  <input className='LoginPageInputField' type="password" name = "pass"></input>
                  {renderErrorMessage("pass")}
              </label>
              <input className='LoginPageSubmitButton heading2' type="submit" value="Sign In"></input> {/* Change this for auth?  */}
              
          </form>
      </div>
      <div className='LoginPageAlternatives'>
        <div className='LoginPageAlternativesItem1 text1'><Link to='/SignUp'><p>Sign Up</p></Link></div>
        <div className='LoginPageAlternativesItem2 text1'><Link to='/ResetPassword'><p>Forgot Password</p></Link></div>
      </div>
    </div>
    </>

    
  );

  return (
        <>
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
                  <Link to={ '/Home' } ><input className='LoginPageSubmitButton heading2' type="submit" value="Sign In" onClick={Login()}></input></Link> {/* Change this for auth?  */}
                  
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

