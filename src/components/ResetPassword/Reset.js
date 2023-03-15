// import React from 'react';
// import { useState } from 'react';
// import {ToastContainer,toast} from 'react-toastify';

// import {
//     signInWithEmailAndPassword,
//     getAuth,
//     confirmPasswordReset
// } from 'firebase/auth'
// import { Navigate, useNavigate } from 'react-router-dom';

// export default function Reset({location}) {
//     let Navigate=useNavigate();
//   const [loginData, setLoginData] = useState({});
//   const auth=getAuth();

//   const onInput = (event) => {
//     let data = { [event.target.name]: event.target.value }
//     setLoginData({ ...loginData, ...data })
//   }

//   const resetpassword=({password})=>{
//     const queryParams = new URLSearchParams(location.search)
    
//     const oobCode=queryParams.get("oobCode");
//     auth.
//     confirmPasswordReset(oobCode,password)
//     .then((response)=>{
//         console.log("success reset")
//       toast.success("Your are Successfully Loged In..");
//       setTimeout(()=>{
//         Navigate('/login');

//       },1000)

//   })
//   .catch((error) => {
    
//     console.log(error.message)
//     if(error.message === 'Firebase: Error (auth/invalid-email).')
//     {
//       toast.error('Please fill all the required fields');
//     }
//     if(error.message === 'Firebase: Error (auth/user-not-found).')
//     {
//       toast.error('Email not found');
//     }
//     if(error.message === 'Firebase: Error (auth/wrong-password).')
//     {
//       toast.error('Wrong Password');
//     }
   
// });
  
//     }

//   return (
//     <div className='register-main'>
//       <ToastContainer/>
//       <h1>Reset Password</h1>

//       <div className='card-main'>
//         <div className='inputs-container'>
          
//           <input
//             placeholder='Enter your Password'
//             className='input-fields'
//             onChange={onInput}
//             name='password'
//             type={'password'}
//           />
//           <button 
//           className='input-btn'
//           onClick={resetpassword}
//           >
//             Reset password
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }