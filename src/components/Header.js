import React from 'react'

import Logo from '../assets/logo.png'

import './Header.css'

export default function Header() {
    return (
        <div className='wrapper'>
            <div className='img-wrapper'>
                <img src={Logo} alt=''/>
            </div>

        </div>
    );
};