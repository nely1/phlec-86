import {React, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SettingsPage.css';
import {useDispatch} from  'react-redux';
import {signUpUser} from '../actions/signUp';

function SettingsPage() {
    return (
    <>
    <div className='SettingsPage'>
      <div className='SettingsPageBox'>
          <img className="profileImage2" src="profiledefault.png" alt="Default Profile" />
          <form className='SettingsPageForm'>
            <p className='PersonalInfo'>Name : 
              <label className='SignUpPageInputBox'>
                  <input className='SignUpPageInputField' type="text" ></input>
              </label>
            </p>
            <input className='ChangeButton' type="submit" value="Change"></input>
            <p className='PersonalInfo'>Username : </p>
              <label className='SignUpPageInputBox'>
                  <input className='SignUpPageInputField' type="text" ></input>
              </label>
            <input className='ChangeButton' type="submit" value="Change"></input>
            <p className='PersonalInfo'>Email : </p>
              <label className='SignUpPageInputBox'>
                  <input className='SignUpPageInputField' type="text" ></input>
              </label>
            <input className='ChangeButton' type="submit" value="Change"></input>
            <p className='PersonalInfo'>Theme : </p>
              <label className='SignUpPageInputBox'>
                  <input className='SignUpPageInputField' type="password" ></input>
              </label>
            <input className='ChangeButton' type="submit" value="Change"></input>
            <p className='PersonalInfo'>Password : </p>
              <label className='SignUpPageInputBox'>
                  <input className='SignUpPageInputField' type="password" ></input>
              </label>
            <input className='ChangeButton' type="submit" value="Change"></input>

          </form>
      </div>
    </div>
    </>
    )
}

export default SettingsPage
