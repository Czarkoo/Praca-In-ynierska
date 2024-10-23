import React from 'react'

const SectionMoreFacts = ({ sectionTitle, children }) => {
  return (
    <div className='section-morefacts_myths'>
      <h1>{sectionTitle}</h1>
      {children}
    </div>
  )
}

export default SectionMoreFacts
