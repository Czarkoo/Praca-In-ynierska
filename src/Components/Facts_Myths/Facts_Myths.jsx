import React from 'react';
import './Facts_Myths.css';
import { Link } from 'react-router-dom';
import tematical_factmyth from '../../assets/tematical_factmyth.webp';
import arrow_right from '../../assets/arrow_right.svg';
import Description_Fact_Myths from './Description_Fact_Myths';
const Facts_Myths = () => {
	return (
		<div className='facts_myths'>
			<div className='facts-left'>
				<img src={tematical_factmyth} alt='' className='facts-img' />
				{/* <img src={read} alt='' className='read-img' /> */}
			</div>
			<div className='myths-right'>
				<Description_Fact_Myths></Description_Fact_Myths>
				<Link to='MoreaboutFactsMyths'>
					<button className='btn dark-btn'>
						Read More
						<img src={arrow_right} alt='' />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Facts_Myths;
