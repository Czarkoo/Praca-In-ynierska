import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientsSlider from './Components/Client/ClientsSlider';
import Facts_Myths from './Components/Facts_Myths/Facts_Myths';
import Navbar from './Components/Navbar/Navbar';
// import Opinions from './Components/Opinions/Opinions';
import Programs from './Components/Programs/Programs';
import MorePrograms from './Components/MorePrograms/MorePrograms';
import Suplements_and_nutrition from './Components/Suplements_and_nutrition/Suplements_and_nutrition';
import Title from './Components/Title/Title';
import Websitebgc from './Components/Websitebgc/Websitebgc';

const App = () => {
	return (
		<Router>
			<div id='/'>
				<Navbar />
				<Websitebgc />
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='programs' element={<Programs />} />
						<Route path='more-programs' element={<MorePrograms />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

const Home = () => {
	return (
		<>
			<Title subTitle='Excercise' Title='How To Do That' />
			<Programs />
			<Facts_Myths />
			<Title subTitle='Supplements' Title='Products Worth Attention' />
			<Suplements_and_nutrition />
			<Title subTitle='Opinie' Title='Informacje odnośnie strony' />
			<ClientsSlider />
		</>
	);
};
console.log('abc');

export default App;
