import React from "react"
import logo from '../../assets/logo.jpg'
import instagram from '../../assets/icons8-instagram.svg'
import whatsapp from '../../assets/icons8-whatsapp.svg'
import './index.css'

const Header = () => {
    return (
        <div className="container">
            <div className='logo'>
                <img src={logo} alt='ericasantosstudiologo' />
            </div>
            <div className="content">
                <a href='https://www.instagram.com/ericasantosstudio/' target='_blank' rel="noreferrer">
                    <img src={instagram} alt='instagramlink' />
                </a>
                <a href='https://api.whatsapp.com/send?phone=5511952946085' target='_blank' rel="noreferrer">
                    <img src={whatsapp} alt='whatsapplink' />
                </a>
            </div>
        </div>
    )
}

export default Header;