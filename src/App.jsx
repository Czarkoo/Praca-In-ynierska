import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientsSlider from './Components/Client/ClientsSlider';
import Facts_Myths from './Components/Facts_Myths/Facts_Myths';
import MoreFacts_Myths from './Components/MoreFacts_Myths/MoreFacts_Myths';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';
import MorePrograms from './Components/MorePrograms/MorePrograms';
import Suplements_and_nutrition from './Components/Suplements_and_nutrition/Suplements_and_nutrition';
import Title from './Components/Title/Title';
import Websitebgc from './Components/Websitebgc/Websitebgc';
import Footer from './Components/Footer/Footer';
import MoreSuplements_and_nutrition from './Components/MoreSuplements_and_nutrition/MoreSuplements_and_nutrition';

const App = () => {
	return (
		<Router>
			<div id='/'>
				<Navbar />
				<Websitebgc />
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='more-programs' element={<MorePrograms />} />
						<Route path='MoreaboutFactsMyths' element={<MoreFacts_Myths />} />
						<Route path='more-suplements' element={<MoreSuplements_and_nutrition />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

const Home = () => {
	return (
		<>
			<Title subTitle='Excercise' Title='How To Do That' />
			<div id='program'>
				<Programs />
			</div>
			<div id='facts_myths'>
				<Facts_Myths />
			</div>
			<Title subTitle='Opinie' Title='Informacje odnośnie strony' />
			<div id='slider-container'>
				<ClientsSlider />
			</div>
			<Title subTitle='Supplements' Title='Products Worth Attention' />
			<div id='suplements'>
				<Suplements_and_nutrition />
			</div>
		</>
	);
};

export default App;
