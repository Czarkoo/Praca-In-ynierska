import React from 'react';
import ExerciseComponent from '../Styled-components-for-pages/styled-components';
const MorePrograms = () => {
	return (
		<div className='more-programs'>
			<h1>More Information About Biceps Programs</h1>
			<p>
				Here you'll find more detailed information about different biceps
				exercises.
			</p>
			<ul>
				<li>Exercise 1: Uginanie ramion stojąc</li>
				<li>Exercise 2: Podciąganie podchwytem</li>
				<li>Exercise 3: Biceps hantlami z rotacją nadgarstka</li>
				{/* Dodaj więcej treści */}
			</ul>
		</div>
	);
};

export default MorePrograms;
