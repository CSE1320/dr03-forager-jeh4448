// MushroomCards.js
import React from 'react';
import '../styles/MushroomCards.css'; // Import the CSS file for styling

// Accept a single mushroom object as a prop
const MushroomList = ({ specificMushroomCard }) => {
    return (
        <div className="mushroom-card">
            <img src={specificMushroomCard.image} alt={specificMushroomCard.name} />
            <h2>{specificMushroomCard.name}</h2>
        </div>
    );
};

export default MushroomList;
