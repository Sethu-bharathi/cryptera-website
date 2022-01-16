import React from 'react'
import abt_bg from '../../Assets/abt-us.svg'
function AboutUs() {
    return (
        <div>
            <div className='flex flex-row items-center justify-center w-full'>
                <div style={{ width: "100%", margin: "auto" }}>
                    <img src={abt_bg} className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
