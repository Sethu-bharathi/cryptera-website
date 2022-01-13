import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Components
import Navbar from './Components/Navbar';

//Screens
import Home from './Components/Screens/Home';
import AboutUs from './Components/Screens/AboutUs';
import ContactUs from './Components/Screens/ContactUs';
import WebDevs from './Components/Screens/WebDevs';
import Commitee from './Components/Screens/Commitee';
import Events from './Components/Screens/Events';

function App() {
  return (
    <div className='main-container'>
      <BrowserRouter>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about_us" element={<AboutUs />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/web_devs" element={<WebDevs />}></Route>
            <Route path="/commitee" element={<Commitee />}></Route>
            <Route path="/contact_us" element={<ContactUs />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
