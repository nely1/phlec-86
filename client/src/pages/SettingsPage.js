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
            <p className='text4'>Name : </p>
              <label className='SignUpPageInputBox'>
                  <input className='SignUpPageInputField' type="text" ></input>
              </label>
            <p className='text4'>Username : </p>
              <label className='SignUpPageInputBox'>
                  <input className='SignUpPageInputField' type="text" ></input>
              </label>
            <p className='text4'>Email : </p>
              <label className='SignUpPageInputBox'>
                  <input className='SignUpPageInputField' type="text" ></input>
              </label>
            <p className='text4'>Theme : </p>
              <label className='SignUpPageInputBox'>
                  <input className='SignUpPageInputField' type="password" ></input>
              </label>
            <p className='text4'>Password : </p>
              <label className='SignUpPageInputBox'>
                  <input className='SignUpPageInputField' type="password" ></input>
              </label>

          </form>
      </div>
    </div>
    </>
    )
}

export default SettingsPage
