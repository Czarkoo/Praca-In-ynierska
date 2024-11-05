import React from 'react';

const descriptions = [
	{
		key: 'description1',
		description:
			'Witaj na naszej platformie poświęconej pasjonatom fitnessu! Czy kiedykolwiek zastanawiałeś się, które z popularnych przekonań na temat zdrowia i fitnessu są prawdziwe, a które to tylko mity? Rozwiewamy wątpliwości i dostarczamy rzetelnych informacji, abyś mógł trenować efektywnie i bezpiecznie.',
	},
	{
		key: 'description2',
		description:
			'Często słyszymy, że kawa może wypłukiwać magnez z naszego organizmu, ale czy jest to naukowy fakt, czy tylko popularny mit? Przejdź do naszej sekcji Fakty vs Mity, aby dowiedzieć się więcej na ten temat.',
	},
	{
		key: 'description3',
		description:
			'Po treningu okienko metaboliczne rzeczywiście istnieje, ale czy konieczność zjedzenia posiłku w ciągu jednej godziny to zasada, której absolutnie należy przestrzegać? Odkryj naukowe spojrzenie na timing posiłków i regenerację mięśni w sekcji Fakty vs Mity.',
	},
	{
		key: 'description4',
		description:
			'Na naszej stronie znajdziesz dokładne analizy i wyjaśnienia dotyczące wielu innych zagadnień fitnessu. W każdej sekcji rozpracowujemy mity i potwierdzamy fakty, dając Ci pewność, że Twoje podejście do treningu i odżywiania jest poparte nauką. Dowiedz się więcej na temat fitnessowych faktów i mitów!',
	},
];

const Description_Fact_Myths = () => {
	return (
		<div>
			<h3>Fakty Oraz Mity</h3>
			<h2>Na co każdy początkujący powinien zwrócić uwagę</h2>
			<p>{descriptions[0].description}</p>

			<ul>
				<li>Czy kawa naprawdę wypłukuje magnez z organizmu?</li>
				<p>{descriptions[1].description}</p>
				<li>
					"Musisz zjeść posiłek w ciągu godziny po treningu" – prawda czy fałsz?
				</li>
				<p>{descriptions[2].description}</p>
				<li>Dowiedz się więcej!</li>
				<p>{descriptions[3].description}</p>
			</ul>
		</div>
	);
};

export default Description_Fact_Myths;
