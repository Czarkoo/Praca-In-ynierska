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
		{filteredfactsmyths.map((factmyth, index) => (
		  <SectionMoreFacts key={index} sectionTitle={factmyth.title}>
			{factmyth.title === 'Fakt' ? (
			  <div className="MoreFacts">
				<div className="MoreFacts_top">
				  <h1 className="title">Fakt: {factmyth.subTitle}</h1>
				</div>
				<div className="MoreFacts_left">
				  <img src={factmyth.IconUrl} alt="" />
				  <h2 className="subTitle">{factmyth.subTitle}</h2>
				  <p>{factmyth.description2}</p>
				</div>
				<div className="MoreFacts_right">
				  <p>{factmyth.description3}</p>
				</div>
			  </div>
			) : (
			  <div className="MoreMyths">
				<div className="MoreMyths_top">
				  <h1 className="title">Mit: {factmyth.subTitle}</h1>
				</div>
				<div className="MoreMyths_left">
				  <p>{factmyth.description2}</p>
				</div>
				<div className="MoreMyths_right">
				  <img src={factmyth.IconUrl} alt="" />
				  <h2 className="subTitle">{factmyth.subTitle}</h2>
				  <p>{factmyth.description3}</p>
				</div>
			  </div>
			)}
		  </SectionMoreFacts>
		))}
	  </div>
	);
  };

export default ListMoreFacts_Myths;
