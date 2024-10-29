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
			description2: 'Niemniej jednak warto zwrócić uwagę na to, że nadmierne spożycie kawy, przekraczające zalecane ilości, może prowadzić do różnych problemów zdrowotnych, takich jak lęk, bezsenność czy podwyższone ciśnienie krwi. Chociaż istnieją informacje sugerujące, że kofeina może wpływać na wchłanianie niektórych minerałów, w tym wapnia, brak jest dowodów potwierdzających, że kawa prowadzi do niedoboru magnezu. W ramach zdrowego stylu życia istotne jest, aby dbać o umiar oraz zrównoważoną dietę, bogatą w składniki odżywcze, w tym magnez, który można znaleźć w orzechach, nasionach, zielonych warzywach liściastych oraz produktach pełnoziarnistych. Osoby wrażliwe na działanie kofeiny powinny szczególnie monitorować swoje spożycie, aby uniknąć ewentualnych skutków ubocznych. Dobrym pomysłem jest również picie kawy z dodatkiem zdrowych tłuszczów, takich jak olej kokosowy lub masło, co może wspierać wchłanianie niektórych składników odżywczych. Ponadto, każdy powinien dostosować swoje spożycie kawy do własnych potrzeb, biorąc pod uwagę indywidualną tolerancję na kofeinę.',
			description3: 'Umiarkowane spożycie kawy, wynoszące 3-4 filiżanki dziennie, nie tylko nie wpływa negatywnie na poziom magnezu w organizmie, ale może także przynieść szereg korzyści zdrowotnych. Kawa, szczególnie wysokiej jakości, jest źródłem polifenoli, które działają jako przeciwutleniacze i mogą korzystnie wpływać na zdrowie serca oraz redukować ryzyko wielu chorób przewlekłych. Polifenole obecne w kawie mogą poprawiać funkcję naczyń krwionośnych i zmniejszać stan zapalny w organizmie.',
			description: 'opis na główną stornę',
			note: 'H. E. H. B. V. et al. (2016). Coffee Consumption and Health: A Review of Recent Human Research. Nutrition Reviews, 74(4), 258-274.',
		},
		{
			title: 'Mit',
			subTitle: 'PO TRENINGU MAMY GODZINE NA ZJEDZENIE POSIŁKU ',
			IconUrl: medal,
			description2: 'Choć spożycie białka po treningu może przyspieszyć proces regeneracji, nie oznacza to, że opóźnienie posiłku o kilka godzin jest szkodliwe. Badania sugerują, że regularne spożywanie białka w ciągu całego dnia, a nie tylko tuż po treningu, może prowadzić do bardziej efektywnej syntezy białek mięśniowych. Dla sportowców istotne jest także monitorowanie całkowitej ilości przyjmowanych składników odżywczych, a nie tylko czasu ich spożycia. Przy właściwym bilansie kalorycznym oraz makroskładnikowym organizm ma możliwość skutecznego wykorzystania dostarczonych składników. Nie można zapominać o nawodnieniu, które odgrywa kluczową rolę w procesie regeneracji. Woda wspiera transport składników odżywczych oraz pomaga w eliminacji toksyn powstałych w wyniku intensywnego wysiłku. Dlatego utrzymanie odpowiedniego poziomu nawodnienia zarówno w trakcie treningu, jak i po nim jest równie ważne, co dobór odpowiednich posiłków.',
			description3: 'Odpowiednie odżywianie po treningu ma kluczowe znaczenie dla skutecznej regeneracji i budowy mięśni, ale warto zauważyć, że nie istnieje jeden uniwersalny czas na spożycie posiłku. Czas, w którym można przyjąć składniki odżywcze, jest znacznie dłuższy, niż wielu osobom się wydaje. Oprócz białek istotne jest również, aby dostarczyć odpowiednią ilość węglowodanów, które są niezbędne do uzupełnienia zapasów glikogenu w mięśniach. Należy pamiętać, że inne składniki odżywcze, takie jak kwasy tłuszczowe, witaminy i minerały, również mają ważną rolę w procesie regeneracyjnym.',
			description: 'opis na główną stornę',
			note: 'Phillips, S. M., & Van Loon, L. J. C. (2011). Dietary protein for athletes: From requirements to metabolic advantage. Applied Physiology, Nutrition, and Metabolism, 36(5), 647-663.',
			note2: '',
			note3: '',
		},
		{
			title: 'Mit',
			subTitle: 'PO 18:00 NIE WOLNO JEŚĆ',
			IconUrl: medal,
			description2: 'Dla osób trenujących po południu lub wieczorem kolacja może być istotnym elementem regeneracji, dostarczającym energii potrzebnej do odbudowy mięśni. Ponadto, trzymanie się zbyt restrykcyjnych zasad dotyczących godzin jedzenia może prowadzić do zaburzeń nawyków żywieniowych i nadmiernego głodu, co paradoksalnie może sprzyjać nadmiernemu spożywaniu kalorii później w ciągu dnia lub nawet w nocy. Choć kobiety mają tendencję do mniejszej tolerancji cukru, a spożywanie słodkich przekąsek w godzinach porannych może być dla nich korzystniejsze, to nadal kluczowa jest równowaga i dostosowanie diety do indywidualnych potrzeb i stylu życia. Elastyczne podejście do pór posiłków, oparte na słuchaniu własnego organizmu i uwzględnianiu własnego rozkładu dnia, może prowadzić do zdrowszych nawyków żywieniowych i lepszego samopoczucia.',
			description3: 'Mit o konieczności unikania jedzenia po godzinie 18:00 jest szeroko rozpowszechniony, ale nie ma naukowych podstaw. To, czy jedzenie wieczorem sprzyja przyrostowi masy ciała, zależy bardziej od całkowitego bilansu kalorycznego niż od pory spożywania posiłków. Badania wykazują, że kluczowy jest całkowity bilans energetyczny i odpowiedni rozkład makroskładników w ciągu dnia, a nie godzina, o której spożywamy posiłki. Co więcej, niektóre osoby mogą czerpać korzyści z jedzenia wieczorem, ponieważ posiłki bogate w węglowodany mogą poprawiać jakość snu dzięki wpływowi na produkcję serotoniny i melatoniny.',
			description: 'opis na główną stornę',
			note: 'Garaulet M, Gómez-Abellán P. Timing of food intake and obesity: A novel association. Physiol Behav. 2014;134:44-50.',
			note2: ' Jakubowicz D, Barnea M, Wainstein J, Froy O. High Caloric Intake at Breakfast vs. Dinner Differentially Influences Weight Loss in Overweight and Obese Women. Obesity. 2013;21(12):2504-2512.',
			note3: '',
			
		},
		{
			title: 'Mit',
			subTitle: 'SOJA ZABURZA GOSPODARKĘ HORMONALNĄ MĘŻCZYZN – MIT!',
			IconUrl: medal,
			description2: 'Wyniki te są szczególnie ważne dla sportowców oraz mężczyzn dbających o kondycję, którzy sięgają po białko sojowe jako alternatywę dla białka serwatkowego. Białko sojowe, będące źródłem wszystkich niezbędnych aminokwasów, jest pełnowartościowym składnikiem diety, co czyni je odpowiednim wyborem zarówno dla osób aktywnych fizycznie, jak i dla tych, którzy chcą utrzymać zdrową dietę. Wyniki analizy wskazują, że nie ma powodu, by unikać izoflawonów czy białka sojowego z obawy przed negatywnym wpływem na poziom testosteronu. Dodatkowo regularne spożywanie produktów sojowych może wspierać zdrowie, np. układ sercowo-naczyniowy, oraz potencjalnie działać przeciwnowotworowo. Izoflawony, jako naturalne antyoksydanty, pomagają organizmowi neutralizować wolne rodniki, co może wspierać zdrowie w dłuższej perspektywie.',
			description3: 'Badania zawarte w tej meta-analizie dostarczają silnych dowodów na to, że spożycie izoflawonów oraz białka sojowego, często obecnych w dietach wegetariańskich i wegańskich, jest bezpieczne dla męskiego zdrowia hormonalnego. Obawy o możliwe działanie estrogenopodobne tych substancji, które mogłoby naruszyć równowagę hormonalną i obniżyć poziom testosteronu u mężczyzn, okazały się nieuzasadnione. Nawet przy długotrwałym spożywaniu – badania obejmowały okres do 4 lat – nie wykazano znaczących zmian w poziomie testosteronu, SHBG (globuliny wiążącej hormony płciowe) ani innych hormonów męskich.',
			description: 'opis na główną stornę',
			note: 'Hamilton-Reeves JM, Vazquez G, Duval SJ, Phipps WR, Kurzer MS, Messina MJ. Clinical studies show no effects of soy protein or isoflavones on reproductive hormones in men: results of a meta-analysis. Fertility and Sterility. 2010;94(3):997-1007.',
			note2: '',
			note3: '',
		},
		{
			title: 'Fakt',
			subTitle: 'treść danego faktu lub mitu ',
			IconUrl: medal,
			description2: 'opis cz.1 dla faktu',
			description3: 'opis cz.2 dla faktu',
			note: '',
			note2: '',
			note3: '',
		},
		{
			title: 'Fakt',
			subTitle: 'treść danego faktu lub mitu ',
			IconUrl: medal,
			description2: 'opis cz.1 dla faktu',
			description3: 'opis cz.2 dla faktu',
			note: '',
			note2: '',
			note3: '',
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
				  <ul className="przypisy">
					<li>{factmyth.note}</li>
					<li>{factmyth.note2}</li>
					<li>{factmyth.note3}</li>
				  </ul>
				</div>
			  </div>
			)}
		  </SectionMoreFacts>
		))}
	  </div>
	);
  };

export default ListMoreFacts_Myths;
