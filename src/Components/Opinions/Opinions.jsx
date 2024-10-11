import React from 'react';
import './Opinions.css';
import arrow_right from '../../assets/arrow_right.svg';
import arrow_left from '../../assets/arrow_left.svg';
const Opinions = () => {
	return (
		<div className='Opinions'>
			{/* przysik prawo i lewo */}
			<img src={arrow_right} alt='' className='arrow-next-btn' />
			<img src={arrow_left} alt='' className='arrow-back-btn' />
			<div className='slider'>
				<ul>
					<li>
						<div className='slide-roll'>
							<div className='person-information'>
								<img src='' alt='' />
								<div>
									<h3></h3>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Opinions;
