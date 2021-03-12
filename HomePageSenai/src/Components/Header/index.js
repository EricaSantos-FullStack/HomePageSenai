import React from 'react';
import './style.css';
import logo from './logo.png';


function Header() {
    return(
        <header>

        <img id="senai" src={logo} />
        <div id="title">
        <p> SÃO PAULO - SANTO AMARO </p> {'\n'}
        <p>SUÍÇO-BRASILEIRA PAULO ERNESTO TOLLE</p>
        </div>
        </header>
    );
}

export default Header;