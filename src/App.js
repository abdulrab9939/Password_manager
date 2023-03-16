import React from 'react'

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import {app,database} from './firebase_config';
import Navbar from './components/Navbar';
import Passreset from './components/Forgetpassword/Passreset'
import About from './components/About';
import Feedback from './components/Feedback'
import ContactUs from './components/ContactUs'
import ErrorPage from './components/ErrorPage'
import { useState } from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles'
// import { Switch } from '@mui/material';
// import CssBaseline from '@mui/material/CssBaseline'
// import Dark from './components/Dark'

import Resume from './components/Resume';
function App() {
  // const [theme, settheme] = useState(false);
  // const darkTheme = createTheme({
  //     palette: {
  //         mode: theme ? 'dark' : 'light',
  //     },
  // });
  // const handleChange = (event) => {
  //     settheme(event.target.checked);
  // }
  
  return (
   
    <div>
      <Navbar/>
      
      <Routes>
      <Route path="/home" element={<Home  database={database}/>} />
        <Route path="/" element={<Register database={database}/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/forgetpass" element={<Passreset />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/resume" element={<Resume />} />



        <Route  path='*'  element={<ErrorPage/>}/>



    



      </Routes>
      {/* <ThemeProvider theme={darkTheme}>
      <CssBaseline />
                <Dark></Dark>
                <label>Dark Mode</label>

                <Switch

                    checked={theme}
                    color='success'
                    onChange={handleChange} />
      </ThemeProvider> */}
    </div>
  );
}

export default App;