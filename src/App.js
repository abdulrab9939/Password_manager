import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import {app,database} from './firebase_config';
import Navbar from './components/Navbar';
import Passreset from './components/Forgetpassword/Passreset'


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/home" element={<Home  database={database}/>} />
        <Route path="/register" element={<Register database={database}/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/passreset" element={<Passreset />} />
 



    



      </Routes>
    </div>
  );
}

export default App;