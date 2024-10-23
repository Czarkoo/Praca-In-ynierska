import React from 'react';
import DescriptionMoreFacts from './DescriptionMoreFacts';
import SectionMoreFacts from './SectionMoreFacts';
import medal from '../../assets/medal.svg';
const ListMoreFacts_Myths = ({ click }) => {
	const factsmyths = [
		{
			title: 'Mit',
			subTitle: 'treść danego faktu lub mitu ',
			IconUrl: medal,
			description2: 'opis cz.1 dla mitu',
			description3: 'opis cz.2 dla mitu',
			description: 'opis na główną stornę',
		},
		{
			title: 'Mit',
			subTitle: 'treść danego faktu lub mitu ',
			IconUrl: medal,
			description2: 'opis cz.1 dla mitu',
			description3: 'opis cz.2 dla mitu',
			description: 'opis na główną stornę',
		},
		{
			title: 'Fakt',
			subTitle: 'treść danego faktu lub mitu ',
			IconUrl: medal,
			description2: 'opis cz.1 dla faktu',
			description3: 'opis cz.2 dla faktu',
		},
		{
			title: 'Fakt',
			subTitle: 'treść danego faktu lub mitu ',
			IconUrl: medal,
			description2: 'opis cz.1 dla faktu',
			description3: 'opis cz.2 dla faktu',
		},
	];

	const filteredfactsmyths = click
		? factsmyths.filter((factmyth) => factmyth.title === click)
		: factsmyths;

	return (
		<div>
			{filteredfactsmyths.map((factmyth, index) => 
            (
				<SectionMoreFacts key={index} sectionTitle={factmyth.title}>
					<DescriptionMoreFacts 
                    key={index}
                    subTitle={factmyth.subTitle}
                    IconUrl={factmyth.IconUrl}
                    description={factmyth.description}
                    description2={factmyth.description2}
                    description3={factmyth.description3}
                    />
				</SectionMoreFacts>
			))}
		</div>
	);
};

export default ListMoreFacts_Myths;
