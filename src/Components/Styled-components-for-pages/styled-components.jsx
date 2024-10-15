import React from 'react';
import styled from 'styled-components';

const ExerciseSection = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 20px 0;
`;

const ExerciseLeft = styled.div`
	flex-basis: 40%;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		max-width: 100%;
		border-radius: 10px;
	}
`;

const ExerciseRight = styled.div`
	flex-basis: 55%;
	padding-left: 20px;
`;

const ExerciseTitle = styled.h3`
	color: #ff6e40;
	font-size: 24px;
	margin-bottom: 15px;
`;

const ExerciseDescription = styled.p`
	font-size: 16px;
	line-height: 1.6;
	margin-bottom: 20px;
`;

const ReadMoreButton = styled.button`
	background-color: #ff6e40;
	color: white;
	border: none;
	padding: 10px 20px;
	font-size: 16px;
	cursor: pointer;
	border-radius: 5px;

	&:hover {
		background-color: #ff5722;
	}
`;

const ExerciseComponent = ({ title, description, imageUrl }) => {
	return (
		<ExerciseSection>
			<ExerciseLeft>
				<img src={imageUrl} alt={title} />
			</ExerciseLeft>
			<ExerciseRight>
				<ExerciseTitle>{title}</ExerciseTitle>
				<ExerciseDescription>{description}</ExerciseDescription>
				<ReadMoreButton>Read More →</ReadMoreButton>
			</ExerciseRight>
		</ExerciseSection>
	);
};

export default ExerciseComponent;
