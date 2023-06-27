//import { ReactDOM } from 'react';
import '../styles/Header.css';
import logo from '../assets/LOGO.svg';

function Header() {
	return (
		<div className='kasa-Header'>			
			<img src={logo} alt='logo-Kasa'className='kasa-logo'/>
			<nav className='kasa-nav'>
				<ul className='kasa-ul'>					
					<a href='rrr' className='nav-link'>Accueil</a>
					<a href='rrr' className='nav-link'>A Propos</a>					
				</ul>
			</nav>		
		</div>
	) 
}
export default Header