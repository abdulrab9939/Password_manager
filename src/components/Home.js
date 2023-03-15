import React,{useState,useEffect} from 'react'
import { onSnapshot,collection,doc,updateDoc,where,query } from 'firebase/firestore'
import { database } from '../firebase_config'

import BasicModal from './Modal';
import {AiFillEye} from 'react-icons/ai'
import PasswordModal from './PasswordModal';
import {getAuth,signOut,onAuthStateChanged} from 'firebase/auth'
import {useNavigate}  from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify';

export default function Home( {
    database

})
{


 const [open, setOpen] = useState(false);
 let userEmail = localStorage.getItem('userEmail');
 let auth=getAuth();
 let Navigate=useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [passwordopen, setPasswordOpen] = useState(false);
  const [showPassword,setShowPassword]   =useState({})
  const handlePasswordClose = () => setPasswordOpen(false);

    
  const collectionRef = collection(database, 'userPassword');
  const emailQuery = query(collectionRef,where('email' ,'==',userEmail));

  const [passwordArray,setPasswordArray] = useState([]);

    const [passwordobject,setPasswordObject] = useState({});
    const [oldPasswords,setOldPasswords] = useState([]);
    const getPasswords = ()=>{
        onSnapshot(emailQuery,(response)=>{
            setPasswordArray(response.docs.map((item) =>{
                return {...item.data(),id:item.id}

            }))

            const data =response.docs.map((item)=>{
                return {...item.data(),id:item.id}
            })
            setOldPasswords(data[0].passwordArray)
         })
         
    }
    const getPasswordInputs =(event)=>{


        const data = {[event.target.name]:event.target.value}
        setPasswordObject({...passwordobject,...data});
    }
    const addPassword =()=>{
        const docToUpdate = doc(database,'userPassword',passwordArray[0].id)
        updateDoc(docToUpdate,{
            passwordArray:[...oldPasswords,passwordobject]

            // passwordArray:[...oldPassword,passwordobject]
            

        })
        .then(()=>{
           
                toast.success("Password Added Successfully")
            
        })
      
    }
     const openPasswordModal =(name,password)=>{
        setShowPassword({
            name:name,
            password:password
        })
        setPasswordOpen(true)
     }

    
    useEffect(()=>{
        onAuthStateChanged(auth,(response)=>{
          if(response){
            getPasswords()

          }
          else{
            Navigate('/home')
          }
        })
    },[]);

  




    return (
        <>
        
        <div className='home-main'>
           <ToastContainer/>
            <h1>Welcome </h1>
            {/* <div className='logout-btn'>
            <button 
                    className='input-btn'
                    onClick={logout}
                    >
                        Log Out
                    </button>

            </div> */}
            
        <div className='card-main'>

        
        <button 
                    className='add-password'
                    onClick={handleOpen}
                    >
                        Add a Password
                    </button>
                  
            
     
                   

        
            

     <div className='password-main'>
        
      {passwordArray.map((password) => {
        return (
          <>
                {password.passwordArray.map((password)=>{
                    return (
                        <div className='password-data'>
                           
                         <p className='password-display'>{password.name}</p>
                        <AiFillEye 
                        className='eye-icon'
                        onClick={()=>openPasswordModal(password.password)}
                    
                        size={30
                        }/>
                            {/* <p className='password-display'>{password.password}</p> */}
                        </div>
                    )
                })}
 
          </>
        );
      })}
    </div>
          


</div>
             <BasicModal
             open={open}
             handleClose={handleClose}
             getPasswordInputs={getPasswordInputs}
             addPassword={addPassword}
             />
             <PasswordModal
             open={passwordopen}
             handleClose={handlePasswordClose}
             showPassword={showPassword}
             originalPassword={passwordArray[0]?.password}
            handlePasswordClose={handlePasswordClose}
            />
             

        </div>
        </>


    )
}
