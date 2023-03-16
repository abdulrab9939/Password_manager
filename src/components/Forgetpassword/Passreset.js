import React from 'react';
import { useState } from 'react';
import {ToastContainer,toast} from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';

import {
    signInWithEmailAndPassword,
    getAuth
} from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
    let Navigate=useNavigate();
  const [loginData, setLoginData] = useState({});
  const auth=getAuth();

  const onInput = (event) => {
    let data = { [event.target.name]: event.target.value }
    setLoginData({ ...loginData, ...data })
  }

  const forgetpassword=(email)=>{
    sendPasswordResetEmail(auth,loginData.email)
    .then((response)=>{
      toast.success("Mail send successfully ..");
      setTimeout(()=>{
        Navigate('/login');

      },1000)

  })
  .catch((error) => {
    
    console.log(error.message)
    if(error.message === 'Firebase: Error (auth/invalid-email).')
    {
      toast.error('Please fill all the required fields');
    }
    if(error.message === 'Firebase: Error (auth/user-not-found).')
    {
      toast.error('Email not found');
    }
    
   
});
  
    }

  return (
    <div className='register-main'>
      <ToastContainer/>
      <h1>Forget password</h1>

      <div className='card-main'>
        <div className='inputs-container'>
          <label>Enter Your Email </label>
          <input
            placeholder='Enter your Email'
            className='input-fields'
            onChange={onInput}
            type='email'
            name='email'
          />
         
          <button 
          className='input-btn'
          onClick={forgetpassword}
          >
            ForgetPassword
          </button>
        </div>
      </div>
    </div>
  )
}