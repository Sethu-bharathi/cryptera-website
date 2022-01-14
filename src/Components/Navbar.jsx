
import React, { useEffect, useRef } from 'react'
import { div, Link, useLocation } from 'react-router-dom'
import '../Styles/ComponentsStyles/Navbar.css'
function Navbar() {
    const location = useLocation()
    const homeref = useRef(null)
    const aboutref = useRef(null)
    const contactref = useRef(null)
    const eventref = useRef(null)
    const webref = useRef(null)
    const commiteeref = useRef(null)
    const clearActive=()=>{
        homeref.current.classList.remove('active')
        aboutref.current.classList.remove('active')
        contactref.current.classList.remove('active')
        eventref.current.classList.remove('active')
        webref.current.classList.remove('active')
        commiteeref.current.classList.remove('active')
    }
    useEffect(() => {
        if(location.pathname==="/"){
            clearActive()
            homeref.current.classList.add("active")
        }
        else if(location.pathname==="/about_us"){
            clearActive()
            aboutref.current.classList.add("active")
        }
        else if(location.pathname==="/contact_us"){
            clearActive()
            contactref.current.classList.add("active")
        }
        else if(location.pathname==="/events"){ 
            clearActive()
            eventref.current.classList.add("active")
        }
        else if(location.pathname==="/web_devs"){
            clearActive()
            webref.current.classList.add("active")
        }
        else if(location.pathname==="/commitee"){
            clearActive()
            commiteeref.current.classList.add("active")
        }
        else{
            clearActive()
        }
    }, [location])
    // const link_click = (e) => {
    //     const Link_Nodes = document.querySelectorAll('.navbar-link')
    //     Link_Nodes.forEach(node => {
    //         node.classList.remove('active')
    //     })
    //     e.target.classList.add('active')
    // }
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                MD
            </div>
            <div className='navbar-links'>
                <Link to="/" ref={homeref}  className="active navbar-link" id="Home-link">Home</Link>
                <Link to="about_us" ref={aboutref}  id="about_us" className="navbar-link" id="about_us-link">About us</Link>
                <Link to="events" ref={eventref}  className=" navbar-link">Events</Link>
                <Link to="web_devs" ref={webref}  className="navbar-link">Web devs</Link>
                <Link to="commitee" ref={commiteeref}  className=" navbar-link">Commitee</Link>
                <Link to="contact_us" ref={contactref}  className=" navbar-link">Contact Us</Link>

            </div>
            <div className='bottom-special'>
                Scroll
            </div>
        </div>
    )
}

export default Navbar
