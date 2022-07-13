import "./navbar.scss";
import logo from "../../assets/logo.svg"

const Navbar = () => {
	return (
		<nav className='navbar'>
			<img src={logo} className='navbar__logo' alt="navbar__logo" />
			<ul className='navbar__links'>
				<li className='navbar__link'>Features</li>
				<li className='navbar__link'>Partners</li>
				<li className='navbar__link'>Stories</li>
			</ul>
			<button type='button' className='navbar__download-btn'>Download for free</button>
		</nav>
	)
}

export {Navbar}