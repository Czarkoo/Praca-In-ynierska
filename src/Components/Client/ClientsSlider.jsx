import React, { useState, useEffect } from 'react';
import './ClientsSlider.css';
import clientsData from '../../data/clients.json';
import arrow_right from '../../assets/arrow_right.svg';
import arrow_left from '../../assets/arrow_left.svg';

const ClientsSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlides = clientsData.clients.length;
	//funkcja przechodzi mi tutaj do następnego slajdu
	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % totalSlides);
	};

	//funkcja przechodzi mi tutaj do poprzedniego slajdu
	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
	};

	useEffect(() => {
		const slideInterval = setInterval(nextSlide, 8000); // Co 3000ms = 3 sekundy
		return () => clearInterval(slideInterval); // Wyczyszczenie interwału po odmontowaniu komponentu
	}, []);

	const getImagePath = (imageName) => {
		try {
			return new URL(`../../assets/${imageName}`, import.meta.url).href;
		} catch (error) {
			return '/path/to/placeholder-image.png'; // Wskaźnik na placeholder, jeśli obrazek nie istnieje
		}
	};

	return (
		<div className='slider-container'>
			<button className='slider-btn prev' onClick={prevSlide}>
				<img src={arrow_left} alt='Previous' />
			</button>
			<div className='slider-wrapper'>
				<div
					className='slider-content'
					style={{
						transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
					  }}
				>
					{clientsData.clients.map((client, index) => (
						<div key={index} className='slide'>
							<div className='client-info'>
								<img
									src={getImagePath(client.image)} // Użyj funkcji do pobierania ścieżki obrazu
									alt={`${client.firstName} ${client.lastName}`}
								/>
								<h3>
									{client.firstName} {client.lastName}
								</h3>
								<span>{client.region}</span>
								<p>{client.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<button className='slider-btn next' onClick={nextSlide}>
				<img src={arrow_right} alt='Next' />
			</button>
		</div>
	);
};

export default ClientsSlider;
