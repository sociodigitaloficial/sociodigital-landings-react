import React from 'react';
import '@styles/header.scss'

import logo from '@images/logo.png'

const Header = () => {
    return (
        <header id="header" className="header">
            <img className="header-logo" src={logo} alt="logo"/>
        </header>
    );
}

export default Header;