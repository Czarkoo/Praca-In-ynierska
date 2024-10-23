import React from 'react';

const ButtonFactsMyths = ({ onButtonChange }) => {
	return (
		<div className='button-factsmyths'>
			<button onClick={() => onButtonChange('')}>Mity oraz fakty</button>
			<button onClick={() => onButtonChange('Mit')}>Mity</button>
			<button onClick={() => onButtonChange('Fakt')}>Fakty</button>
		</div>
	);
};

export default ButtonFactsMyths
