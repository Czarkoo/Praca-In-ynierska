import React from 'react';
import ExerciseComponent from './ExerciseComponent';
import ExerciseSection from './ExerciseSection';
import facts_myths_image1 from '../../assets/facts_myths_image1.png';
import uginanie_hantlami_stojac from '../../assets/uginanie_hantlami_stojac.webp';
import uginanie_na_blisko_ze_sztanga_stojac from '../../assets/uginanie_na_blisko_ze_sztanga_stojac.webp';
import Uginanie_na_lawce_skosnej_siedzac_w_odchyleniu from '../../assets/Uginanie_na_lawce_skosnej_siedzac_w_odchyleniu.webp';
import uginanie_ze_sztanga_stojac from '../../assets/uginanie_ze_sztanga_stojac.webp';
import prostowanie_warkocz from '../../assets/prostowanie_warkocz.webp';
import wyprost_nachwyt from '../../assets/wyprost_nachwyt.webp';
const ExerciseList = ({click}) => {
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
			Description:
				'Uginanie na biceps z wąskim chwytem przy użyciu sztangi łamanej, wykonywane w pozycji stojącej, to świetne ćwiczenie izolujące bicepsy, które w szczególności angażuje głowę krótką mięśnia biceps brachii. Dzięki węższemu ustawieniu dłoni na sztandze, nacisk kładziony jest na wewnętrzną część bicepsa, co może przyczynić się do uzyskania pełniejszego i bardziej zaokrąglonego wyglądu ramion.',
			ImageUrl: uginanie_na_blisko_ze_sztanga_stojac,
			Description2:
				'Głównym mięśniem pracującym w tym ćwiczeniu jest biceps brachii, przy czym szczególną uwagę zwraca się na głowę krótką, która jest bardziej aktywna przy wąskim chwycie. Wspierającymi mięśniami są brachialis i brachioradialis. Mięsień brachialis, znajdujący się pod bicepsem, również mocno pracuje w tym ruchu, pomagając przy zginaniu łokcia i wpływając na ogólną grubość ramienia. Z kolei brachioradialis, zlokalizowany na przedramieniu, wspiera stabilizację przedramienia i nadgarstka, szczególnie podczas podnoszenia ciężaru.',
			Description3:
				'Ruch rozpoczyna się od pozycji, w której ręce są wyprostowane, a sztanga spoczywa na udach. Zginając łokcie, unosisz sztangę w kierunku klatki piersiowej, utrzymując napięcie w bicepsach. Ważne, aby kontrolować ruch i nie pozwalać na oszukiwanie poprzez bujanie tułowiem lub nadmierne zaangażowanie innych grup mięśniowych, takich jak mięśnie pleców czy barków. Podczas unoszenia sztangi łokcie powinny pozostawać blisko ciała, a ruch powinien być wykonywany jedynie z wykorzystaniem bicepsów. W fazie opuszczania, sztanga powinna być powoli opuszczana w kontrolowany sposób, aby maksymalnie zaangażować mięśnie w fazie ekscentrycznej.',
		},
		{
			Title: 'Uginanie hantlami stojąc',
			Description:
				'Uginanie hantli stojąc to jedno z najbardziej podstawowych i popularnych ćwiczeń na biceps, które angażuje każdą z rąk indywidualnie, co pozwala na lepszą kontrolę ruchu i równomierny rozwój mięśni. W przeciwieństwie do uginania ze sztangą, w tym ćwiczeniu każda ręka pracuje osobno, co pozwala skupić się na słabszej stronie i zminimalizować różnice w sile i rozmiarze między ramionami.',
			ImageUrl: uginanie_hantlami_stojac,
			Description2:
				'Głównym mięśniem pracującym podczas tego ćwiczenia jest biceps brachii, który odpowiada za zginanie łokcia i unoszenie przedramienia. Biceps składa się z dwóch głów: długiej, znajdującej się po zewnętrznej stronie ramienia, oraz krótkiej, bliżej wewnętrznej części. Podczas uginania hantli obie głowy bicepsa są aktywnie zaangażowane. W ćwiczeniu tym wspierają je również inne mięśnie, takie jak brachialis – mięsień znajdujący się pod bicepsem, który wspomaga zginanie łokcia, oraz brachioradialis, mięsień przedramienia odpowiedzialny za stabilizację nadgarstka i pomoc w zginaniu ramienia.',
			Description3:
				'Technika wykonywania uginania hantlami stojąc jest prosta, ale wymaga precyzji, aby ćwiczenie było jak najbardziej efektywne. Zacznij od stania w pozycji wyprostowanej, z nogami ustawionymi na szerokość bioder, trzymając hantle w obu dłoniach w naturalnym nachwycie (dłonie skierowane do ciała). Plecy powinny być wyprostowane, a łopatki ściągnięte, co zapewnia stabilność całego tułowia. Zginając łokcie, unosisz hantle do góry, w kierunku barków, pamiętając o kontrolowanym ruchu i nie angażowaniu pleców ani ramion w bujanie ciałem. Łokcie muszą pozostać blisko ciała przez cały ruch, co pozwala na izolację pracy bicepsów. Unikaj ich unoszenia do przodu, ponieważ zmniejsza to napięcie w bicepsach i angażuje inne mięśnie.',
		},
		{
			section: 'Triceps',
			Title: 'Francuskie wyciskanie sztangi łamanej na ławce poziomej',
			Description:
				'Francuskie wyciskanie sztangi łamanej na ławce poziomej, zwane również "triceps extension", to jedno z najbardziej efektywnych ćwiczeń izolujących triceps. Wykonywane w pozycji leżącej na ławce poziomej, pozwala na pełną koncentrację na pracy mięśni trójgłowych ramienia, co czyni je kluczowym elementem w treningu górnych partii ciała, zwłaszcza dla osób chcących rozbudować masę i siłę tricepsów.',
			ImageUrl: facts_myths_image1,
			Description2:
				'Głównym mięśniem pracującym w tym ćwiczeniu jest triceps brachii, który odpowiada za prostowanie ramienia w stawie łokciowym. Triceps składa się z trzech głów: długiej, bocznej i przyśrodkowej. Francuskie wyciskanie na ławce poziomej angażuje wszystkie te części, ale szczególnie intensywnie pracuje głowa długa tricepsa, która biegnie od łopatki do łokcia i odpowiada za rozciąganie i prostowanie ramienia. Dzięki temu, że sztanga łamana jest używana w tym ćwiczeniu, nadgarstki są w bardziej ergonomicznej pozycji niż przy prostych sztangach, co zmniejsza ryzyko nadmiernego obciążenia stawów i zapewnia większy komfort. Ćwiczenie to dodatkowo angażuje mięśnie stabilizujące, takie jak mięśnie naramienne oraz mięśnie piersiowe, które pomagają utrzymać stabilność ramion i tułowia podczas ruchu. Mięśnie przedramion również pracują, stabilizując nadgarstki i sztangę w trakcie opuszczania i unoszenia ciężaru.',
			Description3:
				'Podczas tego ćwiczenia kluczowe jest utrzymanie stabilnej pozycji pleców i tułowia, co zapobiega nadmiernemu naprężeniu dolnego odcinka kręgosłupa. Ważne jest także, aby faza opuszczania sztangi była kontrolowana – zbyt szybkie ruchy mogą prowadzić do nadmiernego napięcia stawów łokciowych oraz zmniejszyć efektywność ćwiczenia. Unikaj także nadmiernego ruchu ramion – łokcie powinny pozostawać w jednej pozycji, a ruch odbywa się jedynie w stawie łokciowym.',
		},
		{
			Title: 'Wyprosty na wyciagu górnym nachwytem',
			Description:
				'Wyprosty na wyciągu górnym nachwytem, znane również jako prostowanie ramion na wyciągu nachwytem, to jedno z popularnych ćwiczeń izolujących mięśnie tricepsa. Wykonywane na wyciągu górnym przy użyciu prostego drążka lub linki, to ćwiczenie skutecznie angażuje mięsień trójgłowy ramienia, pozwalając na pracę w pełnym zakresie ruchu. Dzięki nachwytowi, wyprosty te zmuszają do pracy nie tylko triceps, ale również inne mięśnie pomocnicze, co czyni to ćwiczenie bardziej wszechstronnym.',
			ImageUrl: wyprost_nachwyt,
			Description2:
				'Głównym mięśniem pracującym w tym ćwiczeniu jest triceps brachii, odpowiedzialny za prostowanie ramienia w stawie łokciowym. Triceps składa się z trzech głów: długiej, bocznej i przyśrodkowej, a wyprosty na wyciągu nachwytem angażują je wszystkie, ze szczególnym naciskiem na głowę boczną i przyśrodkową. Ćwiczenie to jest doskonałym sposobem na budowanie masy, siły oraz definicji tricepsów. Nachwyt powoduje, że ramiona i nadgarstki są w bardziej neutralnej pozycji, co może być korzystne dla osób z problemami stawowymi, minimalizując nacisk na nadgarstki i stawy łokciowe.',
			Description3:
				'Kontrola nad fazą opuszczania jest kluczowa – powolne opuszczanie drążka pozwala na pełne zaangażowanie mięśni w fazie ekscentrycznej ruchu, co prowadzi do większych przyrostów siły i masy mięśniowej. Warto unikać zbyt szybkich ruchów, które mogą obciążać stawy łokciowe i zmniejszać skuteczność ćwiczenia. Najczęstszym błędem popełnianym w tym ćwiczeniu jest bujanie tułowiem lub nadmierne zginanie nadgarstków. Bujanie może prowadzić do zaangażowania innych mięśni, takich jak mięśnie pleców czy ramion, co zmniejsza pracę tricepsów. Z kolei zginanie nadgarstków w kierunku dołu może zwiększać ryzyko kontuzji i powodować ból stawów. Ważne jest, aby zachować proste nadgarstki i kontrolować cały ruch.',
		},
		{
			Title: 'Odwrócony modlitewnik',
			Description:
				'Odwrócony modlitewnik, znany również jako „triceps extension na modlitewniku”, to skuteczne ćwiczenie izolujące mięśnie tricepsa, które pozwala na skoncentrowaną pracę nad tą grupą mięśniową. Wykonywane na specjalnym sprzęcie zwanym modlitewnikiem, ćwiczenie to umożliwia zachowanie stabilnej pozycji, co sprzyja lepszej kontroli ruchu oraz izolacji mięśni. Dzięki unikalnej konstrukcji modlitewnika, jest to idealne rozwiązanie dla osób, które pragną skoncentrować się na rozwoju tricepsów.',
			ImageUrl: facts_myths_image1,
			Description2:
				'Wykonując odwrócony modlitewnik, angażowane są także inne mięśnie stabilizujące, takie jak mięśnie naramienne oraz mięśnie klatki piersiowej, które pomagają utrzymać stabilność ramion podczas ruchu. Mięśnie przedramion również są aktywne, stabilizując chwyt i kontrolując ciężar.',
			Description3:
				'Aby prawidłowo wykonać odwrócony modlitewnik, zacznij od ustawienia się w pozycji leżącej na modlitewniku, twarzą do oparcia. Chwyć sztangę lub linkę, zależnie od preferencji, w nachwycie lub neutralnym chwycie. Ustaw ręce na szerokość barków, a łokcie powinny znajdować się blisko ciała. W tej pozycji ramiona powinny być ustawione w linii prostej z tułowiem. Z pozycji wyjściowej, która zakłada lekkie zgięcie łokci, rozpocznij ruch prostując ramiona w dół, angażując tricepsy. Kluczowe jest, aby łokcie pozostały blisko ciała, a ruch odbywał się jedynie w stawach łokciowych. Powinno to zapobiegać bujaniu ciała i angażowaniu innych grup mięśniowych. Po pełnym prostowaniu ramion, zatrzymaj ruch na chwilę, a następnie powoli zginaj łokcie, wracając do pozycji wyjściowej. Utrzymuj kontrolę nad ciężarem przez cały czas, aby zmaksymalizować napięcie mięśni i zaangażowanie tricepsów.',
		},
		{
			Title: 'Prostowanie ramion z linkami górnego wyciagu "warkocz"',
			Description:
				'Prostowanie ramion z linkami górnego wyciągu, znane potocznie jako "warkocz" z powodu charakterystycznego chwytu liny, jest jednym z najlepszych ćwiczeń izolujących triceps. To ćwiczenie skutecznie angażuje wszystkie trzy głowy mięśnia trójgłowego ramienia, szczególnie kiedy wykonywane jest z pełną kontrolą ruchu i odpowiednią techniką. Może być świetnym elementem treningu, który zwiększa siłę i rozmiar tricepsów, a także poprawia ogólną stabilizację ramion.',
			ImageUrl: prostowanie_warkocz,
			Description2:
				'Ruch rozpoczyna się od powolnego prostowania ramion, ciągnąc linę w dół, aż do momentu pełnego wyprostu. Należy zwrócić szczególną uwagę, aby w końcowej fazie ruchu lekko rozciągnąć końce liny na boki. Ten manewr, przypominający splatanie warkocza, pozwala na intensywniejsze zaangażowanie bocznej głowy tricepsa, co zwiększa efektywność ćwiczenia. Ważnym aspektem tego ruchu jest utrzymanie stałej pozycji łokci – muszą one być blisko tułowia przez cały czas, co zapobiega zaangażowaniu innych grup mięśniowych i pozwala na pełne skupienie na tricepsie.',
			Description3:
				'Kontrola techniki w tym ćwiczeniu jest niezwykle ważna, aby uniknąć błędów, które mogłyby zmniejszyć jego efektywność. Przede wszystkim łokcie muszą być cały czas blisko ciała. Jeśli zaczynają się przesuwać do przodu lub na boki, triceps przestaje pracować w izolacji, a zaangażowanie innych mięśni staje się większe, co zmniejsza skuteczność ćwiczenia. Kolejnym ważnym elementem jest kontrola fazy ekscentrycznej, czyli powrotu liny do góry. Zbyt szybkie opuszczanie ciężaru osłabia napięcie mięśniowe, a także zwiększa ryzyko kontuzji.',
		},
		{
			section: 'Plecy',
			Title: 'Martyw ciąg klasyczny',
			Description: 'Martwy ciąg klasyczny to fundamentalne ćwiczenie siłowe, które angażuje wiele grup mięśniowych, rozwijając ogólną siłę i wytrzymałość. To jedno z najważniejszych ćwiczeń w treningu siłowym, szczególnie cenione za swoje wszechstronne oddziaływanie na dolną część ciała, plecy oraz mięśnie posturalne. Jego poprawne wykonanie wymaga odpowiedniej techniki, aby uniknąć kontuzji i maksymalnie zaangażować mięśnie docelowe.',
			ImageUrl: facts_myths_image1,
			Description2: 'Główne zaangażowane mięśnie to prostowniki grzbietu, które odpowiadają za utrzymanie neutralnej pozycji kręgosłupa i stabilizację pleców podczas całego ruchu. Mięśnie pośladkowe wielkie są silnie zaangażowane w wyprost bioder, szczególnie w końcowej fazie ruchu. Mięśnie czworogłowe uda aktywują się głównie w początkowej fazie ruchu, podczas wyprostu kolan. Mięśnie dwugłowe uda pracują w fazie opuszczania sztangi, kontrolując zgięcie bioder i kolan. Mięśnie stabilizujące brzuch wspomagają stabilizację tułowia i ochronę dolnej części pleców. Mięśnie najszersze grzbietu oraz trapezius utrzymują sztangę blisko ciała i pomagają stabilizować górną część pleców.',
			Description3: 'Ruch zaczyna się od wyprostowania kolan i bioder, unosząc sztangę w górę, jednocześnie utrzymując ją blisko ciała. W tej fazie aktywnie pracują mięśnie czworogłowe uda, mięśnie pośladkowe wielkie oraz mięśnie prostowniki grzbietu. Kontrola ruchu w martwym ciągu to kluczowy element – należy unikać zbyt gwałtownego wyprostowania tułowia, które może prowadzić do nadmiernego obciążenia dolnej części pleców. W momencie, gdy sztanga mija kolana, ruch wyprostowania tułowia i bioder powinien być zsynchronizowany, tak aby zaangażować również mięśnie pośladków i prostowników grzbietu. Technika i kontrola ruchu w martwym ciągu są kluczowe, ponieważ obciążenia mogą być bardzo duże, co zwiększa ryzyko kontuzji przy niepoprawnym wykonaniu. Pierwszym priorytetem jest utrzymanie neutralnej krzywizny kręgosłupa przez cały czas trwania ćwiczenia. Zaokrąglone plecy zwiększają nacisk na kręgosłup, co może prowadzić do urazów. Ruch powinien być kontrolowany od początku do końca – zarówno faza unoszenia (koncentryczna), jak i opuszczania (ekscentryczna). Częstym błędem jest wykonywanie ruchu zbyt dynamicznie, co może powodować przeciążenie stawów lub zmniejszenie aktywacji mięśni docelowych. Bardzo ważne jest, aby sztanga poruszała się w linii prostej, blisko ciała – to minimalizuje obciążenie dolnej części pleców i maksymalizuje efektywność ćwiczenia.',
		},
		{
			Title: 'Wiosłowanie sztangą',
			Description: 'Wiosłowanie sztangą to jedno z podstawowych ćwiczeń wielostawowych, które skutecznie rozwija siłę i masę mięśniową górnej części pleców, ramion oraz mięśni stabilizujących tułów. To ćwiczenie angażuje wiele grup mięśniowych, jednocześnie poprawiając stabilizację posturalną i ogólną sprawność. Wykonywanie go z odpowiednią techniką jest kluczowe, aby maksymalnie zaangażować docelowe mięśnie i zminimalizować ryzyko kontuzji.',
			ImageUrl: facts_myths_image1,
			Description2: 'Wiosłowanie sztangą angażuje głównie mięśnie najszersze grzbietu, które odpowiadają za ściąganie ramion w dół i do tyłu, co prowadzi do wzmocnienia szerokości pleców. Mięśnie czworoboczne, szczególnie ich dolna i środkowa część, wspierają ściąganie łopatek i stabilizują górną część pleców. Romboidy odpowiadają za przyciąganie łopatek do siebie, co wspomaga poprawną postawę i wzmacnia środkową część pleców. Tylne aktony mięśni naramiennych pracują podczas zginania ramion do tyłu, a mięśnie dwugłowe ramion odgrywają ważną rolę w zginaniu łokci, wspomagając unoszenie sztangi. Dodatkowo, mięśnie stabilizujące brzuch oraz prostowniki grzbietu pomagają w utrzymaniu stabilności tułowia i zabezpieczają dolny odcinek kręgosłupa przed przeciążeniem.',
			Description3: 'Kontrola ruchu w wiosłowaniu sztangą to kluczowy element, szczególnie jeśli chodzi o utrzymanie odpowiedniej techniki. Plecy powinny być cały czas proste, a łopatki aktywnie ściągane do siebie w momencie podciągnięcia sztangi. Należy unikać zbyt dużego wychylania się tułowiem do przodu lub tyłu, ponieważ to może obciążyć dolny odcinek kręgosłupa. Ruch powinien być wykonywany płynnie, bez używania siły zamachowej, a wszystkie fazy ćwiczenia muszą być kontrolowane. Dobrze wykonane wiosłowanie sztangą poprawia postawę, rozwija mięśnie pleców i zwiększa siłę chwytu.',
		},
		{
			Title: '"Narciarz"',
			Description: 'W tym ćwiczeniu wykorzystuje się wyciąg górny z uchwytem lub sznurem. Rozpoczynamy w pozycji stojącej, z nogami na szerokość bioder, lekko ugiętymi kolanami. Uchwyt powinien być ustawiony na wysokości klatki piersiowej lub nieco niżej, w zależności od preferencji. Gdy zaczynamy ruch, odchylamy lekko tułów do przodu, zachowując prostą linię pleców.',
			ImageUrl: facts_myths_image1,
			Description2: 'Ruch polega na ciągnięciu uchwytu lub sznura w dół i w tył, jakbyśmy „odpuchiwali” kijkami, włączając do pracy mięśnie górnej części pleców, szczególnie mięśnie najszersze, trapezowe oraz równoległoboczne. W trakcie ciągnięcia ważne jest, aby skupiać się na pracy pleców, a nie na ramionach, co pozwoli na lepsze zaangażowanie odpowiednich mięśni.',
			Description3: 'Kontrola jest kluczowa; powinien być on płynny i stabilny, aby uniknąć nadmiernego obciążenia stawów barkowych. Zakończenie ruchu powinno być wyraźne, a następnie można powoli powrócić do pozycji wyjściowej. To ćwiczenie przyczynia się do wzmocnienia pleców oraz poprawy postawy ciała, a także zwiększa stabilność i siłę górnej części ciała. Regularne wykonywanie narciarza może być świetnym uzupełnieniem programu treningowego, zwłaszcza dla osób aktywnych w sportach wymagających mocnych pleców.',
		},
		{
			Title: 'Podciąganie nachwytem',
			Description: 'Podciąganie nachwytem na bramie to ćwiczenie siłowe, które skutecznie angażuje górne partie mięśniowe, zwłaszcza mięśnie pleców, ramion oraz bicepsów. Ćwiczenie to można wykonywać na bramie do podciągania lub na poziomym drążku, który jest stabilnie zamocowany na odpowiedniej wysokości.',
			ImageUrl: facts_myths_image1,
			Description2: 'Podczas podciągania nachwytem na bramie głównie angażowane są mięśnie najszersze grzbietu, które są kluczowe dla ruchu podciągania, pomagając ściągać ramiona w dół i do tyłu. Również pracują mięśnie czworoboczne, szczególnie dolna i środkowa część trapezu, które stabilizują łopatki oraz pomagają w ich ściąganiu. Mięśnie równoległoboczne znajdujące się między łopatkami również odgrywają istotną rolę, ściągając je do siebie. Dodatkowo, mięśnie obłe większe wspierają ruch podciągania, współpracując z najszerszymi grzbietu. Chociaż mięśnie prostowniki grzbietu nie są głównymi mięśniami zaangażowanymi w podciąganie, stabilizują kręgosłup w trakcie ruchu. Warto także wspomnieć, że podczas tego ćwiczenia intensywnie pracują bicepsy oraz mięśnie ramion, ale kluczową rolę odgrywają właśnie wymienione partie pleców. Regularne wykonywanie podciągania nachwytem przyczynia się do ich wzmocnienia i poprawy sylwetki.',
			Description3: 'Aby rozpocząć, stajemy w pozycji pod drążkiem, z nogami na szerokość bioder. Chwycimy drążek nachwytem, czyli dłońmi skierowanymi od siebie, na szerokość nieco większą niż szerokość ramion. Warto zadbać o to, aby uchwyt był pewny, co zapewni nam lepszą stabilność podczas ruchu. Zaczynamy ruch od lekkiego napięcia mięśni brzucha, co pomaga w stabilizacji ciała. Następnie, przy wydechu, zginamy łokcie i ściągamy łopatki do siebie, co prowadzi do podciągnięcia ciała w górę. Ważne jest, aby unikać szarpania oraz zbytniego bujania ciałem; ruch powinien być kontrolowany i płynny.Kiedy broda znajduje się powyżej drążka, zatrzymujemy się na chwilę w tej pozycji, aby maksymalnie zaangażować mięśnie, a następnie powoli opuszczamy ciało z powrotem do pozycji wyjściowej, starając się zachować kontrolę nad ruchem. W trakcie opuszczania nie należy pozwalać ciału na opadanie, aby zwiększyć efektywność treningu.',
		},
		{
			section: 'Nogi',
			Title: 'Wykroki',
			Description: 'Wykroki to efektywne ćwiczenie angażujące głównie mięśnie dolnych partii ciała, w tym uda, pośladki oraz łydki. Aby wykonać wykrok, zaczynamy w pozycji stojącej z nogami ustawionymi na szerokość bioder. Wykonując krok do przodu jedną nogą, zginamy kolano, a druga noga pozostaje na miejscu. Ważne jest, aby zachować prostą postawę, a kolano nogi z przodu nie powinno przekraczać linii palców, aby uniknąć kontuzji.',
			ImageUrl: facts_myths_image1,
			Description2: 'Podczas ruchu, mięsień czworogłowy uda (quadriceps) jest intensywnie zaangażowany w zginanie nogi z przodu oraz w powrocie do pozycji wyjściowej. Mięśnie pośladkowe, zwłaszcza mięsień wielki pośladkowy (gluteus maximus), odgrywają kluczową rolę w stabilizacji ciała oraz w wyproście nogi. Równocześnie mięśnie przywodziciele ud oraz mięśnie łydek również są aktywne, co przyczynia się do stabilności w trakcie ruchu.',
			Description3: 'Po zakończeniu wykroku, wracamy do pozycji wyjściowej i możemy powtórzyć ćwiczenie na drugą nogę. Wykroki można modyfikować, dodając obciążenie, na przykład trzymając hantle w rękach lub korzystając z sztangi, co zwiększa intensywność treningu i angażuje mięśnie jeszcze bardziej. Regularne wykonywanie wykroków przyczynia się do wzmocnienia i ujędrnienia nóg oraz poprawy równowagi i koordynacji.',
		},
		{
			Title: 'Wyprost podudzi',
			Description: 'Wyprost podudzi to popularne ćwiczenie, które koncentruje się na wzmocnieniu mięśni ud, szczególnie czworogłowego uda. Aby wykonać to ćwiczenie, siadasz na maszynie do wyprostu nóg, umieszczając nogi w pozycji, w której kolana są zgięte pod kątem prostym, a stopy opierają się na platformie. Po dostosowaniu odpowiedniego ciężaru zaczynasz ruch od prostowania nóg, wypychając platformę w górę.',
			ImageUrl: facts_myths_image1,
			Description2: 'Podczas wykonywania wyprostu, główną rolę odgrywają mięśnie czworogłowe uda, które składają się z czterech części: mięśnia prostego uda, mięśni obszernych bocznych, pośrednich i przyśrodkowych. Ich aktywność jest kluczowa dla prostowania kolan, a im większy ciężar, tym intensywniejsza praca tych mięśni.',
			Description3: 'W trakcie ruchu warto zwrócić uwagę na technikę; nogi powinny być wyprostowane do momentu prawie pełnego wyprostu, ale nie należy blokować kolan na końcu ruchu, co mogłoby prowadzić do kontuzji. W trakcie całego ćwiczenia ważna jest stabilizacja tułowia i pleców, aby uniknąć nadmiernego obciążenia kręgosłupa. Po osiągnięciu maksymalnego wyprostu, kontrolowany ruch powrotny do pozycji wyjściowej powinien być równie płynny, co pozwoli na maksymalne zaangażowanie mięśni czworogłowych. Regularne wykonywanie wyprostu podudzi przyczynia się do zwiększenia siły i masy mięśniowej ud oraz poprawy stabilności i wydolności dolnych partii ciała.',
		},
		{
			Title: 'Smith',
			Description: 'Przysiady na maszynie Smith to popularne ćwiczenie, które koncentruje się na wzmocnieniu dolnych partii ciała, w tym mięśni ud, pośladków oraz łydek. Aby wykonać to ćwiczenie, należy ustawić się na platformie pod sztangą maszyny Smith, opierając ją na górnej części pleców, tuż nad barkami. Stopy powinny być ustawione na szerokość bioder, a palce lekko skierowane na zewnątrz.',
			ImageUrl: facts_myths_image1,
			Description2: 'Podczas przysiadu intensywnie pracują mięśnie czworogłowe uda, które są odpowiedzialne za prostowanie kolan, a także mięśnie pośladkowe, zwłaszcza mięsień wielki pośladkowy, który wspiera ruch w górę. Mięśnie przywodziciele ud również są zaangażowane, stabilizując ruch i pomagając w utrzymaniu odpowiedniej pozycji ciała. Dodatkowo, mięśnie łydek (głównie mięsień brzuchaty łydki) również pracują, aby pomóc w stabilizacji stóp.',
			Description3: 'Rozpoczynając ruch, schodzisz w dół, zginając kolana i wypychając biodra do tyłu, jakbyś chciał usiąść na niewidzialnym krześle. W trakcie tego ruchu ważne jest, aby utrzymać plecy proste i nie zaokrąglać ich, co pomoże w zachowaniu stabilności oraz uniknięciu kontuzji. Gdy udan osiągną równoległość z podłogą lub schodzisz nieco niżej, zaczynasz powrót do pozycji wyjściowej, prostując nogi i napinając mięśnie pośladkowe oraz udowe. Korzystanie z maszyny Smith zapewnia większą kontrolę nad ruchem i stabilizację, co sprawia, że przysiady na tej maszynie są dobrym wyborem dla osób, które dopiero zaczynają swoją przygodę z treningiem siłowym lub chcą skupić się na technice. Regularne wykonywanie przysiadów na maszynie Smith przyczynia się do zwiększenia siły, masy mięśniowej oraz poprawy ogólnej wydolności dolnych partii ciała.',
		},
		{
			Title: 'cyclist squad',
			Description: 'Cyclist squat to ćwiczenie, które skupia się na wzmocnieniu dolnych partii ciała, szczególnie ud i pośladków, przy jednoczesnym zwiększeniu mobilności stawów. Aby je wykonać, stajesz na lekko podwyższonym podłożu, takim jak mała platforma lub talerz, umieszczając stopy w sposób, który pozwoli na głębokie zejście w dół. Trzymając obciążenie, na przykład hantle lub kettlebell, w rękach na wysokości klatki piersiowej, zaczynasz ruch od ugięcia kolan i wypychania bioder do tyłu.',
			ImageUrl: facts_myths_image1,
			Description2: 'W miarę jak schodzisz w dół, ważne jest, aby zachować prostą postawę i nie zaokrąglać pleców. Ruch powinien być kontrolowany i płynny, a kolana powinny pozostawać w linii z palcami stóp, aby uniknąć kontuzji. Im niżej schodzisz, tym bardziej angażowane są mięśnie czworogłowe uda, które odpowiadają za prostowanie kolan. Mięśnie pośladkowe, w szczególności mięsień wielki pośladkowy, również intensywnie pracują, pomagając w stabilizacji oraz w powrocie do pozycji wyjściowej.',
			Description3: 'Podczas tego ćwiczenia angażowane są również mięśnie przywodziciele ud, które stabilizują ruch, a także mięśnie łydek, które pracują nad równowagą i stabilnością. Dodatkowo, angażując core, czyli mięśnie brzucha i dolnej części pleców, zapewniasz sobie lepszą stabilizację podczas całego ruchu. Regularne wykonywanie cyclist squat przyczynia się do zwiększenia siły i masy mięśniowej nóg, poprawy mobilności oraz ogólnej wydolności, co może być korzystne dla sportowców oraz osób aktywnych fizycznie.',
		},
	];

	const filteredExercises = click ? exercises.filter((exercise) => exercise.section === click) : exercises;



	return (
		<div>
			{filteredExercises.map((exercise, index) => (
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
