
import React, { useState, useEffect } from 'react'
import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material'
import { color, margin } from '@mui/system'
import { Link } from 'react-router-dom'
import { auth, db } from '../firebase_config'
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";
import './Navbar.css'

const Navbar = () => {
  // let hamMenuIcon = document.getElementById("ham-menu");
  // let navBar = document.getElementById("nav-bar");
  // let navLinks = navBar.queryselectorAll("li");

  // hamMenuIcon.addEventListener("click", () => {
  //   navBar.classList.toggle("active");
  //   hamMenuIcon.classList.toggle("fa-times");
  // });
  // navLinks.forEach((navLinks) => {
  //   navLinks.addEventListener("click", () => {
  //     navBar.classList.remove("active");
  //     hamMenuIcon.classList.toggle("fa-times");
  //   });
  // });

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );


  };


  //getCurrent User
  let auth = getAuth();
  let Navigate = useNavigate();
  function GetCurrentUser() {
    const [user, setUser] = useState('')
    const userCollectionRef = collection(db, "userPassword")

    useEffect(() => {
      auth.onAuthStateChanged(userlogged => {
        if (userlogged) {
          const getUsers = async () => {
            const q = query(collection(db, "userPassword"), where("uid", "==", userlogged.uid))
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
          }
          getUsers();
        }
        else {
          setUser(null)
        }

      })

    }, [])
    return user



  }
  const loggeduser = GetCurrentUser();
  const logout = () => {
    signOut(auth)
      .then(() => {

        localStorage.removeItem('userEmail')
        toast.success("Your are Successfully Loged out..");
        setTimeout(() => {
          Navigate('/login');

        }, 1500)



      })
  }
  return (

    <>
      {/* <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='h5'>
            Password Manager App

          </Typography>
          {!loggeduser &&

            <Box display={'flex'} marginLeft='auto'>



              <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to='/register'>
                Register
              </Button>
              <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to='/login'>
                Login
              </Button>
              <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to='/feedback'>
                Feedback              </Button>
              <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to='/about'>
                About
              </Button>




            </Box>

          }
          {loggeduser &&


            <Box display={'flex'} marginLeft='auto'>

              <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to='/home'>
                Home
              </Button>
              <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to='/forgetpass'>
                Forgetpassword
              </Button>

              <Button sx={{ margin: 1, color: 'white' }} onClick={logout}>
                Logout
              </Button>

            </Box>

          }

        </Toolbar>

      </AppBar> */}

      {/* <header>
			<h3>Password Management App</h3>
      {!loggeduser &&
			<nav ref={navRef}>
     

			<Link to='/' ><a  >Register</a>	</Link>
			<Link to='/login' ><a  >Login</a>	</Link>
      <Link to='/contact' ><a  >ContactUs</a>	</Link>

      <Link to='/feedback' ><a  >Feedback</a>	</Link>
      <Link to='/about' ><a  >About me</a>	</Link>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
}
{loggeduser &&
  <nav ref={navRef}>
     

     <Link to='/home' ><a  >Home</a>	</Link>
     <Link to='/forgetpass' ><a>Forgetpassword</a>	</Link>
     <Link  onClick={logout}><a  >Logout</a>	</Link>

    

       <button
         className="nav-btn nav-close-btn"
         onClick={showNavbar}>
         <FaTimes />
       </button>
     </nav>
}
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
     
		</header> */}

      {/* <header>
      <nav>
        <a href="#home" id="logo">Site Logo</a>
        <i className="fas fa-bars" id="ham-menu"></i>
        <ul id="nav-bar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    <section id="home">
      <h1>Home Section</h1>
    </section> */}

      <nav class="navbar">


        <div class="logo">MUO</div>


        <ul class="nav-links">


          <input type="checkbox" id="checkbox_toggle" />

          <label for="checkbox_toggle" class="hamburger">&#9776;</label>


          {!loggeduser && <div class="menu">

            <li><a href="/">Register</a></li>

            <li><a href="/login">Login</a></li>

           

            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/feedback">Feedback </a></li>

            <li><a href="/about">About me</a></li>

          </div>
}
{loggeduser && <div class="menu">

            <li><a href="/home">Home</a></li>

            <li><a href="/forgetpass">Forgetpassword</a></li>

           

            <li><a onClick={logout}>Logout</a></li>
            
          </div>
}
        </ul>

      </nav>

    </>
  )
}

export default Navbar
