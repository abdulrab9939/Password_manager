import React from 'react';
import { useState } from 'react';
import { collection,addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore'
import {ToastContainer,toast} from 'react-toastify';

import {
    createUserWithEmailAndPassword,
    getAuth
} from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom';


export default function Register( {
    database    
}){
    let Navigate=useNavigate();

    const [registerData, setRegisterData] = useState({});
    const collectionRef = collection(database, 'userPassword');
    const [errorMsg,setErrorMsg] = useState("")
    const [successMsg,setSuccessMsg] = useState("")

    const auth=getAuth();

    const onInput = (event) => {
        let data = {[event.target.name]: event.target.value}
        setRegisterData({...registerData, ...data})
    }


    const register=()=>{
        createUserWithEmailAndPassword(auth,registerData.email,registerData.password)
        .then(response =>{
            sessionStorage.setItem('userEmail',response.user.email);
            addDoc(collectionRef,{
                email:registerData.email, 
                password:registerData.password,
                passwordArray:[]

    
            })
            .then(()=>{
                toast.success("Your are Successfully Registered..");
                 
               
                setTimeout(()=>{
                    Navigate('/login');

                },1000)

            })
           
            .catch(err =>{
                toast.error(err.message);
                

            })
            
            
        })
        .catch((error) => {
            console.log(error.message)

            if(error.message ==='Firebase: Error (auth/missing-email).'){
                toast.error("Please Fill The Email")
            }
            if(error.message ==='Firebase: Error (auth/admin-restricted-operation).'){
                toast.error("Please Fill The All Fields")
            }
            if(error.message ==='Firebase: Error (auth/internal-error).'){
                toast.error("Please fill all the required fields")
            }
           
            if(error.message === 'Firebase: Error (auth/invalid-email).')
            {
                toast.error("Please fill all the required fields")
            }
            if(error.message === 'Firebase: Error (auth/email-already-in-use).')
            {
                toast.error("User Already Exist")
            }
            if ( error.message==='Firebase:Error (auth/weak-password).') {
                return 'Password cannot be empty and must be at least 8 chars!';
              }

            if (error.message === 'weak-password') {
                toast.error('The password was weak, try another. Perhaps longer with special characters.');
              }
        });

    }
    

    return (
        <div className='register-main'>
           <ToastContainer/>
            <h1>Register</h1>
            {successMsg&&<>
            <div className='success-msg'>
                {successMsg}
            </div></>}
            {errorMsg && <>
            <div className='error-msg'>
                {errorMsg}

            </div>
            </>} 

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
                    onClick={register}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}