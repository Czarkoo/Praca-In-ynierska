import React, { useState } from 'react';
import './MoreFacts_Myths.css';
import ButtonFactsMyths from './ButtonFactsMyths';
import ListMoreFacts_Myths from './ListMoreFacts_Myths';

const MoreFacts_Myths = () => {
	const [click, setClick] = useState('');

	const handleButtonFactsMyths = (newClick) => {
		setClick(newClick);
	};

	return (		
			<div>
				<ButtonFactsMyths onButtonChange={handleButtonFactsMyths} />
				<ListMoreFacts_Myths click={click}/>
			</div>
	);
};

export default MoreFacts_Myths;
