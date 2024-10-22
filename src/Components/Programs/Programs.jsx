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
						<p className='text-p'>
							Witaj! Poniżej znajdziesz przycisk, który przeniesie Cię do
							zestawu ćwiczeń. Znajdziesz tam szczegółowe opisy oraz ćwiczenia,
							które pomogą Ci w efektywnym treningu kluczowych partii
							mięśniowych, takich jak nogi, biceps, triceps i plecy. Każda z
							tych grup mięśniowych została starannie dobrana, aby zapewnić
							wszechstronny rozwój i poprawę siły.
						</p>
					</div>
				</div>
				<div className='program'>
					<img src={program_biceps1} alt='' />
					<div className='caption'>
						<img src={heart} alt='' />
						<p className='text-p'>
							W sumie przygotowaliśmy dla Ciebie cztery ćwiczenia na każdą z
							wymienionych partii, które możesz wykonywać zarówno w domu, jak i
							na siłowni. Dzięki różnorodności ćwiczeń, zyskasz możliwość
							dopasowania treningu do swoich indywidualnych potrzeb i poziomu
							zaawansowania.
						</p>
					</div>
				</div>
				<div className='program'>
					<img src={program_biceps2} alt='' />
					<div className='caption'>
						<img src={medal} alt='' />
						<p className='text-p'>
							Zastosowanie odpowiedniej techniki oraz regularność to kluczowe
							elementy skutecznego treningu, dlatego zachęcamy do dokładnego
							zapoznania się z opisami każdego ćwiczenia. Niezależnie od tego,
							czy chcesz zwiększyć masę mięśniową, poprawić swoją wydolność, czy
							po prostu utrzymać dobrą kondycję, nasze propozycje z pewnością Ci
							w tym pomogą. Kliknij przycisk poniżej i rozpocznij swoją przygodę
							z treningiem!
						</p>
					</div>
				</div>
			</div>
			<Link to='more-programs'>
				<button className='btn dark-btn'>
					Read More
					<img src={arrow_right} alt='' />
				</button>
			</Link>
		</div>
	);
};

export default Programs;
