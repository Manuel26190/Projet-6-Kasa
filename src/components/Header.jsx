//import { ReactDOM } from 'react';
import '../styles/Header.css';
import Redlogo from '../assets/LOGO-kasa-red.svg';

function Header() {
	return (
		<div className='kasa-Header'>			
			<img src={Redlogo} alt='logo-Kasa'/>
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