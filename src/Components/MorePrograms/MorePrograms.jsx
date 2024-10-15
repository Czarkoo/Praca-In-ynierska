import React from 'react';
import './MorePrograms.css';
import facts_myths_image1 from '../../assets/facts_myths_image1.png';
const MorePrograms = () => {
	return (
		<div className='more-programs'>
			<div className='more-programs-left'>
				<h1>Uginanie ramion stojąc</h1>
				<img src={facts_myths_image1} alt='casuall img' className='exercise1' />
			</div>
			<div className='more-programs-right'>
				<h2>
					Here you'll find more detailed information about different biceps
					exercises.
				</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
					voluptate! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis non voluptas eveniet magni. Autem debitis placeat quo optio,
					consequatur quas error neque repellendus, cumque at a. Numquam earum
					aliquam iure cumque dolorum deserunt, sed itaque perferendis
					recusandae placeat est, eligendi esse distinctio? Asperiores tenetur
					sint eaque excepturi, neque ipsum nobis!
				</p>
				<ul>
					<li> → cos tutaj jeszcze bedzie</li>
					<li> → cos tutaj jeszcze bedzie</li>
					<li> → cos tutaj jeszcze bedzie</li>
					<li> → cos tutaj jeszcze bedzie</li>
				</ul>
			</div>
		</div>
	);
};

export default MorePrograms;
