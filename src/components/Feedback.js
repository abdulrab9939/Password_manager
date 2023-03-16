import React,{ useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import { db,auth } from '../firebase_config'
import './Feedback.css'
const Feedback = () => {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [phonenumber,setPhonenumber] = useState("");
    const [comment,setComment] = useState("");
    
    const Navigate = useNavigate()
    const [errorMsg,setErrorMsg] = useState("")
    const [successMsg,setSuccessMsg] = useState("")

    const handleSubmit =(e) =>{
        e.preventDefault();
       
            addDoc(collection(db,"Feedback"),{
                 username: username,email:email,phonenumber:phonenumber,
                comment:comment
            })
            .then(()=>{
                setSuccessMsg('Feedback successfully Send, You will now be automatically redirected to login page. ')
                setUsername('')
                setPhonenumber('')
                setEmail('')
                setComment('')
                setErrorMsg('')
                setTimeout(() => {
                      setSuccessMsg('');
                      Navigate('/login');
                },1000);

            })
            
        
        

    }

  return (
     <div>


      <div className='signup-container'>
        <form className='signup-form' onSubmit={handleSubmit}>

            <p style={{textAlign:"center"}}> Send Feedback</p>
            {successMsg&&<>
            <div className='success-msg'>
                {successMsg}
            </div></>}
            {errorMsg && <>
            <div className='error-msg'>
                {errorMsg}

            </div>
            </>} 
            <label >Your Name</label>
            <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='First and last name' />
            <label >Mobile Number</label>
            <input onChange={(e)=>setPhonenumber(e.target.value)} type="tel" placeholder='Mobile Number' />
            <label >Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email' />
            <label >Feedback</label>
            <textarea onChange={(e)=>setComment(e.target.value)}  placeholder='Enter your Feedback'></textarea>
            <button type='submit'>Send</button>
            <div>
                <span>Already have an account? </span>
                <Link to="/login">Sign In</Link>
            </div>

        </form>

      </div>
    </div>
  )
}

export default Feedback
