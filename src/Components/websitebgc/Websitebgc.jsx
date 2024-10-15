import React from 'react';
import './websitebgc.css';
import arrow_right from '../../assets/arrow_right.svg';

const websitebgc = () => {
	return (
		<div className='websitebgc container'>
			<div className='websitegbc-text'>
				<h1>Od Teraz Ćwiczenie to przyjemność</h1>
				<p>Aplikacja wspierająca entuzjastów fitness'u</p>
				<button className='btn'>
					Show more <img src={arrow_right} alt='' />
				</button>
			</div>
		</div>
	);
};

export default websitebgc;
