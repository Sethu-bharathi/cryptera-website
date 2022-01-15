import React, { useRef } from 'react'
import Eventcard from '../Eventcard'
import '../../Styles/Events.css'

function Events() {
    const technicalref = useRef(null)
    const nontechnicalref = useRef(null)
    const flagshipref = useRef(null)
    const bodyref = useRef(null)
    const scrollhandler=(e)=>{
        e.preventDefault()
        bodyref.current.scrollLeft+=e.deltaY

    }
    const clearstyles = () => {
        nontechnicalref.current.style.color = "transparent"
        flagshipref.current.style.color = "transparent"
        technicalref.current.style.color = "transparent"
        technicalref.current.classList.remove("activex")
        nontechnicalref.current.classList.remove("activex")
        flagshipref.current.classList.remove("activex")
    }
    const technicalclick = () => {
        clearstyles()
        technicalref.current.style.color = "var(--fg-white)"
        technicalref.current.classList.add("activex")
    }
    const nontechnicalclick = () => {
        clearstyles()
        nontechnicalref.current.style.color = "var(--fg-white)"
        nontechnicalref.current.classList.add("activex")
    }
    const flagshipclick = () => {
        clearstyles()
        flagshipref.current.style.color = "var(--fg-white)"
        flagshipref.current.classList.add("activex")
    }
    return (
        <div className="events">
            <div className='events-header'>
                <h1 className='active-link' ref={technicalref} onClick={technicalclick} className='activex'>Technical </h1>
                <h1 ref={nontechnicalref} onClick={nontechnicalclick} >Non-Technical</h1>
                <h1 ref={flagshipref} onClick={flagshipclick}>Flagship</h1>
            </div>
            <div className='events-body' onWheel={scrollhandler} ref={bodyref}>
                <Eventcard primary="#24B47E" />
                <Eventcard primary="red" />
                <Eventcard primary="orange" />
                <Eventcard primary="indigo" />
                <Eventcard primary="violet" />
                <Eventcard primary="#24B47E" />


            </div>
        </div>
    )
}

export default Events

const Technical = () => {
    return (
        <div className="technical">
            Technicla
        </div>
    )
}

const Nontechnical = () => {
    return (
        <div>
            Non technical
        </div>
    )
}
export { Technical, Nontechnical }