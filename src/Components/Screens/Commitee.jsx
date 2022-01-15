import React from 'react'
import profile1 from '../../Assets/1905098.png'
import '../../Styles/Commmitee.css'
function Commitee() {
    return (
        <div className='webdevs' >
            <div className='webdevs-container'>
                <div >
                    <h1 className='webdevs-title'>Commitee members</h1>
                    <p className='webdevs-tilte-description'>Join the community around the world</p>
                </div>
                <div className='content-container' style={{maxWidth:"800px",margin:"auto",marginTop:"7%"}}>
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  
                    <Commiteemember />  

                </div>
            </div>
        </div>
    )
}

export default Commitee

const Commiteemember = () => {
    return (
        <div className='content-container-item'>
            <div className='content-container-item-image'>
                <img src={profile1} alt='profile' />
                <div className='insta-hover-container'>
                    Secreatary
                </div>
            </div>
            <div className='content-container-item-description'>
                <div className='commitee-name-x'>
                    <div>
                        <h1>Naveenkumar M</h1>
                        <p>Third year</p>
                    </div>
                    <p>Secretary</p>
                </div>
            </div>
        </div>
    )
}