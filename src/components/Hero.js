import React from 'react';
import { Button } from './Button';
import './Hero.css';

function Hero() {
	return (
		<div className="hero-container">
			<video src="/videos/video-1.mp4" autoPlay loop muted />
			<h1>Adventure Awaits</h1>
			<p>What are you waiting for?</p>
			<div className="hero-btns">
				<Button
					className="btn"
					buttonStyle="btn--outline"
					buttonSize="btn--large"
				>
					GET STARTED
				</Button>
				<Button
					className="btn"
					buttonStyle="btn-primary"
					buttonSize="btn--large"
				>
					Watch Now <i className="far fa-play-circle"></i>
				</Button>
			</div>
		</div>
	);
}

export default Hero;
