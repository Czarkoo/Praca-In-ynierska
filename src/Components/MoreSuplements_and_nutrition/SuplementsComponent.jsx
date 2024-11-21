import React from 'react'

const SuplementsComponent = ({
	title,
	description,
	description2,
	description3,
    videoUrl
}) => {
	return (
		<div className='more-suplements'>
			<div className='more-suplements-top'>
				<h1>{title}</h1>
			</div>
			<div className='more-suplements-left'>
				<h2>Opis produktu:</h2>
				<p>{description}</p>
				<ul>
					<li> → Szczegóły dotyczące dawkowania</li>
					<p>{description2}</p>
					<li> → Dlaczego warto ? </li>
					<p>{description3}</p>
				</ul>
			</div>
            <div className='more-suplements-right'>
				<div className='Film'>
                    <a href={videoUrl}></a>
                </div>
			</div>
            <div className='more-suplements-bottom'>
				<h2>Ranking </h2>
				<ul>
					<li className='Top_1'> → Szczegóły dotyczące zaangażowania mięśni</li>
					<li className='Top_2'> → Kontrola Ruchu </li>
					<li className='Top_3'> → Kontrola Ruchu </li>
				</ul>
			</div>
		</div>
	);
};

export default SuplementsComponent
