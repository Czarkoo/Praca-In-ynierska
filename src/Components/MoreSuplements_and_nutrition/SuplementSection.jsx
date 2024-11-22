import React from 'react'

const SuplementSection = ({ sectionTitle, children }) => {
    return (
      <div className='section-suplements'>
        <h1>{sectionTitle}</h1>
        {children}
      </div>
    )
  }

export default SuplementSection
