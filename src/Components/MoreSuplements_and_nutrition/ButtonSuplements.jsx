import React from 'react'

const ButtonSuplements = () => {
    return (
		<div className='button-suplements'>
			<button onClick={() => onButtonChange('')}>wszystkie</button>
			<button onClick={() => onButtonChange('Białko')}>Białko</button>
			<button onClick={() => onButtonChange('Kreatyna')}>Kreatyna</button>
			<button onClick={() => onButtonChange('Bcaa')}>Bcaa</button>
			<button onClick={() => onButtonChange('Witamina_C')}>Witamina_C</button>
			<button onClick={() => onButtonChange('Witamina_D')}>Witamina_D</button>
			<button onClick={() => onButtonChange('Pwr')}>Pwr</button>
		</div>
	);
};

export default ButtonSuplements
