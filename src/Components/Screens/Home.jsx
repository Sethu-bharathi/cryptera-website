import React, { useEffect, useRef } from 'react'
import '../../Styles/Home.css'
import {useNavigate} from 'react-router-dom'
function Home() {
    const navigator = useNavigate()
    const Homeref=useRef(null)
    const scrollHandler=()=>{
        //if scroll hits bottom
        if (Homeref.current.offsetHeight+Homeref.current.scrollTop>=Homeref.current.scrollHeight){

            navigator('/about_us')
        }
    }
    return (
        <div className='home main-section' id="Home" ref={Homeref}    onScroll={scrollHandler}>
            <div className='py-56'>hello </div>
            <div className='py-56'>hello </div>
            <div className='add-green'>
                    
            </div>
            
        </div>
    )
}

export default Home
