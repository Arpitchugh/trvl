import React from 'react';
import cardItem from './CardItem';

import './Cards.css';

function Cards() {
	return (
		<div className="cards">
			<h1>Check Out These EPIC Destinations</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<cardItem
							src="../images/img-"
							text="Explore the hidden waterfall deep instide the Amazon Jungle"
							label="Adventure"
							path="/services"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
