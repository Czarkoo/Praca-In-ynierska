import React from 'react';

const ButtonExercise = ({ onButtonChange }) => {
	return (
		<div className='button-moreprograms'>
			<button onClick={() => onButtonChange('')}>wszystkie</button>
			<button onClick={() => onButtonChange('Biceps')}>Biceps</button>
			<button onClick={() => onButtonChange('Triceps')}>Triceps</button>
			<button onClick={() => onButtonChange('Nogi')}>Nogi</button>
			<button onClick={() => onButtonChange('Plecy')}>Plecy</button>
		</div>
	);
};

export default ButtonExercise;
