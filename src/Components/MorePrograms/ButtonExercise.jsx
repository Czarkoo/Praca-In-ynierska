import React from 'react';

const ButtonExercise = ({ onButtonChange }) => {
	return (
		<div>
			<button onClick={() => onButtonChange('')}>wszystkie</button>
			<button onClick={() => onButtonChange('')}>Biceps</button>
			<button onClick={() => onButtonChange('')}>Triceps</button>
			<button onClick={() => onButtonChange('')}>Nogi</button>
			<button onClick={() => onButtonChange('')}>Plecy</button>
		</div>
	);
};

export default ButtonExercise;
