import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import uuid from 'react-uuid';
import './App.css';
import Container from '@mui/material/Container';

//COMPONENETS
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import NavNav from './components/NavNav';
import ThemeContextWrapper from './components/themeContextWrapper';
import { ThemeContext } from './components/contextTheme';

//PAGES
 import Home from './pages/Home';
 import Login from './pages/Login';
 import Register from './pages/Register';
 import Settings from './pages/Settings';
 import SpeechRec from './pages/SpeechRec';
 import Landing from './pages/Landing';



function App() {


  return (


    <Router>
      <NavNav  />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/textspeech" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/speechrec" element={<SpeechRec />} />
        <Route path="/register" element={<Register />} />
        



        
      </Routes>
    </Router>

  );
}

export default App;
