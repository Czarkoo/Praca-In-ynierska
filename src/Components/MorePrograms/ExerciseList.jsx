import React from 'react';
import ExerciseComponent from './ExerciseComponent';
import ExerciseSection from './ExerciseSection';
import facts_myths_image1 from '../../assets/facts_myths_image1.png';

const ExerciseList = () => {
	const exercises = [
		{
			section: 'Biceps',
			Title: 'Uginanie ramion stojąc',
			Description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Nam consectetur, libero at egestas aliquam, lorem urna auctor libero, sit amet cursus risus nulla vitae velit. Integer ac dui.',
			ImageUrl: facts_myths_image1,
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			section: 'Triceps',
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			section: 'Plecy',
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			section: 'Nogi',
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
		},
	];
	return (
		<div>
			{exercises.map((exercise, index) => (
				<ExerciseSection key={index} sectionTitle={exercise.section}>
					<ExerciseComponent
						key={index}
						title={exercise.Title}
						description={exercise.Description}
						imageUrl={exercise.ImageUrl}
					/>
				</ExerciseSection>
			))}
		</div>
	);
};

export default ExerciseList;
