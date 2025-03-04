'use client';
import '../styles/globals.css'; // Import the CSS file for styling
import { useState } from 'react';

const MushroomCard = ({ mushroom, card }) => {
    const { image, name, scientific_name, features, characteristics, description } = mushroom;
    
    // State to manage is_favorite status
    const [isFavorite, setIsFavorite] = useState(features.is_favorite);

    const handleFavoriteClick = () => {
        // Step 1: Retrieve the existing data from local storage
        console.log("button pressed")
        const existingData = localStorage.getItem('myFavoriteData');
        let jsonData = existingData ? JSON.parse(existingData) : { mushroomCards: [] };

        // Step 2: Find the mushroom in the stored data and update the favorite status
        const mushroomIndex = jsonData.mushroomCards.findIndex(card => card.name === mushroom.name);
        
        if (mushroomIndex !== -1) {
            jsonData.mushroomCards[mushroomIndex].features.is_favorite = true; // Set the is_favorite property to true
        }

        // Step 3: Save the updated JSON back to local storage
        localStorage.setItem('myFavoriteData', JSON.stringify(jsonData));

        // Update the state to reflect the change in favorite status
        setIsFavorite(true);
    };

    return (
        <div className="background">
            <img src={image} alt={name} width="290" height="290" />
            {card ? (
                <h2 className="text-black">{name}</h2>
            ) : (
                <>
                    <div className="mushroom-text-container">
                        <div className="text-container">
                            <h2 className="text-black">{name}</h2>
                            <h3 className="text-black">{scientific_name}</h3>
                        </div>
                        <div 
                            className="circle cursor-pointer" 
                            onClick={handleFavoriteClick} 
                            style={{ backgroundColor: isFavorite ? 'gold' : 'gray' }} // Change color based on favorite status
                        ></div>
                    </div>
                    <div className="fast-facts">
                        <p>Toxic: {features.is_toxic ? 'Yes' : 'No'}</p>
                    </div>
                    <div className="background message brown rounded-xl text-sm w-full font-medium text-black px-4 py-4 mx-4" style={{ backgroundColor: '#8E4A49' }}>
                        <div className="header flex items-center">
                            <h1 className="uppercase">Fast Facts</h1>
                        </div>
                        <p>Cap Diameter : {characteristics.diameter}</p>
                        <p>Gill Color : {characteristics.gill_color}</p>
                        <p>Stem Color : {characteristics.stem_color}</p>
                        <p>Habitat : {characteristics.habitat}</p>
                    </div>
                    <p>{description}</p>
                </>
            )}
        </div>
    );
};

export default MushroomCard;
