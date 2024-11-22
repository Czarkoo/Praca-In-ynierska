import React, { useState} from 'react';
import './MoreSuplements_and_nutrition.css';
import SuplementsList from './SuplementsList';
import ButtonSuplements from './ButtonSuplements';
const MoreSuplements_and_nutrition = () => {
	const [click, setClick] = useState('');

	const handleButtonSuplements = (newClick) => {
		setClick(newClick);
	};
  return (
	<div>
		<div>
			<ButtonSuplements onButtonChange={handleButtonSuplements} />
			<SuplementsList click={click}/>
		</div>
	</div>
  );
};

export default MoreSuplements_and_nutrition;

