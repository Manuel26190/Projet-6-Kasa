import '../styles/Header.css';
import logo from '../assets/LOGO.svg';

function Header({ children }) {
	return (
		<div className='kasa-Header'>
			{children}
			<img src={logo} alt='logo-Kasa'className='kasa-logo'/>
			<nav className='kasa-nav'>
				<ul className='kasa-ul'>
					<li>Accueil</li>
					<li>A Propos</li>
				</ul>
			</nav>

		
		
		
		</div>
	) 
}
export default Header