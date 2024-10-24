import React from 'react';

const DescriptionMoreFacts = ({
	title,
	subTitle,
	description,
	description2,
	description3,
	IconUrl,
}) => {
	return (
        <div className='MoreaboutFactsMyths'>
            {title === 'Fakt' && (
                <div className="MoreFacts">
                    <div className="MoreFacts_top">
                        <h1 className="title">Fakt: {subTitle}</h1>
                    </div>
                    <div className="MoreFacts_left">
                        <img src={IconUrl} alt="" />
                        <h2 className="subTitle">{subTitle}</h2>
                        <p>{description2}</p>
                    </div>
                    <div className="MoreFacts_right">
                        <p>{description3}</p>
                    </div>
                </div>
            )}

            {title === 'Mit' && (
                <div className="MoreMyths">
                    <div className="MoreMyths_top">
                        <h1 className="title">Mit: {subTitle}</h1>
                    </div>
                    <div className="MoreMyths_left">
                        <p>{description2}</p>
                    </div>
                    <div className="MoreMyths_right">
                        <img src={IconUrl} alt="" />
                        <h2 className="subTitle">{subTitle}</h2>
                        <p>{description3}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DescriptionMoreFacts;
