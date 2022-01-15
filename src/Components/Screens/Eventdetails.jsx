import React, { useRef } from 'react'
import '../../Styles/Eventdetails.css'
import profile from '../../Assets/Events/one.jpg'
import dummyprofile from '../../Assets/1905098.png'
import calendar from '../../Assets/Icons/calendar.svg'
import Faq from '../Faq'
function Eventdetails() {
    return (
        <div className='eventdetails'>
            <div className='back-btn-container'>
                <i class="fas fa-arrow-left"></i>
            </div>
            <div className='eventdetails-container'>
                <div className='flex flex-row image-container'>
                    <div className='one'>
                        <img src={profile} alt='event' />
                    </div>
                    <div className="two">
                        <div> <img src={profile} alt='event' /></div>
                        <div><img src={profile} alt='event' /></div>
                        <div><img src={profile} alt='event' /></div>
                        <div><img src={profile} alt='event' /></div>
                    </div>
                </div>
                <div className='event-content-container'>
                    <div className='event-content-section1'>
                        <div className='e-title'>
                            <div className='header'>
                                <h1>Event Title</h1>
                                <p><i className='fas fa-calendar-week mr-2 mb-3'></i> Jan 2nd,11.00 pm</p>
                            </div>
                            <div className='google-calendar'>
                                <img src={calendar} alt='event' />
                            </div>
                        </div>

                        <div className='tags'>
                            <div className='tag'>   <i class="fas fa-tag"></i> technical </div>
                            <div className='tag'>   <i class="fas fa-tag"></i> python </div>
                        </div>
                        <div className='e-description'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className='e-title-m'>
                            Eligibility
                        </div>
                        <div className='e-description-m'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum do</p>
                        </div>
                        <div className='e-title-m'>
                            Rules
                        </div>
                        <div className='e-description-m'>
                            <ul className='list-decimal px-8'>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            </ul>

                            <div className='e-title-m'>
                                Prize
                            </div>

                            <div className='e-description-m cen'>
                                <div className='trophies'>
                                    <div className='silver-trophy'>
                                        <i class="fa fa-trophy"></i>
                                        <div>
                                            <div>Second place</div>
                                            <i className='fas fa-rupee-sign'></i>
                                            1000
                                        </div>
                                    </div>
                                    <div className='gold-trophy'>
                                        <i class="fa fa-trophy"></i>
                                        <div>
                                            <div>First place</div>
                                            <i className='fas fa-rupee-sign'></i>
                                            10000
                                        </div>
                                    </div>
                                    <div className='bronze-trophy'>
                                        <i class="fa fa-trophy"></i>
                                        <div>
                                            <div>Third place</div>
                                            <i className='fas fa-rupee-sign'></i>
                                            500
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='e-title-m'>
                                Result 
                            </div>
                            <div className='e-description-m '>
                                Will be announced soon
                            </div>
                            <div className='e-title-m'>
                                Event managers
                            </div>
                            <div className='managers'>
                                <ManagerProfile />
                                <ManagerProfile />
                                <ManagerProfile />
                                <ManagerProfile />
                                <ManagerProfile />
                            </div>
                            <div className='e-title-m faq-header fq-header'>
                                Frequently asked questions
                            </div>
                            <div className='faq'>
                                <Faq />
                                <Faq />
                                <Faq />
                                <Faq />
                                <Faq />
                                <Faq />
                                <Faq />
                                <Faq />
                                <Faq />
                            </div>
                                <Faq />
                            <div className='final-btn'>
                                <div className='submit-btn-event'>
                                    <div>SUBMIT</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eventdetails

const ManagerProfile = () => {
    const circleref = useRef(null)
    const profileref = useRef(null)
    const socialref = useRef(null)
    const cardref = useRef(null)
    const hoverhandler = () => {
        circleref.current.classList.add("circle-hover")
        socialref.current.classList.add("social-hover")
        profileref.current.classList.add("img-hover")
    }
    const leavehandler = () => {
        circleref.current.classList.remove("circle-hover")
        socialref.current.classList.remove("social-hover")
        profileref.current.classList.remove("img-hover")
    }
    return (
        <div className='manager-profile'>
            <div className='manager-profile-container' ref={cardref} >
                <div className='circle circle-hover' ref={circleref}>

                </div>
                <div className='manager-profile-image img-hover ' ref={profileref}>
                    <img src={dummyprofile} alt='event' />
                </div>
                <div className='manager-profile-details'>
                    <div className='manager-profile-name'>
                        <h1>Manager Name</h1>
                    </div>
                    <div className='manager-profile-description'>
                        <p>Third year CSE</p>
                    </div>
                </div>
                <div className='manager-social-links social-hover' ref={socialref}>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className='fab fa-linkedin-in'></i>
                </div>
            </div>
        </div>
    )
}
