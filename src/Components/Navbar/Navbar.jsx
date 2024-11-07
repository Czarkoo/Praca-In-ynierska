import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu_icon.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link, useNavigate, useLocation } from 'react-router-dom';
const Navbar = () => {
	const [sticky, setSticky] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 700 ? setSticky(true) : setSticky(false);
		});
	}, []);

	const [mobileMenu, setMobileMenu] = useState(false);
	const toggleMenu = () => {
		setMobileMenu(!mobileMenu);
		// mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
	};

	const handleNavClick = (sectionId) => {
		if (location.pathname !== '/') {
			navigate('/');

			setTimeout(() => {
				let yOffset = -350; // Dodany offset, aby uniknąć zasłaniania sekcji przez nawigację

				if (sectionId === 'program') {
					const section = document.getElementById('program');
					if (section) {
						const y =
							section.getBoundingClientRect().top +
							window.pageYOffset +
							yOffset;
						window.scrollTo({ top: y, behavior: 'smooth' });
					}
				} else if (sectionId === 'facts_myths') {
					const section = document.getElementById('facts_myths');
					if (section) {
						const y =
							section.getBoundingClientRect().top +
							window.pageYOffset +
							yOffset;
						window.scrollTo({ top: y, behavior: 'smooth' });
					}
				} else if (sectionId === 'suplements') {
					const section = document.getElementById('suplements');
					if (section) {
						const y =
							section.getBoundingClientRect().top +
							window.pageYOffset +
							yOffset;
						window.scrollTo({ top: y, behavior: 'smooth' });
					}
				} else if (sectionId === 'slider-container') {
					const section = document.getElementById('slider-container');
					if (section) {
						const y =
							section.getBoundingClientRect().top +
							window.pageYOffset +
							yOffset;
						window.scrollTo({ top: y, behavior: 'smooth' });
					}				
				}
			}, 400);
		} else {
			if (sectionId === 'home') {
				scroll.scrollToTop();
			} else {
				let yOffset = -200; // Dodany offset również w przypadku nawigacji na tej samej stronie
				const section = document.getElementById(sectionId);
				if (section) {
					const y =
						section.getBoundingClientRect().top + window.pageYOffset + yOffset;
					window.scrollTo({ top: y, behavior: 'smooth' });
				}
			}
		}
	};

	return (
		//tu dodajemy miejsce z lewej i prawej w kontenerze
		<nav className={`container ${sticky ? 'dim-nav' : ''}`}>
			<img src={logo} alt='' className='logo' />
			<ul className={mobileMenu ? '' : 'mobile_menu'}>
				<li>
					<ScrollLink
						to='/'
						onClick={() => handleNavClick('home')}
						className='btn'
					>
						Home
					</ScrollLink>
				</li>
				<li>
					<ScrollLink
						to='program'
						smooth={true}
						offset={-290}
						duration={500}
						onClick={() => handleNavClick('program')}
					
					>
						Ćwiczenia
					</ScrollLink>
				</li>
				<li>
					<ScrollLink
						to='facts_myths'
						smooth={true}
						offset={-150}
						duration={500}
						onClick={() => handleNavClick('facts_myths')}
						
					>
						Fakty | Mity
					</ScrollLink>
				</li>
				<li>
					<ScrollLink
						to='suplements'
						smooth={true}
						offset={-290}
						duration={500}
						onClick={() => handleNavClick('suplements')}
						
					>
						Suplementy | Odżywianie
					</ScrollLink>
				</li>
				<li>
					<ScrollLink
						to='slider-container'
						smooth={true}
						offset={-250}
						duration={500}
						onClick={() => handleNavClick('slider-container')}
					
					>
						Opinie
					</ScrollLink>
				</li>
			</ul>
			<img src={menu_icon} alt='' className='menu_icon' onClick={toggleMenu} />
		</nav>
	);
};

export default Navbar;
