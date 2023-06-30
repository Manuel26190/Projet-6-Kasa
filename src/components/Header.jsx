import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Redlogo from '../assets/LOGO-kasa-red.svg';
import '../pages/Home/HomePage.jsx';
import '../pages/About/AboutPage.jsx';

function Header() {
	return (
		<div className='header-container'>
			<div className='kasa-Header'>			
				<img src={Redlogo} alt='logo-Kasa'/>
				<nav className='kasa-nav'>
					<ul className='kasa-ul'>
						<Link to='/' className='nav-link'>Accueil</Link>
						<Link to="/about" className='nav-link'>A Propos</Link>										
					</ul>
				</nav>		
			</div>
		</div>
		
	) 
}
export default Header
