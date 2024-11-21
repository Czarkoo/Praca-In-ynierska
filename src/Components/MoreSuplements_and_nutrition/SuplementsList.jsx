import React from 'react';
import SuplementsComponent from './SuplementsComponent';
import SuplementsSection from './SuplementsSection';
const SuplementsList = ({ click }) => {
	const suplements = [
		{
			section: 'Białko',
			Title: 'Białko',
			Description:
				'Uginanie bicepsów ze sztangą prostą stojąc (barbell curls) to jedno z najpopularniejszych ćwiczeń na biceps, choć angażuje również inne mięśnie. W tym ćwiczeniu głównym mięśniem, który pracuje, jest biceps brachii – mięsień odpowiedzialny za zginanie łokcia i unoszenie przedramienia. Składa się on z dwóch części: głowy długiej, która znajduje się po zewnętrznej stronie ramienia, oraz głowy krótkiej, po stronie wewnętrznej. Oprócz bicepsa brachii, w ruch zaangażowane są inne mięśnie wspomagające. Jednym z nich jest brachialis, który znajduje się pod bicepsem i pomaga w zginaniu ramienia, szczególnie przy niższych kątach zgięcia łokcia. Kolejnym wspomagającym mięśniem jest brachioradialis, zlokalizowany na przedramieniu, który wspomaga zginanie łokcia i stabilizuje ruchy przedramienia. Dodatkowo mięśnie przedramion pracują, aby utrzymać chwyt sztangi.',
			ImageUrl: uginanie_ze_sztanga_stojac,
			Description2:
				'Ćwiczenie to wymaga także wsparcia mięśni stabilizujących, takich jak mięśnie naramienne, a zwłaszcza ich przednia część, która stabilizuje ramię podczas unoszenia sztangi. Mięśnie czworoboczne oraz mięśnie grzbietu stabilizują górną część ciała, zapobiegając niepożądanemu bujaniu tułowiem podczas wykonywania ruchu',
			Description3:
				'Kontrola ruchu w tym ćwiczeniu jest kluczowa. Unikaj bujania tułowiem, co często zdarza się przy zbyt dużym obciążeniu, ponieważ obciąża to dolny odcinek pleców i zmniejsza skuteczność ćwiczenia. Łokcie powinny być trzymane blisko ciała i nie wychodzić do przodu, ponieważ angażuje to inne mięśnie i odciąża biceps. Ważne jest również, aby opuszczanie sztangi było powolne, ponieważ pozwala to lepiej zaangażować mięśnie w fazie ekscentrycznej.',
                videoUrl: '....',
		},
		{
			section: 'Kreatyna',
			Title: 'Kreatyna',
			Description:
				'Francuskie wyciskanie sztangi łamanej na ławce poziomej, zwane również "triceps extension", to jedno z najbardziej efektywnych ćwiczeń izolujących triceps. Wykonywane w pozycji leżącej na ławce poziomej, pozwala na pełną koncentrację na pracy mięśni trójgłowych ramienia, co czyni je kluczowym elementem w treningu górnych partii ciała, zwłaszcza dla osób chcących rozbudować masę i siłę tricepsów.',
			ImageUrl: Francuskie_wyciskanie_sztangi,
			Description2:
				'Głównym mięśniem pracującym w tym ćwiczeniu jest triceps brachii, który odpowiada za prostowanie ramienia w stawie łokciowym. Triceps składa się z trzech głów: długiej, bocznej i przyśrodkowej. Francuskie wyciskanie na ławce poziomej angażuje wszystkie te części, ale szczególnie intensywnie pracuje głowa długa tricepsa, która biegnie od łopatki do łokcia i odpowiada za rozciąganie i prostowanie ramienia. Dzięki temu, że sztanga łamana jest używana w tym ćwiczeniu, nadgarstki są w bardziej ergonomicznej pozycji niż przy prostych sztangach, co zmniejsza ryzyko nadmiernego obciążenia stawów i zapewnia większy komfort. Ćwiczenie to dodatkowo angażuje mięśnie stabilizujące, takie jak mięśnie naramienne oraz mięśnie piersiowe, które pomagają utrzymać stabilność ramion i tułowia podczas ruchu. Mięśnie przedramion również pracują, stabilizując nadgarstki i sztangę w trakcie opuszczania i unoszenia ciężaru.',
			Description3:
				'Podczas tego ćwiczenia kluczowe jest utrzymanie stabilnej pozycji pleców i tułowia, co zapobiega nadmiernemu naprężeniu dolnego odcinka kręgosłupa. Ważne jest także, aby faza opuszczania sztangi była kontrolowana – zbyt szybkie ruchy mogą prowadzić do nadmiernego napięcia stawów łokciowych oraz zmniejszyć efektywność ćwiczenia. Unikaj także nadmiernego ruchu ramion – łokcie powinny pozostawać w jednej pozycji, a ruch odbywa się jedynie w stawie łokciowym.',
                videoUrl: '....',
		},
		{
			section: 'Bcaa',
			Title: 'Bcaa',
			Description:
				'Martwy ciąg klasyczny to fundamentalne ćwiczenie siłowe, które angażuje wiele grup mięśniowych, rozwijając ogólną siłę i wytrzymałość. To jedno z najważniejszych ćwiczeń w treningu siłowym, szczególnie cenione za swoje wszechstronne oddziaływanie na dolną część ciała, plecy oraz mięśnie posturalne. Jego poprawne wykonanie wymaga odpowiedniej techniki, aby uniknąć kontuzji i maksymalnie zaangażować mięśnie docelowe.',
			ImageUrl: martwy_ciag_klasyczny,
			Description2:
				'Główne zaangażowane mięśnie to prostowniki grzbietu, które odpowiadają za utrzymanie neutralnej pozycji kręgosłupa i stabilizację pleców podczas całego ruchu. Mięśnie pośladkowe wielkie są silnie zaangażowane w wyprost bioder, szczególnie w końcowej fazie ruchu. Mięśnie czworogłowe uda aktywują się głównie w początkowej fazie ruchu, podczas wyprostu kolan. Mięśnie dwugłowe uda pracują w fazie opuszczania sztangi, kontrolując zgięcie bioder i kolan. Mięśnie stabilizujące brzuch wspomagają stabilizację tułowia i ochronę dolnej części pleców. Mięśnie najszersze grzbietu oraz trapezius utrzymują sztangę blisko ciała i pomagają stabilizować górną część pleców.',
			Description3:
				'Ruch zaczyna się od wyprostowania kolan i bioder, unosząc sztangę w górę, jednocześnie utrzymując ją blisko ciała. W tej fazie aktywnie pracują mięśnie czworogłowe uda, mięśnie pośladkowe wielkie oraz mięśnie prostowniki grzbietu. Kontrola ruchu w martwym ciągu to kluczowy element – należy unikać zbyt gwałtownego wyprostowania tułowia, które może prowadzić do nadmiernego obciążenia dolnej części pleców. W momencie, gdy sztanga mija kolana, ruch wyprostowania tułowia i bioder powinien być zsynchronizowany, tak aby zaangażować również mięśnie pośladków i prostowników grzbietu. Technika i kontrola ruchu w martwym ciągu są kluczowe, ponieważ obciążenia mogą być bardzo duże, co zwiększa ryzyko kontuzji przy niepoprawnym wykonaniu. Pierwszym priorytetem jest utrzymanie neutralnej krzywizny kręgosłupa przez cały czas trwania ćwiczenia. Zaokrąglone plecy zwiększają nacisk na kręgosłup, co może prowadzić do urazów. Ruch powinien być kontrolowany od początku do końca – zarówno faza unoszenia (koncentryczna), jak i opuszczania (ekscentryczna). Częstym błędem jest wykonywanie ruchu zbyt dynamicznie, co może powodować przeciążenie stawów lub zmniejszenie aktywacji mięśni docelowych. Bardzo ważne jest, aby sztanga poruszała się w linii prostej, blisko ciała – to minimalizuje obciążenie dolnej części pleców i maksymalizuje efektywność ćwiczenia.',
                videoUrl: '....',
		},
		{
			section: 'Witamina',
			Title: 'Witamina_C',
			Description:
				'Cyclist squat to ćwiczenie, które skupia się na wzmocnieniu dolnych partii ciała, szczególnie ud i pośladków, przy jednoczesnym zwiększeniu mobilności stawów. Aby je wykonać, stajesz na lekko podwyższonym podłożu, takim jak mała platforma lub talerz, umieszczając stopy w sposób, który pozwoli na głębokie zejście w dół. Trzymając obciążenie, na przykład hantle lub kettlebell, w rękach na wysokości klatki piersiowej, zaczynasz ruch od ugięcia kolan i wypychania bioder do tyłu.',
			ImageUrl: cyclist_squad,
			Description2:
				'W miarę jak schodzisz w dół, ważne jest, aby zachować prostą postawę i nie zaokrąglać pleców. Ruch powinien być kontrolowany i płynny, a kolana powinny pozostawać w linii z palcami stóp, aby uniknąć kontuzji. Im niżej schodzisz, tym bardziej angażowane są mięśnie czworogłowe uda, które odpowiadają za prostowanie kolan. Mięśnie pośladkowe, w szczególności mięsień wielki pośladkowy, również intensywnie pracują, pomagając w stabilizacji oraz w powrocie do pozycji wyjściowej.',
			Description3:
				'Podczas tego ćwiczenia angażowane są również mięśnie przywodziciele ud, które stabilizują ruch, a także mięśnie łydek, które pracują nad równowagą i stabilnością. Dodatkowo, angażując core, czyli mięśnie brzucha i dolnej części pleców, zapewniasz sobie lepszą stabilizację podczas całego ruchu. Regularne wykonywanie cyclist squat przyczynia się do zwiększenia siły i masy mięśniowej nóg, poprawy mobilności oraz ogólnej wydolności, co może być korzystne dla sportowców oraz osób aktywnych fizycznie.',
                videoUrl: '....',
		},
        {
			section: 'Witamina',
			Title: 'Witamina_D',
			Description:
				'Cyclist squat to ćwiczenie, które skupia się na wzmocnieniu dolnych partii ciała, szczególnie ud i pośladków, przy jednoczesnym zwiększeniu mobilności stawów. Aby je wykonać, stajesz na lekko podwyższonym podłożu, takim jak mała platforma lub talerz, umieszczając stopy w sposób, który pozwoli na głębokie zejście w dół. Trzymając obciążenie, na przykład hantle lub kettlebell, w rękach na wysokości klatki piersiowej, zaczynasz ruch od ugięcia kolan i wypychania bioder do tyłu.',
			ImageUrl: cyclist_squad,
			Description2:
				'W miarę jak schodzisz w dół, ważne jest, aby zachować prostą postawę i nie zaokrąglać pleców. Ruch powinien być kontrolowany i płynny, a kolana powinny pozostawać w linii z palcami stóp, aby uniknąć kontuzji. Im niżej schodzisz, tym bardziej angażowane są mięśnie czworogłowe uda, które odpowiadają za prostowanie kolan. Mięśnie pośladkowe, w szczególności mięsień wielki pośladkowy, również intensywnie pracują, pomagając w stabilizacji oraz w powrocie do pozycji wyjściowej.',
			Description3:
				'Podczas tego ćwiczenia angażowane są również mięśnie przywodziciele ud, które stabilizują ruch, a także mięśnie łydek, które pracują nad równowagą i stabilnością. Dodatkowo, angażując core, czyli mięśnie brzucha i dolnej części pleców, zapewniasz sobie lepszą stabilizację podczas całego ruchu. Regularne wykonywanie cyclist squat przyczynia się do zwiększenia siły i masy mięśniowej nóg, poprawy mobilności oraz ogólnej wydolności, co może być korzystne dla sportowców oraz osób aktywnych fizycznie.',
                videoUrl: '....',
		},
        {
			section: 'Pwr',
			Title: 'Pwr',
			Description:
				'Cyclist squat to ćwiczenie, które skupia się na wzmocnieniu dolnych partii ciała, szczególnie ud i pośladków, przy jednoczesnym zwiększeniu mobilności stawów. Aby je wykonać, stajesz na lekko podwyższonym podłożu, takim jak mała platforma lub talerz, umieszczając stopy w sposób, który pozwoli na głębokie zejście w dół. Trzymając obciążenie, na przykład hantle lub kettlebell, w rękach na wysokości klatki piersiowej, zaczynasz ruch od ugięcia kolan i wypychania bioder do tyłu.',
			ImageUrl: cyclist_squad,
			Description2:
				'W miarę jak schodzisz w dół, ważne jest, aby zachować prostą postawę i nie zaokrąglać pleców. Ruch powinien być kontrolowany i płynny, a kolana powinny pozostawać w linii z palcami stóp, aby uniknąć kontuzji. Im niżej schodzisz, tym bardziej angażowane są mięśnie czworogłowe uda, które odpowiadają za prostowanie kolan. Mięśnie pośladkowe, w szczególności mięsień wielki pośladkowy, również intensywnie pracują, pomagając w stabilizacji oraz w powrocie do pozycji wyjściowej.',
			Description3:
				'Podczas tego ćwiczenia angażowane są również mięśnie przywodziciele ud, które stabilizują ruch, a także mięśnie łydek, które pracują nad równowagą i stabilnością. Dodatkowo, angażując core, czyli mięśnie brzucha i dolnej części pleców, zapewniasz sobie lepszą stabilizację podczas całego ruchu. Regularne wykonywanie cyclist squat przyczynia się do zwiększenia siły i masy mięśniowej nóg, poprawy mobilności oraz ogólnej wydolności, co może być korzystne dla sportowców oraz osób aktywnych fizycznie.',
                videoUrl: '....',
		},
	];

	const filteredSuplements = click
		? suplements.filter((suplements) => suplements.section === click)
		: suplements;

	return (
		<div>
			{filteredSuplements.map((suplements, index) => (
				<SuplementsSection key={index} sectionTitle={suplements.section}>
					<SuplementsComponent
						key={index}
						title={suplements.Title}
						description={suplements.Description}
						description2={suplements.Description2}
						description3={suplements.Description3}
                        videoUrl={suplements.videoUrl}
					/>
				</SuplementsSection>
			))}
		</div>
	);
};


export default SuplementsList;
