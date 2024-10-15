import React from 'react';

const ExerciseComponent = ({ title, description, imageUrl }) => {
	return (
		<div className='more-programs'>
			<div className='more-programs-left'>
				<h1>{title}</h1>
				<img src={imageUrl} alt={title} className='exercise1' />
			</div>
			<div className='more-programs-right'>
				<h2>Opis ćwiczenia:</h2>
				<p>{description}</p>
				<ul>
					<li> → tutaj możesz dodać szczegóły ćwiczenia</li>
				</ul>
			</div>
		</div>
	);
};

export default ExerciseComponent;
