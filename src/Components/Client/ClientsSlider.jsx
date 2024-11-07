import React, { useState, useEffect } from 'react';
import './ClientsSlider.css';
import clientsData from '../../data/clients.json';
import arrow_right from '../../assets/arrow_right.svg';
import arrow_left from '../../assets/arrow_left.svg';
import Rating from './Rating';

const ClientsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Domyślnie ustawione na 3 slajdy jednocześnie
  const totalSlides = clientsData.clients.length;

  // Zmiana liczby slajdów w zależności od szerokości ekranu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(3); // Duże ekrany
      } else if (window.innerWidth >= 800) {
        setSlidesToShow(2); // Średnie ekrany
      } else {
        setSlidesToShow(1); // Małe ekrany
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Wywołanie funkcji po pierwszym załadowaniu komponentu

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 8000); // Automatyczne przesuwanie co 8 sekund
    return () => clearInterval(slideInterval);
  }, [totalSlides]);

  const getImagePath = (imageName) => {
    try {
      return new URL(`../../assets/${imageName}`, import.meta.url).href;
    } catch (error) {
      return '/path/to/placeholder-image.png'; // Placeholder, jeśli obrazek nie istnieje
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
            transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
            width: `${(totalSlides / slidesToShow) * 100}%`,
          }}
        >
          {clientsData.clients.map((client, index) => (
            <div key={index} className='slide' style={{ width: `${100 / slidesToShow}%` }}>
              <div className='client-info'>
			  <Rating value={client.rate} />
                <img
                  src={getImagePath(client.image)}
                  alt={`${client.firstName} ${client.lastName}`}
                />
                <h3>
                  {client.firstName} {client.lastName}
                </h3>
                <span>{client.region}</span>
                <p>{client.description}</p>
				<p className="data">{client.data}</p>
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