import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Redlogo from '../assets/LOGO-kasa-red.svg';
import '../pages/Home/HomePage.jsx';
import '../pages/About/AboutPage.jsx';
import { useLocation } from 'react-router-dom';  

function Header() {
	
	const location = useLocation();
  const currentPage = location.pathname;  
	
	return (
		<div className='header-container'>
			<div className='kasa-header'>
				<Link to='/'>
					<img src={Redlogo} alt='logo-Kasa'/>					
				</Link>				
				<nav className='kasa-nav'>
					<ul className='kasa-ul'>
						<li>
						<Link to='/' className={currentPage === '/'? 'nav-link active' : 'nav-link'}> 
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
