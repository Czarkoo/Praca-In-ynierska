import React from 'react';
import ExerciseComponent from './ExerciseComponent';
import facts_myths_image1 from '../../assets/facts_myths_image1.png';

const ExerciseList = () => {
	const exercises = [
		{
			Title: 'Ćwiczenie: Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			Title: 'Ćwiczenie: Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			Title: 'Ćwiczenie: Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
	];
	return (
		<div>
			{exercises.map((exercise, index) => (
				<ExerciseComponent
					key={index}
					title={exercise.Title}
					description={exercise.Description}
					imageUrl={exercise.ImageUrl}
				/>
			))}
		</div>
	);
};

export default ExerciseList;
