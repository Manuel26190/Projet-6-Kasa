import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Redlogo from '../assets/LOGO-kasa-red.svg';
import '../pages/Home/HomePage.jsx';
import '../pages/About/AboutPage.jsx';
import { useLocation } from 'react-router-dom';  

function Header() {
//Le hook useLocation() renvoie l'objet location qui représente l'emplacement actuel de l'application.
	const location = useLocation();
	const currentPage = location.pathname;  
//la variable currentPage contiendra la valeur de l'URL actuelle
	return (
		<div className='header-container'>
			<div className='kasa-header'>
				<Link to='/Projet-React'>
					<img src={Redlogo} alt='logo-Kasa'/>					
				</Link>				
				<nav className='kasa-nav'>
					<ul className='kasa-ul'>
						<li>
						<Link to='/Projet-React' className={currentPage === '/Projet-React'? 'nav-link active' : 'nav-link'}> 
							Accueil
						</Link>
						</li>
						<li>
						<Link to="/about" className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}>						
							A Propos
						</Link>
						</li>																
					</ul>
				</nav>		
			</div>
		</div>		
	) 
};
export default Header
