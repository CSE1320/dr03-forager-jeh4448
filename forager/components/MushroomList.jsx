// MushroomCards.js
import React from 'react';
import '../styles/MushroomCards.css'; // Import the CSS file for styling


//in ({}), only call Mushrrom call, inside need to call tag of <Mushroom data= mushroom> and ms.map
const MushroomCards = ({ specificMushroomCards }) => {
    return (
        <div className="mushroom-cards-container">
            {specificMushroomCards.map((card, index) => (
                <div key={card.id || index} className="mushroom-card">
                    <img src={card.image} alt={card.name} />
                    <h2>{card.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default MushroomCards;
