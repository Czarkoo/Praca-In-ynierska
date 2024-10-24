import React from 'react';
import './Facts_Myths.css';
import {Link} from 'react-router-dom';
import facts_myths_image1 from '../../assets/facts_myths_image1.png';
import read from '../../assets/read.svg';
import arrow_right from '../../assets/arrow_right.svg';
const Facts_Myths = () => {
	return (
		<div className='facts_myths'>
			<div className='facts-left'>
				<img src={facts_myths_image1} alt='' className='facts-img' />
				{/* <img src={read} alt='' className='read-img' /> */}
			</div>
			<div className='myths-right'>
				<h3>Fakty Oraz Mity</h3>
				<h2>Na co każdy poczatkujący powinien zwrócić uwagę</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae
					officia eum vero minima maiores velit alias? Itaque, non quas natus
					modi cupiditate ducimus facere necessitatibus saepe deserunt quis
					excepturi?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, et.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil
					fugiat eius laboriosam quo quasi sit soluta. Maiores laborum, ea dicta
					corporis culpa numquam, quos non dolorem, dignissimos optio itaque.
				</p>
				
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
