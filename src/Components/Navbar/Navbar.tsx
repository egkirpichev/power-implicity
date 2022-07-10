import React from 'react';
import './Navbar.scss';

export const Navbar = () => {
	return (
		<nav className='navbar'>
			<a className='navbar__logo'></a>
			<ul className='navbar__links'>
				<li className='navbar__link navbar__link--hover'></li>
				<li className='navbar__link navbar__link--hover'></li>
				<li className='navbar__link navbar__link--hover'></li>
			</ul>
			<button type='button' className='navbar__download-btn'></button>
		</nav>
	)
}
