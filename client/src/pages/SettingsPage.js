import {React, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SettingsPage.css';
import {useDispatch} from  'react-redux';
import {signUpUser} from '../actions/signUp';

function SettingsPage() {
    const [change, setChange] = useState(false);
    const userInfo = JSON.parse(localStorage.getItem("profile"));

    function changingState() {
        setChange((prev) => !prev);
    }

    function handleChange(event) {
        changingState();
    }

    return (
        <>
            <div className='SettingsPage'>
                <div className='SettingsPageBox'>       
                    <img className="profileImage2" src="profiledefault.png" alt="Default Profile" />
                    {!change ? (
                        <>
                            <p className='PersonalInfo'>
                                Name : &emsp;&emsp;&emsp; {userInfo.result.firstName + " " + userInfo.result.lastName}
                            </p>         
                            <p className='PersonalInfo'>
                                Username : &emsp; {userInfo.result.userName}
                            </p>            
                            <p className='PersonalInfo'>
                                Email : &emsp;&emsp;&emsp; {userInfo.result.email}    
                            </p>           
                            <p className='PersonalInfo'>
                                Theme : &emsp;&emsp;&ensp; {userInfo.result.theme}
                            </p>
                            <p className='PersonalInfo'>
                                Password : 
                            </p>           
                            <button className='ChangeButton text3' onClick={changingState}> Change </button>
                        </>
                    ) : (
                        <>
                            <p className='PersonalInfo'> 
                                Name : &emsp;&emsp;&emsp;
                                <label className = 'SettingsPageInputBox'>                
                                    <input className='SettingsPageInputField' type='text'></input>
                                </label>   
                            </p>   
                            <p className='PersonalInfo'>
                                Username : &emsp;
                                <label className = 'SettingsPageInputBox'>                
                                    <input className='SettingsPageInputField' type='text'></input>
                                </label>
                            </p>            
                            <p className='PersonalInfo'>
                                Email : &emsp;&emsp;&emsp;
                                <label className = 'SettingsPageInputBox'>                
                                    <input className='SettingsPageInputField' type='text'></input>
                                </label>    
                            </p>           
                            <p className='PersonalInfo'>
                                Theme : &emsp;&emsp;&ensp;
                                <label className = 'SettingsPageInputBox'>                
                                    <input className='SettingsPageInputField' type='text'></input>
                                </label>
                            </p>
                            <p className='PersonalInfo'>
                                Password : &emsp;&nbsp;
                                <label className = 'SettingsPageInputBox'>                
                                    <input className='SettingsPageInputField' type='password'></input>
                                </label>
                            </p>           
                            <button className='ChangeButton text3' onClick={handleChange}> Save </button>
                        </>
                    ) }  
                </div>
            </div>
        </>
    )
}

export default SettingsPage
