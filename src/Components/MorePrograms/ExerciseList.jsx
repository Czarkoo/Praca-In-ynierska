import React from 'react';
import ExerciseComponent from './ExerciseComponent';
import ExerciseSection from './ExerciseSection';
import facts_myths_image1 from '../../assets/facts_myths_image1.png';
import uginanie_hantlami_stojac from '../../assets/uginanie_hantlami_stojac.webp';
import uginanie_na_blisko_ze_sztanga_stojac from '../../assets/uginanie_na_blisko_ze_sztanga_stojac.webp';
import Uginanie_na_lawce_skosnej_siedzac_w_odchyleniu from '../../assets/Uginanie_na_lawce_skosnej_siedzac_w_odchyleniu.webp';
import uginanie_ze_sztanga_stojac from '../../assets/uginanie_ze_sztanga_stojac.webp';
const ExerciseList = () => {
	const exercises = [
		{
			section: 'Biceps',
			Title: 'Uginanie ze sztangą stojąc',
			Description:
				'Uginanie bicepsów ze sztangą prostą stojąc (barbell curls) to jedno z najpopularniejszych ćwiczeń na biceps, choć angażuje również inne mięśnie. W tym ćwiczeniu głównym mięśniem, który pracuje, jest biceps brachii – mięsień odpowiedzialny za zginanie łokcia i unoszenie przedramienia. Składa się on z dwóch części: głowy długiej, która znajduje się po zewnętrznej stronie ramienia, oraz głowy krótkiej, po stronie wewnętrznej. Oprócz bicepsa brachii, w ruch zaangażowane są inne mięśnie wspomagające. Jednym z nich jest brachialis, który znajduje się pod bicepsem i pomaga w zginaniu ramienia, szczególnie przy niższych kątach zgięcia łokcia. Kolejnym wspomagającym mięśniem jest brachioradialis, zlokalizowany na przedramieniu, który wspomaga zginanie łokcia i stabilizuje ruchy przedramienia. Dodatkowo mięśnie przedramion pracują, aby utrzymać chwyt sztangi.',
			ImageUrl: uginanie_ze_sztanga_stojac,
			Description2:
				'Ćwiczenie to wymaga także wsparcia mięśni stabilizujących, takich jak mięśnie naramienne, a zwłaszcza ich przednia część, która stabilizuje ramię podczas unoszenia sztangi. Mięśnie czworoboczne oraz mięśnie grzbietu stabilizują górną część ciała, zapobiegając niepożądanemu bujaniu tułowiem podczas wykonywania ruchu',
			Description3:
				'Kontrola ruchu w tym ćwiczeniu jest kluczowa. Unikaj bujania tułowiem, co często zdarza się przy zbyt dużym obciążeniu, ponieważ obciąża to dolny odcinek pleców i zmniejsza skuteczność ćwiczenia. Łokcie powinny być trzymane blisko ciała i nie wychodzić do przodu, ponieważ angażuje to inne mięśnie i odciąża biceps. Ważne jest również, aby opuszczanie sztangi było powolne, ponieważ pozwala to lepiej zaangażować mięśnie w fazie ekscentrycznej.',
		},
		{
			Title: 'Uginanie na ławce skośnej siedząc w odchyleniu',
			Description:
				'Uginanie bicepsów na ławce skośnej siedząc w odchyleniu to doskonałe ćwiczenie izolujące mięsień biceps brachii, które umożliwia pełne rozciągnięcie i maksymalne zaangażowanie mięśnia. Wykonując to ćwiczenie, zwiększasz zakres ruchu w porównaniu do klasycznego uginania stojąc, co sprawia, że jest to efektywna technika na rozbudowę masy i siły bicepsów.',
			ImageUrl: Uginanie_na_lawce_skosnej_siedzac_w_odchyleniu,
			Description2:
				'W tym ćwiczeniu główną pracę wykonuje mięsień biceps brachii. Dzięki siedzeniu na ławce pod kątem, zwłaszcza w lekkim odchyleniu do tyłu, głowa długa bicepsa (ta część mięśnia, która znajduje się bardziej na zewnątrz ramienia) jest mocniej angażowana, co prowadzi do większego rozciągnięcia i intensywniejszego skurczu w fazie unoszenia hantli. Głowa krótka bicepsa również pracuje, ale w mniejszym stopniu. W ćwiczeniu aktywnie uczestniczy także mięsień brachialis, który leży pod bicepsem i odpowiada za dodatkową siłę zginania łokcia. Pomocniczo działa również mięsień brachioradialis, który wspomaga pracę przedramienia i stabilizuje nadgarstek podczas unoszenia hantli.',
			Description3:
				'Podczas wykonywania ruchu, zginaj łokcie, unosząc hantle w kierunku ramion. Ważne, aby podczas podnoszenia nie angażować ramion ani barków, a cała praca pochodziła wyłącznie z bicepsów. Ruch powinien być kontrolowany zarówno w fazie unoszenia (koncentrycznej), jak i opuszczania (ekscentrycznej). Utrzymuj ramiona stabilnie, nie pozwalając im na ruch do przodu, co mogłoby odciążyć bicepsy i zaangażować inne mięśnie. W fazie opuszczania hantli, staraj się powoli rozciągać bicepsy, aby zmaksymalizować aktywację mięśnia. Ważne jest, aby nie używać zbyt dużego obciążenia, co może prowadzić do złej techniki i nadmiernego obciążenia stawów. Często spotykanym błędem jest ruch tułowiem do przodu podczas podnoszenia hantli, co zmniejsza efektywność ćwiczenia. Innym błędem jest zbyt szybkie opuszczanie hantli, co ogranicza pracę bicepsów w fazie ekscentrycznej, która jest kluczowa dla rozwoju siły i masy mięśniowej.',
		},
		{
			Title: 'Uginanie na blisko ze sztanga łamaną stojąc',
			Description: 'Uginanie na biceps z wąskim chwytem przy użyciu sztangi łamanej, wykonywane w pozycji stojącej, to świetne ćwiczenie izolujące bicepsy, które w szczególności angażuje głowę krótką mięśnia biceps brachii. Dzięki węższemu ustawieniu dłoni na sztandze, nacisk kładziony jest na wewnętrzną część bicepsa, co może przyczynić się do uzyskania pełniejszego i bardziej zaokrąglonego wyglądu ramion.',
			ImageUrl: uginanie_na_blisko_ze_sztanga_stojac,
			Description2: 'Głównym mięśniem pracującym w tym ćwiczeniu jest biceps brachii, przy czym szczególną uwagę zwraca się na głowę krótką, która jest bardziej aktywna przy wąskim chwycie. Wspierającymi mięśniami są brachialis i brachioradialis. Mięsień brachialis, znajdujący się pod bicepsem, również mocno pracuje w tym ruchu, pomagając przy zginaniu łokcia i wpływając na ogólną grubość ramienia. Z kolei brachioradialis, zlokalizowany na przedramieniu, wspiera stabilizację przedramienia i nadgarstka, szczególnie podczas podnoszenia ciężaru.',
			Description3: 'Ruch rozpoczyna się od pozycji, w której ręce są wyprostowane, a sztanga spoczywa na udach. Zginając łokcie, unosisz sztangę w kierunku klatki piersiowej, utrzymując napięcie w bicepsach. Ważne, aby kontrolować ruch i nie pozwalać na oszukiwanie poprzez bujanie tułowiem lub nadmierne zaangażowanie innych grup mięśniowych, takich jak mięśnie pleców czy barków. Podczas unoszenia sztangi łokcie powinny pozostawać blisko ciała, a ruch powinien być wykonywany jedynie z wykorzystaniem bicepsów. W fazie opuszczania, sztanga powinna być powoli opuszczana w kontrolowany sposób, aby maksymalnie zaangażować mięśnie w fazie ekscentrycznej.',
		},
		{
			Title: 'Uginanie hantlami stojąc',
			Description: 'Uginanie hantli stojąc to jedno z najbardziej podstawowych i popularnych ćwiczeń na biceps, które angażuje każdą z rąk indywidualnie, co pozwala na lepszą kontrolę ruchu i równomierny rozwój mięśni. W przeciwieństwie do uginania ze sztangą, w tym ćwiczeniu każda ręka pracuje osobno, co pozwala skupić się na słabszej stronie i zminimalizować różnice w sile i rozmiarze między ramionami.',
			ImageUrl: uginanie_hantlami_stojac,
			Description2: 'Głównym mięśniem pracującym podczas tego ćwiczenia jest biceps brachii, który odpowiada za zginanie łokcia i unoszenie przedramienia. Biceps składa się z dwóch głów: długiej, znajdującej się po zewnętrznej stronie ramienia, oraz krótkiej, bliżej wewnętrznej części. Podczas uginania hantli obie głowy bicepsa są aktywnie zaangażowane. W ćwiczeniu tym wspierają je również inne mięśnie, takie jak brachialis – mięsień znajdujący się pod bicepsem, który wspomaga zginanie łokcia, oraz brachioradialis, mięsień przedramienia odpowiedzialny za stabilizację nadgarstka i pomoc w zginaniu ramienia.',
			Description3: 'Technika wykonywania uginania hantlami stojąc jest prosta, ale wymaga precyzji, aby ćwiczenie było jak najbardziej efektywne. Zacznij od stania w pozycji wyprostowanej, z nogami ustawionymi na szerokość bioder, trzymając hantle w obu dłoniach w naturalnym nachwycie (dłonie skierowane do ciała). Plecy powinny być wyprostowane, a łopatki ściągnięte, co zapewnia stabilność całego tułowia. Zginając łokcie, unosisz hantle do góry, w kierunku barków, pamiętając o kontrolowanym ruchu i nie angażowaniu pleców ani ramion w bujanie ciałem. Łokcie muszą pozostać blisko ciała przez cały ruch, co pozwala na izolację pracy bicepsów. Unikaj ich unoszenia do przodu, ponieważ zmniejsza to napięcie w bicepsach i angażuje inne mięśnie.',
		},
		{
			section: 'Triceps',
			Title: 'Francuskie wyciskanie sztangi łamanej na ławce poziomej',
			Description: 'Francuskie wyciskanie sztangi łamanej na ławce poziomej, zwane również "triceps extension", to jedno z najbardziej efektywnych ćwiczeń izolujących triceps. Wykonywane w pozycji leżącej na ławce poziomej, pozwala na pełną koncentrację na pracy mięśni trójgłowych ramienia, co czyni je kluczowym elementem w treningu górnych partii ciała, zwłaszcza dla osób chcących rozbudować masę i siłę tricepsów.',
			ImageUrl: facts_myths_image1,
			Description2: 'Głównym mięśniem pracującym w tym ćwiczeniu jest triceps brachii, który odpowiada za prostowanie ramienia w stawie łokciowym. Triceps składa się z trzech głów: długiej, bocznej i przyśrodkowej. Francuskie wyciskanie na ławce poziomej angażuje wszystkie te części, ale szczególnie intensywnie pracuje głowa długa tricepsa, która biegnie od łopatki do łokcia i odpowiada za rozciąganie i prostowanie ramienia. Dzięki temu, że sztanga łamana jest używana w tym ćwiczeniu, nadgarstki są w bardziej ergonomicznej pozycji niż przy prostych sztangach, co zmniejsza ryzyko nadmiernego obciążenia stawów i zapewnia większy komfort. Ćwiczenie to dodatkowo angażuje mięśnie stabilizujące, takie jak mięśnie naramienne oraz mięśnie piersiowe, które pomagają utrzymać stabilność ramion i tułowia podczas ruchu. Mięśnie przedramion również pracują, stabilizując nadgarstki i sztangę w trakcie opuszczania i unoszenia ciężaru.',
			Description3: 'Podczas tego ćwiczenia kluczowe jest utrzymanie stabilnej pozycji pleców i tułowia, co zapobiega nadmiernemu naprężeniu dolnego odcinka kręgosłupa. Ważne jest także, aby faza opuszczania sztangi była kontrolowana – zbyt szybkie ruchy mogą prowadzić do nadmiernego napięcia stawów łokciowych oraz zmniejszyć efektywność ćwiczenia. Unikaj także nadmiernego ruchu ramion – łokcie powinny pozostawać w jednej pozycji, a ruch odbywa się jedynie w stawie łokciowym.',
		},
		{
			Title: 'Wyprosty na wyciagu górnym nachwytem',
			Description: 'Wyprosty na wyciągu górnym nachwytem, znane również jako prostowanie ramion na wyciągu nachwytem, to jedno z popularnych ćwiczeń izolujących mięśnie tricepsa. Wykonywane na wyciągu górnym przy użyciu prostego drążka lub linki, to ćwiczenie skutecznie angażuje mięsień trójgłowy ramienia, pozwalając na pracę w pełnym zakresie ruchu. Dzięki nachwytowi, wyprosty te zmuszają do pracy nie tylko triceps, ale również inne mięśnie pomocnicze, co czyni to ćwiczenie bardziej wszechstronnym.',
			ImageUrl: facts_myths_image1,
			Description2: 'Głównym mięśniem pracującym w tym ćwiczeniu jest triceps brachii, odpowiedzialny za prostowanie ramienia w stawie łokciowym. Triceps składa się z trzech głów: długiej, bocznej i przyśrodkowej, a wyprosty na wyciągu nachwytem angażują je wszystkie, ze szczególnym naciskiem na głowę boczną i przyśrodkową. Ćwiczenie to jest doskonałym sposobem na budowanie masy, siły oraz definicji tricepsów. Nachwyt powoduje, że ramiona i nadgarstki są w bardziej neutralnej pozycji, co może być korzystne dla osób z problemami stawowymi, minimalizując nacisk na nadgarstki i stawy łokciowe.',
			Description3: 'Kontrola nad fazą opuszczania jest kluczowa – powolne opuszczanie drążka pozwala na pełne zaangażowanie mięśni w fazie ekscentrycznej ruchu, co prowadzi do większych przyrostów siły i masy mięśniowej. Warto unikać zbyt szybkich ruchów, które mogą obciążać stawy łokciowe i zmniejszać skuteczność ćwiczenia. Najczęstszym błędem popełnianym w tym ćwiczeniu jest bujanie tułowiem lub nadmierne zginanie nadgarstków. Bujanie może prowadzić do zaangażowania innych mięśni, takich jak mięśnie pleców czy ramion, co zmniejsza pracę tricepsów. Z kolei zginanie nadgarstków w kierunku dołu może zwiększać ryzyko kontuzji i powodować ból stawów. Ważne jest, aby zachować proste nadgarstki i kontrolować cały ruch.',
		},
		{
			Title: 'Odwrócony modlitewnik',
			Description: 'Odwrócony modlitewnik, znany również jako „triceps extension na modlitewniku”, to skuteczne ćwiczenie izolujące mięśnie tricepsa, które pozwala na skoncentrowaną pracę nad tą grupą mięśniową. Wykonywane na specjalnym sprzęcie zwanym modlitewnikiem, ćwiczenie to umożliwia zachowanie stabilnej pozycji, co sprzyja lepszej kontroli ruchu oraz izolacji mięśni. Dzięki unikalnej konstrukcji modlitewnika, jest to idealne rozwiązanie dla osób, które pragną skoncentrować się na rozwoju tricepsów.',
			ImageUrl: facts_myths_image1,
			Description2: 'Wykonując odwrócony modlitewnik, angażowane są także inne mięśnie stabilizujące, takie jak mięśnie naramienne oraz mięśnie klatki piersiowej, które pomagają utrzymać stabilność ramion podczas ruchu. Mięśnie przedramion również są aktywne, stabilizując chwyt i kontrolując ciężar.',
			Description3: 'Aby prawidłowo wykonać odwrócony modlitewnik, zacznij od ustawienia się w pozycji leżącej na modlitewniku, twarzą do oparcia. Chwyć sztangę lub linkę, zależnie od preferencji, w nachwycie lub neutralnym chwycie. Ustaw ręce na szerokość barków, a łokcie powinny znajdować się blisko ciała. W tej pozycji ramiona powinny być ustawione w linii prostej z tułowiem. Z pozycji wyjściowej, która zakłada lekkie zgięcie łokci, rozpocznij ruch prostując ramiona w dół, angażując tricepsy. Kluczowe jest, aby łokcie pozostały blisko ciała, a ruch odbywał się jedynie w stawach łokciowych. Powinno to zapobiegać bujaniu ciała i angażowaniu innych grup mięśniowych. Po pełnym prostowaniu ramion, zatrzymaj ruch na chwilę, a następnie powoli zginaj łokcie, wracając do pozycji wyjściowej. Utrzymuj kontrolę nad ciężarem przez cały czas, aby zmaksymalizować napięcie mięśni i zaangażowanie tricepsów.',
		},
		{
			Title: 'Prostowanie ramion z linkami górnego wyciagu "warkocz"',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
			Description2: '',
			Description3: '',
		},
		{
			section: 'Plecy',
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
			Description2: '',
			Description3: '',
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
			Description2: '',
			Description3: '',
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
			Description2: '',
			Description3: '',
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
			Description2: '',
			Description3: '',
		},
		{
			section: 'Nogi',
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
			Description2: '',
			Description3: '',
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
			Description2: '',
			Description3: '',
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
			Description2: '',
			Description3: '',
		},
		{
			Title: 'Uginanie ramion stojąc',
			Description: 'tutaj bedzie opis ćwiczenia',
			ImageUrl: facts_myths_image1,
			Description2: '',
			Description3: '',
		},
	];
	return (
		<div>
			{exercises.map((exercise, index) => (
				<ExerciseSection key={index} sectionTitle={exercise.section}>
					<ExerciseComponent
						key={index}
						title={exercise.Title}
						description={exercise.Description}
						description2={exercise.Description2}
						description3={exercise.Description3}
						imageUrl={exercise.ImageUrl}
					/>
				</ExerciseSection>
			))}
		</div>
	);
};

export default ExerciseList;
