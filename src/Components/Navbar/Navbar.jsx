import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu_icon.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
	const [sticky, setSticky] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 700 ? setSticky(true) : setSticky(false);
		});
	}, []);
	const [mobileMenu, setMobileMenu] = useState(false);
	const toggleMenu = () => {
		mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
	};

	return (
		//tu dodajemy miejsce z lewej i prawej w kontenerze
		<nav className={`container ${sticky ? 'dim-nav' : ''}`}>
			<img src={logo} alt='' className='logo' />
			<ul className={mobileMenu ? '' : 'mobile_menu'}>
				<li>
					<Link to='/' smooth={true} offset={0} duration={500} className='btn'>
						Home
					</Link>
				</li>
				<li>
					<Link to='program' smooth={true} offset={-290} duration={500}>
						Ćwiczenia
					</Link>
				</li>
				<li>
					<Link to='facts_myths' smooth={true} offset={-150} duration={500}>
						Fakty | Mity
					</Link>
				</li>
				<li>
					<Link to='suplements' smooth={true} offset={-290} duration={500}>
						Suplementy | Odżywianie
					</Link>
				</li>
				<li>
					<Link
						to='slider-container'
						smooth={true}
						offset={-150}
						duration={500}
					>
						Opinie
					</Link>
				</li>
			</ul>
			<img src={menu_icon} alt='' className='menu_icon' onClick={toggleMenu} />
		</nav>
	);
};

export default Navbar;
