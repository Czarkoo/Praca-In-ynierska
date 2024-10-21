import React, { useState } from 'react';
import './MorePrograms.css';
import ExerciseList from './ExerciseList';
import { Link } from 'react-router-dom';
import ButtonExercise from './ButtonExercise';
import ClientsSlider from '../Client/ClientsSlider';

const MorePrograms = () => {
	const [click, setClick] = useState('');

	const handleButtonExercise = (newClick) => {
		setClick(newClick);
	};
	
	return (
		<div>
			<Link to='slider-container'> sadasd</Link>
			<div>
				<h2>cwiczenia</h2>
				<ButtonExercise onButtonChange={handleButtonExercise} />
				<ExerciseList click={click} />
			</div>
		</div>
	);
};

export default MorePrograms;
