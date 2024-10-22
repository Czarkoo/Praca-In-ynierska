import React from 'react'

const DescriptionMoreFacts = ({
        title,
        subTitle,
        description,
        description2,
        description3,
        IconUrl,
        
    }) => {
  return  (
          <div className='MoreFacts'>
            <div className="MoreFacts_top">
            <h1 className='title'>{title}Opisz Faktu | mitu</h1>
            </div>
            <div className="MoreFacts_left">
                <img src={IconUrl} alt="" />
                <h2 className="subTitle">{subTitle}</h2>
                <p className={description2}></p>
            </div>
            
            <div className="MoreFacts_right">
                <p className={description3}></p>
            </div>
          </div>
          );
        }; 

export default DescriptionMoreFacts
