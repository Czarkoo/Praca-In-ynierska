import React from 'react'

const SuplementsSection = ({ sectionTitle, children }) => {
	return (
		<div className='suplements-section'>
			<h1>{sectionTitle}</h1>
			{children}
		</div>
	);
};

export default SuplementsSection
