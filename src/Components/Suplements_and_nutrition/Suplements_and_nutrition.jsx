import React from 'react';
import './Suplements_and_nutrition.css';
import { Link } from 'react-router-dom';
import gallery_bcaa from '../../assets/gallery_bcaa.webp';
import gallery_creatina from '../../assets/gallery_creatina.webp';
import gallery_protein from '../../assets/gallery_protein.webp';
import gallery_vitamins from '../../assets/gallery_vitamins.png';
import arrow_right from '../../assets/arrow_right.svg';
const Suplements_and_nutrition = () => {
	return (
		<div className='suplements'>
			<div className='gallery_suplements'>
				<img src={gallery_bcaa} alt='' />
				<img src={gallery_creatina} alt='' />
				<img src={gallery_protein} alt='' />
				<img src={gallery_vitamins} alt='' />
			</div>
			<Link to='more-suplements'>
				<button className='btn dark-btn'>
					Read More
					<img src={arrow_right} alt='' />
				</button>
			</Link>
		</div>
	);
};

export default Suplements_and_nutrition;
