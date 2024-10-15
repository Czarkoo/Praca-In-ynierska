import React from 'react';
import ExerciseComponent from './ExerciseComponent';
import ExerciseSection from './ExerciseSection';
import facts_myths_image1 from '../../assets/facts_myths_image1.png';
import uginanie_hantlami_stojac from '../../assets/uginanie_hantlami_stojac.webp';
import uginanie_na_blisko_ze_sztanga_stojac from '../../assets/uginanie_na_blisko_ze_sztanga_stojac.webp';
import Uginanie_na_lawce_skosnej_siedzac_w_odchyleniu from '../../assets/Uginanie_na_lawce_skosnej_siedzac_w_odchyleniu.webp';
import uginanie_ze_sztanga_stojac from '../../assets/uginanie_ze_sztanga_stojac.webp';
const ExerciseList = () => {
	const exercises = [
		{
			section: 'Biceps',
			Title: 'Uginanie ze sztangą stojąc',
			Description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Nam consectetur, libero at egestas aliquam, lorem urna auctor libero, sit amet cursus risus nulla vitae velit. Integer ac dui.',
			ImageUrl: uginanie_ze_sztanga_stojac,
		},
		{
			Title: 'Uginanie na ławce skośnej siedząc w odchyleniu',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: Uginanie_na_lawce_skosnej_siedzac_w_odchyleniu,
		},
		{
			Title: 'Uginanie na blisko ze sztanga stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: uginanie_na_blisko_ze_sztanga_stojac,
		},
		{
			Title: 'Uginanie hantlami stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: uginanie_hantlami_stojac,
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
