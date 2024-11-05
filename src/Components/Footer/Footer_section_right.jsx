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
					<img src={instagram} alt='Instagram' />
                    <p>Instagram</p>
				</li>
				<li className='Facebook'>
					<img src={facebook} alt='Facebook' />
                    <p>Facebook</p>
				</li>
				<li className='LinkedIn'>
					<img src={linkedin} alt='LinkedIn' />
                    <p>LinkedIn</p>
				</li>
				<li className='Gmail'>
					<img src={gmail} alt='Gmail' />
                    <p>Gmail</p>
				</li>
			</ul>
		</div>
	);
};

export default Footer_section_right;
