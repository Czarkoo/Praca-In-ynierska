import React from 'react';
import './MorePrograms.css';
import ExerciseList from './ExerciseList';
import { Link } from 'react-router-dom';

const MorePrograms = () => {
	return (
		<div>
			<Link to='/' className='program'></Link>
			<ExerciseList />
		</div>
	);
};

export default MorePrograms;
