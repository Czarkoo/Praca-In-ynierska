import React, { useState, useEffect } from 'react';
import './ClientsSlider.css';
import clientsData from '../../data/clients.json';
import arrow_right from '../../assets/arrow_right.svg';
import arrow_left from '../../assets/arrow_left.svg';
import Rating from './Rating';
import SortClientSlider from './SortClientSlider'; // Upewnij się, że importujesz poprawny plik

const ClientsSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slidesToShow, setSlidesToShow] = useState(3);
	const [sortedClients, setSortedClients] = useState([...clientsData.clients]);

	// Update liczby slajdów na podstawie szerokości ekranu
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1200) {
				setSlidesToShow(3);
			} else if (window.innerWidth >= 800) {
				setSlidesToShow(2);
			} else {
				setSlidesToShow(1);
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % sortedClients.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + sortedClients.length) % sortedClients.length
		);
	};

	useEffect(() => {
		const slideInterval = setInterval(nextSlide, 8000);
		return () => clearInterval(slideInterval);
	}, [sortedClients.length]);

	const getImagePath = (imageName) => {
		try {
			return new URL(`../../assets/${imageName}`, import.meta.url).href;
		} catch (error) {
			return '/path/to/placeholder-image.png';
		}
	};

	const handleSortChange = (sortBy) => {
		let sortedArray = [...clientsData.clients];
		switch (sortBy) {
			case 'newest':
				sortedArray.sort((a, b) => new Date(b.date) - new Date(a.date));
				break;
			case 'oldest':
				sortedArray.sort((a, b) => new Date(a.date) - new Date(b.date));
				break;
			case 'highest_rate':
				sortedArray.sort((a, b) => b.rate - a.rate);
				break;
			case 'lowest_rate':
				sortedArray.sort((a, b) => a.rate - b.rate);
				break;
			default:
				sortedArray = [...clientsData.clients];
		}
		setSortedClients(sortedArray);
	};

	return (
		<div className='slider-container'>
			<div className='sort-container'>
				<SortClientSlider onSortChange={handleSortChange} />{' '}
			</div>
			<button className='slider-btn prev' onClick={prevSlide}>
				<img src={arrow_left} alt='Previous' />
			</button>
			<div className='slider-wrapper'>
				<div
					className='slider-content'
					style={{
						transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
						width: `${(sortedClients.length / slidesToShow) * 100}%`,
					}}
				>
					{sortedClients.map((client, index) => (
						<div
							key={index}
							className='slide'
							style={{ width: `${100 / slidesToShow}%` }}
						>
							<div className='client-info'>
								<img
									src={getImagePath(client.image)}
									alt={`${client.firstName} ${client.lastName}`}
								/>
								<h3>
									{client.firstName} {client.lastName}
								</h3>
								<span>{client.region}</span>
								<Rating value={client.rate} />
								<p>{client.description}</p>
								<p className='data'>{client.date}</p>
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
