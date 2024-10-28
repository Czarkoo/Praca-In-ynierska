import React from 'react';
import DescriptionMoreFacts from './DescriptionMoreFacts';
import SectionMoreFacts from './SectionMoreFacts';
import medal from '../../assets/medal.svg';
const ListMoreFacts_Myths = ({ click }) => {
	const factsmyths = [
		{
			title: 'Mit',
			subTitle: 'KAWA WYPŁUKUJE MAGNEZ',
			IconUrl: medal,
			description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
			description3: 'Spożywanie umiarkowanych ilości kawy (3-4 filiżanki dziennie) nie ma negatywnego wpływu na poziom magnezu w organizmie. Co więcej, kawa dobrej jakości może przynosić korzyści zdrowotne, dzięki wysokiej zawartości polifenoli. Czy kawa może powodować niedobór magnezu? Nie, jednak warto pamiętać, że nadmiar czegokolwiek może być szkodliwy.',
			description: 'opis na główną stornę',
		},
		{
			title: 'Mit',
			subTitle: 'PO TRENINGU MAMY GODZINE NA ZJEDZENIE POSIŁKU ',
			IconUrl: medal,
			description2: 'opis cz.1 dla mitu',
			description3: 'Często można usłyszeć, że po treningu mamy godzinę na zjedzenie posiłku, aby wspomóc regenerację i przyspieszyć budowę mięśni. To jednak mit, który został wyolbrzymiony. Spożycie posiłku bezpośrednio po ćwiczeniach może być korzystne, ale nie w takim stopniu, jak sugeruje branża fitness. Synteza białek osiąga szczyt około trzeciej godziny po treningu i utrzymuje się, stopniowo malejąc, do 24 godzin u osób zaawansowanych i do 72 godzin u początkujących.',
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
