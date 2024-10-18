import React from 'react';

const ExerciseComponent = ({
	title,
	description,
	description2,
	description3,
	imageUrl,
}) => {
	return (
		<div className='more-programs'>
			<div className='more-programs-left'>
				<h3>{title}</h3>
				<img src={imageUrl} alt={title} className='exercise1' />
			</div>
			<div className='more-programs-right'>
				<h2>Opis ćwiczenia:</h2>
				<p>{description}</p>
				<ul>
					<li> → Szczegóły dotyczące zaangażowania mięśni</li>
					<p>{description2}</p>
					<li> → Kontrola Ruchu </li>
					<p>{description3}</p>
				</ul>
			</div>
		</div>
	);
};

export default ExerciseComponent;
