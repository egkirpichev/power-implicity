import "./Navbar.scss";

const Navbar = () => {
	return (
		<nav className='navbar'>
			<img src="./logo.png" alt="navbar__logo" />
			<ul className='navbar__links'>
				<li className='navbar__link navbar__link--hover'>Features</li>
				<li className='navbar__link navbar__link--hover'>Partners</li>
				<li className='navbar__link navbar__link--hover'>Stories</li>
			</ul>
			<button type='button' className='navbar__download-btn'>Download for free</button>
		</nav>
	)
}

export {Navbar}