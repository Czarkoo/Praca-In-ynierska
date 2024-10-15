import React from 'react';

const ExerciseSection = ({ sectionTitle, children }) => {
	return (
		<div className='exercise-section'>
			<h1>{sectionTitle}</h1>
			{children}
		</div>
	);
};

export default ExerciseSection;
