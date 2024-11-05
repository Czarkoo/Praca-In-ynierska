import React from 'react';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import gmail from '../../assets/gmail.svg';

const Footer_section_right = () => {
	return (
		<div>
			<ul className='lista'>
				<li className='Instagram'>
					<a
						href='https://www.instagram.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={instagram} alt='Instagram' />
					</a>
					<p className='social-text'>Instagram</p>
				</li>
				<li className='Facebook'>
					<a
						href='https://www.facebook.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={facebook} alt='Facebook' />
					</a>
					<p className='social-text'>Facebook</p>
				</li>
				<li className='LinkedIn'>
					<a
						href='https://www.linkedin.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={linkedin} alt='LinkedIn' />
					</a>
					<p className='social-text'>LinkedIn</p>
				</li>
				<li className='Gmail'>
					<a
						href='https://www.gmail.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={gmail} alt='Gmail' />
					</a>
					<p className='social-text'>Gmail</p>
				</li>
			</ul>
		</div>
	);
};

export default Footer_section_right;
