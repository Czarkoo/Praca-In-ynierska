import React from 'react'
import './footer.css';
import Footer_section_left from './Footer_section_left';
import Footer_section_center from './Footer_section_center';
import Footer_section_right from './Footer_section_right';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-left'><Footer_section_left /></div>
      <div className='footer-center'><Footer_section_center /></div>
      <div className='footer-right'><Footer_section_right /></div>
    </div>
  )
}

export default Footer
