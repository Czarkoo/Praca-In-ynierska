import React, { useState } from 'react';

const SuplementComponent = ({
	title,
	description,
	description2,
	description3,
	imageUrl,
	imageURL1,
	imageURL2,
	imageURL3,
}) => {
	console.log("Image URLs:", imageURL1, imageURL2, imageURL3);
	const [visibleDescriptions, setVisibleDescriptions] = useState({
		description2: false,
		description3: false,
	});

	const handleItemClick = (descriptionKey) => {
		setVisibleDescriptions((prev) => ({
			...prev,
			[descriptionKey]: !prev[descriptionKey],
		}));
	};

	return (
		<div className='more-suplements'>
			<div className='more-suplements-top'>
				<h3>{title}</h3>
			</div>
			<div className='more-suplements-center'>
				<div className='more-suplements-left'>
					<h2>Opis produktu: </h2>
					<p>{description}</p>
					<ul>
						<li onClick={() => handleItemClick('description2')}>
							Szczegóły dotyczące dawkowania:
						</li>
						{visibleDescriptions.description2 && <p>{description2}</p>}
						<li onClick={() => handleItemClick('description3')}>
							Dlaczego warto?
						</li>
						{visibleDescriptions.description3 && <p>{description3}</p>}
					</ul>
				</div>
				<div className='more-suplements-right'>
					<img src={imageUrl} alt={title} className='exercise1' />
				</div>
			</div>
			<div className='more-suplements-bottom'>
			{(imageURL1 || imageURL2 || imageURL3) && (
        <div className='top-container'>
            {imageURL1 && (
                <div className='top-item'>
                    <span className='top-rank'>1</span>
                    <img src={imageURL1} alt='TOP1' />
                    
                </div>
            )}
            {imageURL2 && (
                <div className='top-item'>
                    <span className='top-rank'>2</span>
                    <img src={imageURL2} alt='TOP2' />
                    
                </div>
            )}
            {imageURL3 && (
                <div className='top-item'>
                    <span className='top-rank'>3</span>
                    <img src={imageURL3} alt='TOP3' />
                    
                </div>
            )}
        </div>
    )}
			</div>
		</div>
	);
};

export default SuplementComponent;
