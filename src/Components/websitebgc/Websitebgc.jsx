import React from 'react';
import './websitebgc.css';
import arrow_right from '../../assets/arrow_right.svg';

const websitebgc = () => {
	return (
		<div className='websitebgc container'>
			<div className='websitegbc-text'>
				<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quis?
				</p>
				<button className='btn'>
					Show more <img src={arrow_right} alt='' />
				</button>
			</div>
		</div>
	);
};

export default websitebgc;
