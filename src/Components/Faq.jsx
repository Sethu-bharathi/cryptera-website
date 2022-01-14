import React, { useRef, useState } from 'react'

function Faq() {
    const iconref=useRef(null)
    const [open, setopen] = useState(false)
    const toggleanswer = (e) => {
        setopen(!open)
        iconref.current.classList.toggle('rotate')
    }
    return (
        <div className="faq-card" >
            <div className="faq-question" onClick={toggleanswer}>
                <div>
                    What is the difference between a free trial and a paid subscription?
                </div>
                <div className='down-icon' ><i class="fas fa-chevron-down" ref={iconref}></i></div>
            </div>
            {
                open &&
                <div className="faq-answer">
                    A free trial is a 30-day period where you can try out the app without paying.
                    After the trial period, you can choose to pay for the app.
                </div>
            }


        </div>
    )
}

export default Faq
