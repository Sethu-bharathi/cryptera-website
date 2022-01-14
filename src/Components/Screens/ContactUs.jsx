import React from 'react'
import '../../Styles/ContactUs.css'
import Faq from '../Faq'
function ContactUs() {
    return (
        <div className='support'>
            <div className='support-container'>
                <h1 className='support-header'>Support</h1>
                <div className='support-content'>
Hello,I am <input placeholder='Your name' /> from <input placeholder='Institution name' />.You can email me at <input placeholder='Mail id' /> or reach me on <input placeholder='Mobile Number' />.
<br/><div className='txt-content'>I have some questions about <textarea className='text-area' />.</div>
                </div>
            </div>
            <div className='faq-container'>
                <div className='faq-header'>
                    Frequently asked questions
                </div>
                <div className="faq-content-container">
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
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
            </div>
        </div>
    )
}

export default ContactUs
