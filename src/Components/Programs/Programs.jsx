import React from 'react';
import { Link } from 'react-router-dom';
import './Programs.css';
import program_biceps from '../../assets/program_biceps.png';
import program_biceps1 from '../../assets/program_biceps1.png';
import program_biceps2 from '../../assets/program_biceps2.png';
import dumbbell from '../../assets/dumbbell.svg';
import heart from '../../assets/heart.svg';
import medal from '../../assets/medal.svg';
import arrow_right from '../../assets/arrow_right.svg';
const Programs = () => {
	return (
		<div className='programs'>
			<div className='programs-wrapper'>
				<div className='program'>
					<img src={program_biceps} alt='' />
					<div className='caption'>
						<img src={dumbbell} alt='' />
						<p className='text-p'>Uginanie ramion stojąc</p>
					</div>
				</div>
				<div className='program'>
					<img src={program_biceps1} alt='' />
					<div className='caption'>
						<img src={heart} alt='' />
						<p className='text-p'>Podciąganie podchwytem</p>
					</div>
				</div>
				<div className='program'>
					<img src={program_biceps2} alt='' />
					<div className='caption'>
						<img src={medal} alt='' />
						<p className='text-p'>Biceps hantlami z rotacją nadgarstka</p>
					</div>
				</div>
			</div>
			<Link to='/more-programs'>
				<button className='btn dark-btn'>
					Read More
					<img src={arrow_right} alt='' />
				</button>
			</Link>
		</div>
	);
};

export default Programs;
