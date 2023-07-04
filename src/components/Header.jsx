import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Redlogo from '../assets/LOGO-kasa-red.svg';
import '../pages/Home/HomePage.jsx';
import '../pages/About/AboutPage.jsx';
import React, { useState } from 'react';


  

function Header() {
	const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
	
	return (
		<div className='header-container'>
			<div className='kasa-Header'>
				<Link to='/'>
					<img src={Redlogo} alt='logo-Kasa'
					className={isActive ? 'nav-link-home active' : 'nav-link-home active'} 
					onClick={handleClick}
					/>					
				</Link>			
				
				<nav className='kasa-nav'>
					<ul className='kasa-ul'>
						<Link to='/' className={isActive === false ? 'nav-link-home active' : 'nav-link-home'}
        				onClick={handleClick} 
						>Accueil</Link>
						<Link to="/about" className={isActive === true ? 'nav-link-about open' : 'nav-link-about'}
						onClick={handleClick}
						>A Propos</Link>										
					</ul>
				</nav>		
			</div>
		</div>
		
	) 
}
export default Header
