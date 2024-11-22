import React from 'react';
import SuplementComponent from './SuplementComponent';
import SuplementSection from './SuplementSection';
import gallery_creatina from '../../assets/gallery_creatina.webp';
import gallery_protein from '../../assets/gallery_protein.webp'
import gallery_vitamins from '../../assets/gallery_vitamins.png'
import gallery_bcaa from '../../assets/gallery_bcaa.webp'
import gallery_wph from '../../assets/bialko_wph.webp'
import gallery_wpc from '../../assets/bialko_wpc.webp'
import gallery_wpi from '../../assets/bialko_wpi.webp'
const SuplementsList = ({ click }) => {
    const suplements =
    [
        {
			section: 'Białko',
			Title: 'Białko',
			Description:
				'Odżywka białkowa wyróżnia się jedną z najwyższych wartości odżywczych w porównaniu do innych źródeł białka, dzięki bogatemu aminogramowi, w tym obecności aminokwasów rozgałęzionych (BCAA). Warto łączyć ją z innymi źródłami białka, aby uzyskać różnorodny profil aminokwasów w diecie. Dodatkowo, białko ma właściwości prozdrowotne – aminokwasy tworzą większe peptydy, takie jak immunoglobulina i laktoferyna, które wspierają funkcjonowanie układu odpornościowego.Na większości produktów widnieje napis „whey”. Whey, czyli serwatka, to produkt uboczny powstający przy produkcji sera. Serwatka jest poddawana ultrafiltracji, która oddziela białko od tłuszczu i laktozy, a następnie zostaje sproszkowana, tworząc koncentrat białka serwatkowego, znany jako WPC 80. Oznaczenie "80" wskazuje, że produkt zawiera około 80% białka na 100 g proszku.',
			ImageUrl: gallery_protein,
            imageURL1: gallery_wph,
			imageURL2: gallery_wpi,
			imageURL3: gallery_wpc,
			Description2:
				'Odpowiednie dawkowanie białka serwatkowego WPH jest istotne, ponieważ jego nadmiar może zaburzać osiąganie zamierzonych efektów. Przekroczenie dziennego zapotrzebowania na białko nie sprzyja przyrostowi masy mięśniowej ani odchudzaniu, a nawet może prowadzić do zwiększenia tkanki tłuszczowej. Określenie właściwej dawki jest trudne, ponieważ zależy od intensywności ćwiczeń oraz od wieku, masy ciała, stanu zdrowia, stylu życia i diety danej osoby. Dzienne zapotrzebowanie na białko dla zdrowego, przeciętnie aktywnego dorosłego wynosi około 0,8 g na każdy kilogram masy ciała, co można łatwo uzyskać z codziennej diety. Jednakże, wraz ze wzrostem intensywności aktywności fizycznej, zapotrzebowanie na białko również wzrasta. Osoby regularnie uprawiające sport mogą potrzebować od 1 do nawet 2 g białka na kilogram masy ciała dziennie.',
			Description3:
				'Oprócz koncentratu, na rynku dostępne są również inne formy białka serwatkowego, takie jak izolat i hydrolizat. Charakteryzują się one niższą zawartością tłuszczu, co może być korzystne dla osób na restrykcyjnej diecie redukcyjnej. Jednak dodatkowe procesy, którym poddawana jest serwatka, mogą prowadzić do denaturacji aminokwasów, przez co tracą one część swoich właściwości zdrowotnych. Mniejsza ilość tłuszczu często wpływa również na gorszy smak i konsystencję. Jeśli po spożyciu koncentratu odczuwasz dyskomfort trawienny, warto rozważyć izolat, szczególnie jeśli masz nietolerancję laktozy.',
		},
        {
			section: 'Kreatyna',
			Title: 'Kreatyna',
			Description:
				'Kreatyna, czyli kwas metyloguanidynooctowy, to organiczna substancja chemiczna, gromadzona głównie w mięśniach w formie fosfokreatyny (około 66%) i wolnej kreatyny (około 33%), w sumie około 120-140 g w organizmie człowieka. Jest niezbędna do skurczów mięśni. Każdego dnia organizm traci 1-2% kreatyny, wydalając ją jako kreatyninę. Kreatynina naturalnie występuje w organizmie, a jej produkcja rozpoczyna się w wątrobie. Następnie w postaci fosforanu trafia do mięśni, gdzie jest magazynowana. Jej poziom w organizmie nie jest stały, co może odzwierciedlać ogólny stan zdrowia. Kreatynina jest również filtrowana przez nerki, co pozwala na ocenę ich wydolności oraz efektywności funkcjonowania. Suplementacja kreatyny wskazana jest dla osób trenujących oraz bardzo aktywnych fizycznie. Oczywiście kreatynę można pozyskać z pożywienia, jednakże dieta redukcyjna czy wegetariańska, czy wegańska może utrudnić przyswojenie jej w odpowiednich ilościach. W suplementach diety kreatyna występuje w różnych formach, które charakteryzują się różną zawartością czystej kreatyny. Najczęściej stosowany i najszerzej dostępny jest monohydrat i jabłczan.',
			ImageUrl: gallery_creatina,
            imageURL1: null,
			imageURL2: null,
			imageURL3: null,
			Description2:
				'Dawka kreatyny zależy od treningu, wieku, płci i masy mięśniowej. Choć informacje na temat dawkowania bywają sprzeczne, badania wskazują, że efekty można osiągnąć już przy dawce 3-5 g dziennie, zależnie od płci. Kreatynę można przyjmować przed lub po treningu, w zależności od preferencji, ponieważ czas jej suplementacji wpływa na indywidualne odczucia siły. Niektórzy wybierają dodatkową dawkę rano lub przed snem, aby wspomóc regenerację. Najlepiej przetestować różne pory przyjmowania, by dopasować je do swoich potrzeb.',
			Description3:
				'Monohydrat kreatyny, złożony głównie z kreatyny i wody, jest uznawany za najlepszą formę tego związku. Jest to również najdokładniej przebadany suplement, co minimalizuje ryzyko wystąpienia skutków ubocznych podczas jego stosowania. Suplementacja monohydratem wspomaga przyrost masy mięśniowej oraz zwiększa siłę mięśni. Regularne stosowanie kreatyny przyczynia się także do szybszej regeneracji po treningu i wspiera procesy anaboliczne, dlatego jest polecany osobom pracującym nad budową masy mięśniowej i mającym trudności z jej przyrostem. Jabłczan kreatyny nie jest tak czystą formą jak monohydrat, ponieważ powstaje z połączenia kreatyny z kwasem jabłkowym w proporcji 1:3. Jego istotną zaletą jest brak efektu "podlewania wodą", co jednak oznacza, że nie prowadzi do takiego wzrostu objętości mięśni jak monohydrat. Ta forma kreatyny wspiera zwiększenie siły i poprawę wytrzymałości, a także jest doskonałym wyborem podczas redukcji masy ciała.',
		},
        {
			section: 'Bcaa',
			Title: 'Bcaa',
			Description:
				'BCAA (ang. Branched-Chain Amino Acids) to grupa trzech egzogennych aminokwasów o rozgałęzionych łańcuchach bocznych: leucyny, izoleucyny i waliny. Są one kluczowe dla syntezy białek mięśniowych oraz stanowią około 35% aminokwasów w tkance mięśniowej. Ponieważ organizm ludzki nie jest w stanie ich samodzielnie syntetyzować, muszą być dostarczane z pożywieniem lub suplementami.',
			ImageUrl: gallery_bcaa,
            imageURL1: null,
			imageURL2: null,
			imageURL3: null,
			Description2:
				'Optymalne dawkowanie BCAA zależy od indywidualnych potrzeb, masy ciała oraz intensywności aktywności fizycznej. Ogólne zalecenia sugerują spożycie od 5 do 20 gramów BCAA dziennie, podzielone na kilka porcji. Często stosuje się dawki około 5-10 gramów przed i po treningu, aby wspierać syntezę białek i regenerację mięśni. Warto jednak dostosować dawkowanie do własnych potrzeb i konsultować je z dietetykiem lub specjalistą ds. suplementacji.',
			Description3:
				'Suplementacja BCAA przynosi szereg korzyści, zwłaszcza dla osób aktywnych fizycznie: Redukcja zmęczenia podczas treningu: BCAA mogą obniżać poziom serotoniny w mózgu, co przekłada się na zmniejszenie odczuwanego zmęczenia podczas wysiłku fizycznego. Ochrona mięśni przed katabolizmem: Spożycie BCAA przed treningiem może chronić tkankę mięśniową przed rozpadem, szczególnie podczas intensywnych ćwiczeń wytrzymałościowych. Przyspieszenie regeneracji: BCAA wspierają procesy naprawcze w mięśniach po wysiłku, co może skrócić czas potrzebny na regenerację i zmniejszyć bolesność mięśniową. Wspomaganie syntezy białek: Leucyna, jeden z aminokwasów BCAA, odgrywa kluczową rolę w inicjowaniu procesu syntezy białek mięśniowych, co sprzyja budowie masy mięśniowej. Warto jednak pamiętać, że korzyści z suplementacji BCAA są najbardziej widoczne u osób, które nie dostarczają wystarczającej ilości tych aminokwasów z diety. Osoby spożywające odpowiednią ilość białka mogą nie odczuć znaczących efektów dodatkowej suplementacji BCAA.',
		},
        {
			section: 'Witamina_C',
			Title: 'Witamina C',
			Description:
				'Witamina C, znana również jako kwas askorbinowy, jest rozpuszczalnym w wodzie związkiem o silnych właściwościach antyoksydacyjnych. Odgrywa kluczową rolę w wielu procesach metabolicznych, w tym w syntezie kolagenu, który jest niezbędny dla utrzymania zdrowia skóry, naczyń krwionośnych, kości i chrząstek. Ponadto, witamina C wspomaga wchłanianie żelaza niehemowego z pożywienia oraz uczestniczy w biosyntezie neuroprzekaźników, takich jak noradrenalina. Ze względu na fakt, że organizm ludzki nie jest w stanie syntetyzować witaminy C, musi być ona dostarczana z dietą.',
			ImageUrl: gallery_creatina,
            imageURL1: null,
			imageURL2: null,
			imageURL3: null,
			Description2:
				'Zalecane dzienne spożycie (RDA) witaminy C różni się w zależności od wieku, płci i stanu fizjologicznego: Dorośli mężczyźni: 90 mg/dzień, Dorosłe kobiety: 75 mg/dzień, Kobiety w ciąży: 85 mg/dzień, Kobiety karmiące piersią: 120 mg/dzień. Palenie tytoniu zwiększa zapotrzebowanie na witaminę C o dodatkowe 35 mg/dzień ze względu na zwiększony stres oksydacyjny. Chociaż witamina C jest ogólnie bezpieczna, spożycie powyżej tolerowanego górnego poziomu spożycia (UL) wynoszącego 2000 mg/dzień może prowadzić do skutków ubocznych, takich jak biegunka, nudności i skurcze żołądka.',
			Description3:
				'Odpowiedni poziom witaminy C w organizmie przynosi liczne korzyści zdrowotne: Wzmocnienie układu odpornościowego: Witamina C wspiera funkcje komórek odpornościowych, co może skracać czas trwania infekcji i łagodzić ich objawy. Działanie antyoksydacyjne: Neutralizuje wolne rodniki, chroniąc komórki przed stresem oksydacyjnym, który jest związany z procesami starzenia i rozwojem chorób przewlekłych. Synteza kolagenu: Niezbędna do produkcji kolagenu, co wpływa na zdrowie skóry, gojenie się ran oraz utrzymanie integralności naczyń krwionośnych. Wchłanianie żelaza: Zwiększa biodostępność żelaza niehemowego z diety, co jest istotne w zapobieganiu anemii z niedoboru żelaza. Ze względu na jej kluczowe funkcje i korzyści zdrowotne, ważne jest regularne spożywanie pokarmów bogatych w witaminę C, takich jak owoce cytrusowe, papryka, truskawki, brokuły i kiwi. W przypadkach zwiększonego zapotrzebowania lub niedoborów, suplementacja może być rozważana po konsultacji z lekarzem.',
		},
        {
			section: 'Witamina_D',
			Title: 'Witamina D',
			Description:
				'Witamina D to grupa rozpuszczalnych w tłuszczach prohormonów, z których najważniejsze dla człowieka są witamina D2 (ergokalcyferol) i D3 (cholekalcyferol). Cholekalcyferol jest syntetyzowany w skórze pod wpływem promieniowania UVB, natomiast ergokalcyferol pochodzi głównie z diety. Witamina D odgrywa kluczową rolę w regulacji gospodarki wapniowo-fosforanowej, co jest niezbędne dla utrzymania zdrowych kości i zębów. Ponadto wpływa na funkcjonowanie układu odpornościowego, nerwowego oraz mięśniowego.',
			ImageUrl: gallery_creatina,
            imageURL1: null,
			imageURL2: null,
			imageURL3: null,
			Description2:
				'Zalecane dzienne spożycie witaminy D różni się w zależności od wieku, stanu zdrowia oraz ekspozycji na słońce. Według wytycznych Polskiego Instytutu Żywności i Żywienia, dzienne zapotrzebowanie wynosi: Niemowlęta (0–12 miesięcy): 400–600 IU (10–15 µg), Dzieci i młodzież (1–18 lat): 600–1000 IU (15–25 µg), Dorośli (19–65 lat): 800–2000 IU (20–50 µg), Seniorzy (>65 lat): 800–2000 IU (20–50 µg), Kobiety w ciąży i karmiące: 1500–2000 IU (37,5–50 µg) Wartości te mogą się różnić w zależności od indywidualnych potrzeb oraz poziomu witaminy D w organizmie. W przypadku niedoborów lub zwiększonego zapotrzebowania, dawki mogą być wyższe, jednak powinny być ustalane przez lekarza.',
			Description3:
				'Odpowiedni poziom witaminy D w organizmie przynosi liczne korzyści zdrowotne: Zdrowie kości i zębów: Witamina D wspomaga wchłanianie wapnia i fosforu, co jest kluczowe dla mineralizacji kości i zębów. Jej niedobór może prowadzić do krzywicy u dzieci oraz osteomalacji i osteoporozy u dorosłych.        Układ odpornościowy: Witamina D moduluje odpowiedź immunologiczną, co może zmniejszać ryzyko infekcji oraz chorób autoimmunologicznych. Funkcje mięśniowe: Wpływa na funkcjonowanie mięśni, a jej odpowiedni poziom może poprawiać siłę mięśniową oraz zmniejszać ryzyko upadków u osób starszych. Zdrowie psychiczne: Badania sugerują związek między niedoborem witaminy D a zwiększonym ryzykiem depresji oraz zaburzeń nastroju. Ze względu na ograniczoną syntezę skórną w okresie jesienno-zimowym oraz niską zawartość witaminy D w diecie, suplementacja jest często niezbędna dla utrzymania jej optymalnego poziomu w organizmie.',
		},
        {
			section: 'Pwr',
			Title: 'Pwr',
			Description:
				'.....',
			ImageUrl: gallery_creatina,
            imageURL1: null,
			imageURL2: null,
			imageURL3: null,
			Description2:
				'.......',
			Description3:
				'...',
		},
        {
			section: 'Kofeina',
			Title: 'Kofeina',
			Description:
				'Kofeina jest naturalnym stymulantem ośrodkowego układu nerwowego (OUN) należącym do grupy metyloksantyn. Uznawana jest za najczęściej stosowany środek psychoaktywny na świecie. Wykorzystywana jest w codziennych napojach, które pomagają zwalczać objawy zmęczenia psychicznego i fizycznego, w tym kawie, herbacie i czekoladzie. Kofeina występuje również w wielu lekach oraz jako dodatek do napojów gazowanych (np. Pepsi, Coca-Cola) i energetycznych. Głównym celem jej spożycia jest łagodzenie zmęczenia i senności, ale ma także wiele innych zastosowań. Kofeina nie tylko zmniejsza uczucie zmęczenia, ale również ma właściwości ergogeniczne, co oznacza, że poprawia wydolność organizmu podczas treningu.',
			ImageUrl: gallery_creatina,
            imageURL1: null,
			imageURL2: null,
			imageURL3: null,
			Description2:
				'Aby zredukować zmęczenie, wystarczą dawki 1-3 mg na każdy kilogram masy ciała dziennie. W celu zwiększenia siły maksymalnej, wytrzymałości siłowej, poprawy samopoczucia oraz redukcji odczuwanej trudności treningu zaleca się spożycie 4-6 mg na kilogram masy ciała około 60 minut przed treningiem. Wyższe dawki mogą prowadzić do skutków ubocznych, takich jak bezsenność, niepokój, nudności, wymioty, nadmierne pocenie się czy palpitacje serca.',
			Description3:
				'Kofeina pomaga zwalczać zmęczenie psychiczne i fizyczne, co czyni ją popularnym wyborem zarówno w codziennym życiu, jak i w sporcie. Jej właściwości ergogeniczne mogą wspierać maksymalizację osiągów podczas treningów, zwiększając siłę i wytrzymałość oraz poprawiając samopoczucie. Sportowcy mogą rozważyć suplementację kofeiny w formie przedtreningówek lub tabletek, aby poprawić efektywność swoich treningów i zwiększyć wydolność organizmu. Dzięki precyzyjnemu dawkowaniu kofeina może stać się skutecznym narzędziem wspierającym zarówno amatorów, jak i profesjonalnych sportowców.',
		},
        {
			section: 'Cytrulina',
			Title: 'Cytrulina',
			Description:
				'Cytrulina to związek chemiczny klasyfikowany jako alfa-aminokwas, co oznacza, że posiada grupę aminową przy pierwszym atomie węgla w łańcuchu węglowodorowym, połączonym z grupą karboksylową. Jak każdy aminokwas pełniący funkcje biologiczne w organizmie ludzkim, występuje w formie L-aminokwasu. Jest to aminokwas endogenny, co oznacza, że może być samodzielnie syntezowany przez komórki naszego ciała. Cytrulina znajduje się naturalnie w wielu produktach spożywczych, takich jak arbuzy, ogórki czy dynie, ale jej suplementacja zyskała popularność ze względu na szerokie spektrum korzyści zdrowotnych i sportowych. Poza poprawą wyników sportowych, cytrulina znalazła zastosowanie w terapii takich schorzeń jak: Dysfunkcja erekcji, Demencja, Przewlekłe zmęczenie, Nadciśnienie, Cukrzyca, Choroby serca.',
			ImageUrl: gallery_creatina,
            imageURL1: null,
			imageURL2: null,
			imageURL3: null,
			Description2:
				'Cytrulina wykazuje swoje najlepsze efekty, gdy jest stosowana w odpowiednich dawkach przed treningiem. Najczęściej zaleca się przyjmowanie 6-8 g jabłczanu cytruliny około 30-60 minut przed wysiłkiem fizycznym. W przypadku stosowania L-cytruliny dawka może być nieco niższa, ale efektywność będzie zależeć od indywidualnych potrzeb organizmu. Na rynku znajdziemy preparaty zawierające cytrulinę w dwóch głównych formach: L-cytrulina – czysta forma aminokwasu, lepiej wspierająca krążenie i pompy mięśniowe, Jabłczan cytruliny – połączenie cytruliny z kwasem jabłkowym w stosunku 2:1, które dodatkowo wspiera produkcję energii w cyklu Krebsa.',
			Description3:
				'Cytrulina jest szczególnie ceniona w sporcie i kulturystyce ze względu na jej zdolność do zwiększania poziomu tlenku azotu (NO) w organizmie. Zwiększona produkcja NO powoduje rozszerzenie naczyń krwionośnych, co poprawia ukrwienie mięśni i zwiększa uczucie tzw. "pompy mięśniowej". Jest to kluczowe dla kulturystów i osób dążących do maksymalizacji efektów treningu siłowego. Dodatkowe korzyści wynikające z suplementacji cytruliną: Poprawa produkcji i wykorzystania energii ATP, co umożliwia bardziej intensywne treningi, Przyspieszenie regeneracji mięśni po wysiłku, Redukcja obolałości mięśni (DOMS) Zwiększenie siły i masy mięśniowej przy regularnym stosowaniu,',
		},

    ];

    const filteredSuplements = click ? suplements.filter((suplement) => suplement.section === click) : suplements;



	return <div>
    {filteredSuplements.map((suplement, index) => (
        <SuplementSection key={index} sectionTitle={suplement.section}>
            <SuplementComponent
                key={index}
                title={suplement.Title}
                description={suplement.Description}
                description2={suplement.Description2}
                description3={suplement.Description3}
                imageUrl={suplement.ImageUrl}
                imageURL1={suplement.imageURL1}
                imageURL2={suplement.imageURL2}
                imageURL3={suplement.imageURL3}
            />
        </SuplementSection>
    ))}
</div>
};

export default SuplementsList;
