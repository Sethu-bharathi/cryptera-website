import React, { useRef } from 'react'
import '../../Styles/WebDevs.css'
import profile1 from '../../Assets/1905098.png'
import { useNavigate } from 'react-router-dom'
function WebDevs() {
    const webdevsref=useRef(null)
    const navigate=useNavigate()
    const scrollhandler=()=>{
        if (webdevsref.current.offsetHeight+webdevsref.current.scrollTop>webdevsref.current.scrollHeight){
            navigate("/commitee")
        }
    }
    return (
        <div className='webdevs' ref={webdevsref} onScroll={scrollhandler}>
            <div className='webdevs-container'>
                <div >
                    <h1 className='webdevs-title'>Web Developers</h1>
                    <p className='webdevs-tilte-description'>Join the community around the world</p>
                </div>
                <div className='content-container'>
                    <div className='web-card'>
                        <div className='web-card-image'>
                            <img src={profile1} alt='webdevs-1' />
                        </div>
                        <div className='web-card-content'>
                            <div className='name'>Naveenkumar M</div>
                            <div className='description'>I am a web developer from bombay is it yes thats true i am from bombay</div>
                            <div className='media-container'>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-medium"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>

                    </div>
                    <div className='web-card'>
                        <div className='web-card-image'>
                            <img src={profile1} alt='webdevs-1' />
                        </div>
                        <div className='web-card-content'>
                            <div className='name'>Naveenkumar M</div>
                            <div className='description'>I am a web developer from bombay is it yes thats true i am from bombay</div>
                            <div className='media-container'>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-medium"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>

                    </div>
                    <div className='web-card'>
                        <div className='web-card-image'>
                            <img src={profile1} alt='webdevs-1' />
                        </div>
                        <div className='web-card-content'>
                            <div className='name'>Naveenkumar M</div>
                            <div className='description'>I am a web developer from bombay is it yes thats true i am from bombay</div>
                            <div className='media-container'>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-medium"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>

                    </div>
                    <div className='web-card'>
                        <div className='web-card-image'>
                            <img src={profile1} alt='webdevs-1' />
                        </div>
                        <div className='web-card-content'>
                            <div className='name'>Naveenkumar M</div>
                            <div className='description'>I am a web developer from bombay is it yes thats true i am from bombay</div>
                            <div className='media-container'>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-medium"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>

                    </div>
                    <div className='web-card'>
                        <div className='web-card-image'>
                            <img src={profile1} alt='webdevs-1' />
                        </div>
                        <div className='web-card-content'>
                            <div className='name'>Naveenkumar M</div>
                            <div className='description'>I am a web developer from bombay is it yes thats true i am from bombay</div>
                            <div className='media-container'>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-medium"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default WebDevs
