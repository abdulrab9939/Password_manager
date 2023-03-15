
import React,{useState,useEffect} from 'react'
import {Box,AppBar,Toolbar,Button, Typography} from '@mui/material'
import { color, margin } from '@mui/system'
import {Link} from 'react-router-dom'
import{ auth, db } from '../firebase_config'
import { collection, getDoc,getDocs,query,where } from 'firebase/firestore'
import {ToastContainer,toast} from 'react-toastify';
import {getAuth,signOut,onAuthStateChanged} from 'firebase/auth'
import {useNavigate}  from 'react-router-dom'


const Navbar = () => {
  //getCurrent User
  let auth=getAuth();
  let Navigate=useNavigate();
  function GetCurrentUser(){
    const [user,setUser]=useState('')
    const userCollectionRef=collection(db,"userPassword")

    useEffect(()=>{
      auth.onAuthStateChanged(userlogged=>{
        if(userlogged){
          const getUsers = async () => {
            const q=query(collection(db,"userPassword"), where("uid","==",userlogged.uid))
            const data = await getDocs(q);
            setUser(data.docs.map((doc)=> ({...doc.data(),id:doc.id})))
          }
          getUsers();
        }
        else{
          setUser(null)
        }

      })

    },[])
    return user

    

  }
  const loggeduser=GetCurrentUser();
  const logout =() =>{
    signOut(auth)
    .then(()=>{
       
        localStorage.removeItem('userEmail')
    toast.success("Your are Successfully Loged out..");
  setTimeout(()=>{
    Navigate('/login');

  },1500)
    
      
       
    })
  }
  return (
    
    <>
    <AppBar position='sticky'>
      <Toolbar>
          <Typography variant='h5'>
               Password Manager App

          </Typography>
          {!loggeduser && 
          
          <Box display={'flex'} marginLeft='auto'>
            
         
             
          <Button sx={{margin:1,color:'white'}}   LinkComponent={Link} to='/register'>            
                     Register
              </Button>
              <Button  sx={{margin:1,color:'white'}}   LinkComponent={Link} to='/login'>
                  Login
              </Button>
              <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to='/home'>
                  Home
              </Button>
              <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to='/passreset'>
                  Passreset
              </Button>
           
            
             
              </Box>
           
}
{loggeduser &&


 <Box display={'flex'} marginLeft='auto'>
            
           
            <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to='/passreset'>
                  Passreset
              </Button>
            
                <Button sx={{margin:1,color:'white'}}  onClick={logout}>
                  Logout
                </Button>
                
                </Box>
             
}

        </Toolbar>

      </AppBar>
 </>
  )
}

export default Navbar
