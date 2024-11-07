import React from 'react';
import DescriptionMoreFacts from './DescriptionMoreFacts';
import SectionMoreFacts from './SectionMoreFacts';
import medal1 from '../../assets/medal1.svg';
import heart1 from '../../assets/heart1.svg';
import kawa from '../../assets/kawa.webp';
import jedzenie_posilku from '../../assets/jedzenie_posilku.webp';
import soja from '../../assets/soja.webp';
import nie_wolno_jesc from '../../assets/nie_wolno_jesc.webp';
import odzywianie_fakt from '../../assets/odzywianie_fakt.webp';
import genetyka_fakt from '../../assets/genetyka_fakt.webp';
import cwiczenia_fakt from '../../assets/cwiczenia_fakt.webp';
import bialko_roslinne_fakt from '../../assets/bialko_roslinne_fakt.webp';
import sen_fakt from '../../assets/sen_fakt.webp';


const ListMoreFacts_Myths = ({ click }) => {
	const factsmyths = [
		{
			title: 'Mit',
			subTitle: 'KAWA WYPŁUKUJE MAGNEZ',
			IconUrl: medal1,
			IconUrl1: kawa,
			description2:
				'Niemniej jednak warto zwrócić uwagę na to, że nadmierne spożycie kawy, przekraczające zalecane ilości, może prowadzić do różnych problemów zdrowotnych, takich jak lęk, bezsenność czy podwyższone ciśnienie krwi. Chociaż istnieją informacje sugerujące, że kofeina może wpływać na wchłanianie niektórych minerałów, w tym wapnia, brak jest dowodów potwierdzających, że kawa prowadzi do niedoboru magnezu. W ramach zdrowego stylu życia istotne jest, aby dbać o umiar oraz zrównoważoną dietę, bogatą w składniki odżywcze, w tym magnez, który można znaleźć w orzechach, nasionach, zielonych warzywach liściastych oraz produktach pełnoziarnistych. Osoby wrażliwe na działanie kofeiny powinny szczególnie monitorować swoje spożycie, aby uniknąć ewentualnych skutków ubocznych. Dobrym pomysłem jest również picie kawy z dodatkiem zdrowych tłuszczów, takich jak olej kokosowy lub masło, co może wspierać wchłanianie niektórych składników odżywczych. Ponadto, każdy powinien dostosować swoje spożycie kawy do własnych potrzeb, biorąc pod uwagę indywidualną tolerancję na kofeinę.',
			description3:
				'Umiarkowane spożycie kawy, wynoszące 3-4 filiżanki dziennie, nie tylko nie wpływa negatywnie na poziom magnezu w organizmie, ale może także przynieść szereg korzyści zdrowotnych. Kawa, szczególnie wysokiej jakości, jest źródłem polifenoli, które działają jako przeciwutleniacze i mogą korzystnie wpływać na zdrowie serca oraz redukować ryzyko wielu chorób przewlekłych. Polifenole obecne w kawie mogą poprawiać funkcję naczyń krwionośnych i zmniejszać stan zapalny w organizmie.',
			description: 'opis na główną stornę',
			note: 'H. E. H. B. V. et al. (2016). Coffee Consumption and Health: A Review of Recent Human Research. Nutrition Reviews, 74(4), 258-274.',
			note2: '',
			note3: '',
		},
		{
			title: 'Mit',
			subTitle: 'PO TRENINGU MAMY GODZINE NA ZJEDZENIE POSIŁKU ',
			IconUrl: medal1,
			IconUrl1: jedzenie_posilku,
			description2:
				'Choć spożycie białka po treningu może przyspieszyć proces regeneracji, nie oznacza to, że opóźnienie posiłku o kilka godzin jest szkodliwe. Badania sugerują, że regularne spożywanie białka w ciągu całego dnia, a nie tylko tuż po treningu, może prowadzić do bardziej efektywnej syntezy białek mięśniowych. Dla sportowców istotne jest także monitorowanie całkowitej ilości przyjmowanych składników odżywczych, a nie tylko czasu ich spożycia. Przy właściwym bilansie kalorycznym oraz makroskładnikowym organizm ma możliwość skutecznego wykorzystania dostarczonych składników. Nie można zapominać o nawodnieniu, które odgrywa kluczową rolę w procesie regeneracji. Woda wspiera transport składników odżywczych oraz pomaga w eliminacji toksyn powstałych w wyniku intensywnego wysiłku. Dlatego utrzymanie odpowiedniego poziomu nawodnienia zarówno w trakcie treningu, jak i po nim jest równie ważne, co dobór odpowiednich posiłków.',
			description3:
				'Odpowiednie odżywianie po treningu ma kluczowe znaczenie dla skutecznej regeneracji i budowy mięśni, ale warto zauważyć, że nie istnieje jeden uniwersalny czas na spożycie posiłku. Czas, w którym można przyjąć składniki odżywcze, jest znacznie dłuższy, niż wielu osobom się wydaje. Oprócz białek istotne jest również, aby dostarczyć odpowiednią ilość węglowodanów, które są niezbędne do uzupełnienia zapasów glikogenu w mięśniach. Należy pamiętać, że inne składniki odżywcze, takie jak kwasy tłuszczowe, witaminy i minerały, również mają ważną rolę w procesie regeneracyjnym.',
			description: 'opis na główną stornę',
			note: 'Phillips, S. M., & Van Loon, L. J. C. (2011). Dietary protein for athletes: From requirements to metabolic advantage. Applied Physiology, Nutrition, and Metabolism, 36(5), 647-663.',
			note2: '',
			note3: '',
		},
		{
			title: 'Mit',
			subTitle: 'PO 18:00 NIE WOLNO JEŚĆ',
			IconUrl: medal1,
			IconUrl1: nie_wolno_jesc,
			description2:
				'Dla osób trenujących po południu lub wieczorem kolacja może być istotnym elementem regeneracji, dostarczającym energii potrzebnej do odbudowy mięśni. Ponadto, trzymanie się zbyt restrykcyjnych zasad dotyczących godzin jedzenia może prowadzić do zaburzeń nawyków żywieniowych i nadmiernego głodu, co paradoksalnie może sprzyjać nadmiernemu spożywaniu kalorii później w ciągu dnia lub nawet w nocy. Choć kobiety mają tendencję do mniejszej tolerancji cukru, a spożywanie słodkich przekąsek w godzinach porannych może być dla nich korzystniejsze, to nadal kluczowa jest równowaga i dostosowanie diety do indywidualnych potrzeb i stylu życia. Elastyczne podejście do pór posiłków, oparte na słuchaniu własnego organizmu i uwzględnianiu własnego rozkładu dnia, może prowadzić do zdrowszych nawyków żywieniowych i lepszego samopoczucia.',
			description3:
				'Mit o konieczności unikania jedzenia po godzinie 18:00 jest szeroko rozpowszechniony, ale nie ma naukowych podstaw. To, czy jedzenie wieczorem sprzyja przyrostowi masy ciała, zależy bardziej od całkowitego bilansu kalorycznego niż od pory spożywania posiłków. Badania wykazują, że kluczowy jest całkowity bilans energetyczny i odpowiedni rozkład makroskładników w ciągu dnia, a nie godzina, o której spożywamy posiłki. Co więcej, niektóre osoby mogą czerpać korzyści z jedzenia wieczorem, ponieważ posiłki bogate w węglowodany mogą poprawiać jakość snu dzięki wpływowi na produkcję serotoniny i melatoniny.',
			description: 'opis na główną stornę',
			note: 'Garaulet M, Gómez-Abellán P. Timing of food intake and obesity: A novel association. Physiol Behav. 2014;134:44-50.',
			note2:
				' Jakubowicz D, Barnea M, Wainstein J, Froy O. High Caloric Intake at Breakfast vs. Dinner Differentially Influences Weight Loss in Overweight and Obese Women. Obesity. 2013;21(12):2504-2512.',
			note3: '',
		},
		{
			title: 'Mit',
			subTitle: 'SOJA ZABURZA GOSPODARKĘ HORMONALNĄ MĘŻCZYZN – MIT!',
			IconUrl: medal1,
			IconUrl1: soja,
			description2:
				'Wyniki te są szczególnie ważne dla sportowców oraz mężczyzn dbających o kondycję, którzy sięgają po białko sojowe jako alternatywę dla białka serwatkowego. Białko sojowe, będące źródłem wszystkich niezbędnych aminokwasów, jest pełnowartościowym składnikiem diety, co czyni je odpowiednim wyborem zarówno dla osób aktywnych fizycznie, jak i dla tych, którzy chcą utrzymać zdrową dietę. Wyniki analizy wskazują, że nie ma powodu, by unikać izoflawonów czy białka sojowego z obawy przed negatywnym wpływem na poziom testosteronu. Dodatkowo regularne spożywanie produktów sojowych może wspierać zdrowie, np. układ sercowo-naczyniowy, oraz potencjalnie działać przeciwnowotworowo. Izoflawony, jako naturalne antyoksydanty, pomagają organizmowi neutralizować wolne rodniki, co może wspierać zdrowie w dłuższej perspektywie.',
			description3:
				'Badania zawarte w tej meta-analizie dostarczają silnych dowodów na to, że spożycie izoflawonów oraz białka sojowego, często obecnych w dietach wegetariańskich i wegańskich, jest bezpieczne dla męskiego zdrowia hormonalnego. Obawy o możliwe działanie estrogenopodobne tych substancji, które mogłoby naruszyć równowagę hormonalną i obniżyć poziom testosteronu u mężczyzn, okazały się nieuzasadnione. Nawet przy długotrwałym spożywaniu – badania obejmowały okres do 4 lat – nie wykazano znaczących zmian w poziomie testosteronu, SHBG (globuliny wiążącej hormony płciowe) ani innych hormonów męskich.',
			description: 'opis na główną stornę',
			note: 'Hamilton-Reeves JM, Vazquez G, Duval SJ, Phipps WR, Kurzer MS, Messina MJ. Clinical studies show no effects of soy protein or isoflavones on reproductive hormones in men: results of a meta-analysis. Fertility and Sterility. 2010;94(3):997-1007.',
			note2: '',
			note3: '',
		},
		{
			title: 'Fakt',
			subTitle: 'Odżywianie po treningu jest kluczowe dla regeneracji',
			IconUrl: heart1,
			IconUrl1: odzywianie_fakt,
			description2: 'Badania sugerują, że odpowiednie odżywianie po treningu jest kluczowe dla optymalnej regeneracji mięśni oraz ich wzrostu. Spożycie posiłku bogatego w białko i węglowodany w ciągu 30 minut do 2 godzin po wysiłku może przyspieszyć regenerację uszkodzonych włókien mięśniowych, co przyczynia się do szybszego powrotu do pełni sił. Węglowodany pomagają w uzupełnieniu zapasów glikogenu w mięśniach, który został wykorzystany podczas treningu. Z kolei białko dostarcza niezbędnych aminokwasów potrzebnych do odbudowy mięśni. Badania sugerują również, że dodatek zdrowych tłuszczów, takich jak omega-3, może wspierać regenerację poprzez zmniejszenie stanu zapalnego w organizmie. ',
			description3: ' Nie należy zapominać o nawodnieniu, które również jest kluczowe dla skutecznej regeneracji. Spożycie płynów, w szczególności wody lub napojów elektrolitowych, wspomaga usuwanie toksyn z organizmu oraz transport składników odżywczych do komórek mięśniowych. Według badania przeprowadzonego przez International Society of Sports Nutrition, synteza białek mięśniowych jest szczególnie skuteczna, jeśli spożycie białka wynosi od 20 do 40 gramów po treningu (Kerksick et al., 2017). Prawidłowe odżywianie po treningu może znacząco poprawić efektywność budowy masy mięśniowej oraz regenerację organizmu.',
			note: 'Kerksick, C. M., et al. (2017). International Society of Sports Nutrition Position Stand: Nutrient Timing. Journal of the International Society of Sports Nutrition, 14(33).',
			note2: '',
			note3: '',
		},
		{
			title: 'Fakt',
			subTitle: 'Genetyka wpływa na reakcję organizmu na trening siłowy',
			IconUrl: heart1,
			IconUrl1: genetyka_fakt,
			description2: 'Genetyka odgrywa ogromną rolę w zakresie adaptacji organizmu do treningu siłowego. Nie wszyscy ludzie reagują w ten sam sposób na ten sam program treningowy, co wynika z różnic genetycznych w budowie mięśni i metabolizmie. Pewne warianty genetyczne mogą wpłynąć na to, czy dana osoba ma większy potencjał do rozwijania masy mięśniowej, siły lub wytrzymałości. Na przykład, badania wskazują, że gen ACTN3, który koduje białko związane z kurczliwością mięśni, jest szczególnie związany z predyspozycjami do sportów siłowych i szybkościowych.',
			description3: ' Osoby posiadające wariant R tego genu mają większą zdolność do szybkiego skurczu mięśni, co daje im przewagę w sportach takich jak sprint czy podnoszenie ciężarów. Z kolei osoby z wariantem X tego genu mogą wykazywać większą wytrzymałość mięśniową, co sprawdza się w sportach długodystansowych. To tłumaczy, dlaczego niektóre osoby rozwijają masę mięśniową znacznie szybciej niż inni, mimo stosowania podobnych programów treningowych i dietetycznych. Badania dowodzą, że indywidualne różnice w reakcji na trening są w około 40-60% zależne od genetyki (Bouchard et al., 2011). Choć genetyka odgrywa dużą rolę, odpowiednie odżywianie i regularny trening mogą pomóc każdemu osiągnąć optymalne rezultaty, w granicach swoich możliwości genetycznych.',
			note: ' Bouchard, C., et al. (2011). The Genomic and Molecular Basis of Physical Performance. Human Kinetics.',
			note2: '',
			note3: '',
		},
		{
			title: 'Fakt',
			subTitle: ' Zakres ruchu wpływa na efektywność ćwiczeń siłowych',
			IconUrl: heart1,
			IconUrl1: cwiczenia_fakt,
			description2: 'Prawidłowy zakres ruchu (ang. Range of Motion, ROM) w ćwiczeniach siłowych jest kluczowy dla skutecznego rozwoju siły oraz masy mięśniowej. Badania wskazują, że wykonywanie ćwiczeń z pełnym zakresem ruchu może prowadzić do większych przyrostów siły oraz hipertrofii w porównaniu do skróconego ROM. Przykładem może być ćwiczenie przysiadu - przysiad wykonany z pełnym zakresem ruchu (aż do momentu, gdy uda są równoległe do podłoża lub niżej) angażuje więcej włókien mięśniowych niż przysiad wykonany do połowy. Pełny zakres ruchu pozwala na efektywniejsze rozciąganie mięśni, co stymuluje wzrost poprzez aktywację większej ilości jednostek motorycznych. Ponadto, badania pokazują, że trening z pełnym zakresem ruchu może poprawić mobilność stawów, co jest kluczowe dla zapobiegania kontuzjom. ',
			description3: 'Z kolei skrócony zakres ruchu może prowadzić do niepełnej aktywacji mięśni, co może ograniczać przyrosty siły oraz masy mięśniowej. W badaniu przeprowadzonym przez McMahon i wsp., osoby trenujące z pełnym zakresem ruchu doświadczyły większych przyrostów siły i masy mięśniowej niż osoby wykonujące ćwiczenia z ograniczonym ROM (McMahon et al., 2014). Regularne treningi z pełnym zakresem ruchu pomagają nie tylko w zwiększaniu siły, ale także w utrzymaniu zdrowia stawów i poprawie ogólnej mobilności.',
			note: 'McMahon, G. E., et al. (2014). Influence of Range of Motion on Muscle Strength and Hypertrophy in Resistance Training. Journal of Strength and Conditioning Research, 28(10), 2681-2688.',
			note2: '',
			note3: '',
		},
		{
			title: 'Fakt',
			subTitle: 'Spożycie białka roślinnego a efektywność budowy masy mięśniowej',
			IconUrl: heart1,
			IconUrl1: bialko_roslinne_fakt,
			description2: 'Białko jest niezbędnym składnikiem odżywczym, który wspiera budowę i regenerację mięśni, a jego źródła mogą być zarówno zwierzęce, jak i roślinne. Coraz więcej badań wskazuje, że białko roślinne może być równie skuteczne w budowie masy mięśniowej, co białko zwierzęce, pod warunkiem dostarczenia odpowiedniej ilości i różnorodności aminokwasów. Białka roślinne, takie jak soja, groszek, czy konopie, zawierają wszystkie niezbędne aminokwasy, choć w różnych proporcjach niż białka zwierzęce. Kluczem do efektywnego budowania masy mięśniowej na diecie roślinnej jest dbanie o różnorodność źródeł białka oraz dostarczenie odpowiedniej ilości leucyny, kluczowego aminokwasu odpowiedzialnego za stymulację syntezy białek mięśniowych.',
			description3: ' W badaniu przeprowadzonym przez Joy i wsp., osoby, które spożywały białko roślinne (sojowe), miały porównywalne przyrosty masy mięśniowej i siły do tych, które spożywały białko serwatkowe (Joy et al., 2013). Ważne jest również, aby uwzględniać całkowite zapotrzebowanie na białko i spożywać je w równomiernych porcjach w ciągu dnia. Białko roślinne jest również korzystne dla zdrowia sercowo-naczyniowego, co jest dodatkowym atutem w porównaniu do niektórych białek zwierzęcych.',
			note: 'Joy, J. M., et al. (2013). The Effects of Soy and Whey Protein Supplementation on Acute Hormonal Responses to Resistance Exercise in Men. Journal of the American College of Nutrition, 32(1), 66-74.',
			note2: '',
			note3: '',
		},
		{
			title: 'Fakt',
			subTitle: ' Odpowiednia ilość snu wspiera efektywność treningu siłowego',
			IconUrl: heart1,
			IconUrl1: sen_fakt,
			description2: 'Sen odgrywa kluczową rolę w regeneracji i adaptacji organizmu do treningu siłowego. Podczas snu organizm przeprowadza szereg procesów regeneracyjnych, w tym syntezę białek mięśniowych oraz wydzielanie hormonów anabolicznych, takich jak testosteron i hormon wzrostu. Badania sugerują, że osoby, które śpią mniej niż 7 godzin na dobę, mogą mieć trudności z osiągnięciem optymalnych przyrostów masy mięśniowej i siły, ponieważ regeneracja mięśni jest w dużej mierze ograniczona.',
			description3: 'W jednym z badań przeprowadzonych przez Simpson i wsp., stwierdzono, że osoby, które regularnie spały 8 godzin na dobę, doświadczały lepszych efektów treningowych niż osoby, które spały tylko 5-6 godzin (Simpson et al., 2017). Niewystarczająca ilość snu może prowadzić do zwiększenia poziomu kortyzolu, hormonu stresu, który negatywnie wpływa na proces budowy mięśni i regeneracji. Dodatkowo, brak snu może obniżać poziom motywacji do treningu oraz zwiększać ryzyko kontuzji, ponieważ zmniejsza zdolność koncentracji i koordynacji. Sen jest zatem jednym z najważniejszych, ale często pomijanych, elementów skutecznego programu treningowego.',
			note: ' Simpson, N. S., et al. (2017). Sleep and Muscle Recovery: Endocrinological and Molecular Impacts. Journal of Sports Sciences, 35(20), 2006-2015.',
			note2: '',
			note3: '',
		},
	];

	const filteredfactsmyths = click
		? factsmyths.filter((factmyth) => factmyth.title === click)
		: factsmyths;

	const myths = filteredfactsmyths.filter(
		(factmyth) => factmyth.title === 'Mit'
	);
	const facts = filteredfactsmyths.filter(
		(factmyth) => factmyth.title === 'Fakt'
	);

	return (
		<div>
			{myths.length > 0 && (
				<>
					<SectionMoreFacts sectionTitle='Mit' />
					{myths.map((factmyth, index) => (
						<div key={`mit-${index}`}>
							<div className='MoreMyths'>
								<div className='MoreMyths_left'>
									<img src={factmyth.IconUrl1} alt='' />
								</div>
								<div className='MoreMyths_right'>
									<img src={factmyth.IconUrl} alt='' />
									<h2 className='subTitle'>{factmyth.subTitle}</h2>
									<p>{factmyth.description3}</p>
									<p>{factmyth.description2}</p>
									<ul className='przypisy'>
										<li>{factmyth.note}</li>
										<li>{factmyth.note2}</li>
										<li>{factmyth.note3}</li>
									</ul>
								</div>
							</div>
						</div>
					))}
				</>
			)}
			{facts.length > 0 && (
				<>
					<SectionMoreFacts sectionTitle='Fakt' />
					{facts.map((factmyth, index) => (
						<div key={`fakt-${index}`}>
							<div className='MoreFacts'>
								<div className='MoreFacts_left'>
									<img src={factmyth.IconUrl} alt='' />
									<h2 className='subTitle'>{factmyth.subTitle}</h2>
									<p>{factmyth.description2}</p>
									<p>{factmyth.description3}</p>
									<ul className='przypisy'>
										<li>{factmyth.note}</li>
										<li>{factmyth.note2}</li>
										<li>{factmyth.note3}</li>
									</ul>
								</div>
								<div className='MoreFacts_right'>
									<img src={factmyth.IconUrl1} alt='' />
								</div>
							</div>
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default ListMoreFacts_Myths;
