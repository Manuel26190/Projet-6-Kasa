import Whitelogo from  '../assets/LOGO-kasa-white.svg';
import '../styles/Footer.css';
import React from 'react';

function Footer () {
    return (
        <section className='footer-section'>
            <div className='footer-div'>
                <img className='kasa-white-logo' src={Whitelogo} alt={Whitelogo} />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </section>
    )
};

export default Footer