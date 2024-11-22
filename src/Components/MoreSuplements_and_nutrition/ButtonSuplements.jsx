import React from 'react';

const ButtonSuplements = ({ onButtonChange }) => {
	return (
		<div className='button-suplements'>
			<button onClick={() => onButtonChange('')}>wszystkie</button>
			<button onClick={() => onButtonChange('Białko')}>Białko</button>
			<button onClick={() => onButtonChange('Kreatyna')}>Kreatyna</button>
			<button onClick={() => onButtonChange('Bcaa')}>Bcaa</button>
			<button onClick={() => onButtonChange('Witamina_C')}>Witamina C</button>
			<button onClick={() => onButtonChange('Witamina_D')}>Witamina D</button>
			<button onClick={() => onButtonChange('Pwr')}>Pwr</button>
			<button onClick={() => onButtonChange('Kofeina')}>Kofeina</button>
			<button onClick={() => onButtonChange('Cytrulina')}>Cytrulina</button>
		</div>
	);
};

export default ButtonSuplements;
