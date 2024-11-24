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
	console.log('Image URLs:', imageURL1, imageURL2, imageURL3);
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

	const items = [
		{ rank: 1, image: imageURL1 },
		{ rank: 2, image: imageURL2 },
		{ rank: 3, image: imageURL3 },
	];

	const filledItems = items.map((item, index) => {
		return item.image ? item : { rank: index + 1, image: null }; // Add empty placeholders
	});

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
				<div className='ranking'>Ranking</div>
				<div className='top-container'>
					{filledItems.map((item, index) => (
						<div key={index} className='top-item'>
							{item.image ? (
								<>
									<span className='top-rank'>{item.rank}</span>
									<img src={item.image} alt={`TOP${item.rank}`} />
								</>
							) : (
								<div className='empty-rank'></div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SuplementComponent;
