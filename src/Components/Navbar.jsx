import React, { useEffect } from 'react'
import { div, Link, useLocation } from 'react-router-dom'
import '../Styles/ComponentsStyles/Navbar.css'
function Navbar() {
    // const location=useLocation()
    // useEffect(()=>{
    //     const Link_Nodes=document.querySelectorAll('.navbar-link')
    //     Link_Nodes.forEach(node=>{
    //         node.classList.remove('active')
    //     })
    //     if(location.pathname==='/about_us'){
    //         //set about us link as active
    //         document.title = 'About Us'
    //         document.getElementById('about_us').classList.add('active')

    //     }
    // },[location])
    const link_click=(e)=>{
        const Link_Nodes=document.querySelectorAll('.navbar-link')
        Link_Nodes.forEach(node=>{
            node.classList.remove('active')
        })
        e.target.classList.add('active')
    }
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                MD
            </div>
            <div className='navbar-links'>
                <Link to="/" onClick={link_click} className="active navbar-link" id="Home-link">Home</Link>
                <Link to="about_us" onClick={link_click} id="about_us" className="navbar-link" id="about_us-link">About us</Link>
                <Link to="events" onClick={link_click} className=" navbar-link">Events</Link>
                <Link to="web_devs" onClick={link_click} className="navbar-link">Web devs</Link>
                <Link to="commitee" onClick={link_click} className=" navbar-link">Commitee</Link>
                <Link to="contact_us" onClick={link_click} className=" navbar-link">Contact Us</Link>

            </div>
            <div className='bottom-special'>
                Scroll
            </div>
        </div>
    )
}

export default Navbar
