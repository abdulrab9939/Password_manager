import React from 'react';
import { useState } from 'react';
import {ToastContainer,toast} from 'react-toastify';

import {
    signInWithEmailAndPassword,
    getAuth
} from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {
    let Navigate=useNavigate();
  const [loginData, setLoginData] = useState({});
  const auth=getAuth();

  const onInput = (event) => {
    let data = { [event.target.name]: event.target.value }
    setLoginData({ ...loginData, ...data })
  }

  const login=()=>{
    signInWithEmailAndPassword(auth,loginData.email,loginData.password)
    .then((response)=>{
      localStorage.setItem('userEmail',response.user.email)
      toast.success("Your are Successfully Loged In..");
      setTimeout(()=>{
        Navigate('/home');

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
    if(error.message === 'Firebase: Error (auth/wrong-password).')
    {
      toast.error('Wrong Password');
    }
   
});
  
    }

  return (
    <div className='register-main'>
      <ToastContainer/>
      <h1>Login</h1>

      <div className='card-main'>
        <div className='inputs-container'>
          <input
            placeholder='Enter your Email'
            className='input-fields'
            onChange={onInput}
            type='email'
            name='email'
          />
          <input
            placeholder='Enter your Password'
            className='input-fields'
            onChange={onInput}
            name='password'
            type={'password'}
          />
          <button 
          className='input-btn'
          onClick={login}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}