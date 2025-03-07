'use client';
import '../styles/globals.css'; 
import { useState } from 'react';
import MushroomMatch from '@/components/ComparisonPercentage'; // Import MushroomMatch

const MushroomCard = ({ mushroom, card, baseMushroom }) => {
    const { image, name, scientific_name, features, characteristics, description } = mushroom;
    
    const [isFavorite, setIsFavorite] = useState(features.is_favorite);

    const handleFavoriteClick = () => {
        const existingData = localStorage.getItem('myFavoriteData');
        let jsonData = existingData ? JSON.parse(existingData) : { mushroomCards: [] };

        const mushroomIndex = jsonData.mushroomCards.findIndex(card => card.name === mushroom.name);
        
        if (mushroomIndex !== -1) {
            jsonData.mushroomCards[mushroomIndex].features.is_favorite = true; 
        }

        localStorage.setItem('myFavoriteData', JSON.stringify(jsonData));
        setIsFavorite(true);
    };

    return (
        <div className="background">
            <img src={image} alt={name} width="290" height="290" />
            
            {card ? (
                <>
                    <h2 className="text-black">{name}</h2>
                    {/* Include MushroomMatch when card is true */}
                    {baseMushroom && (
                        <div style={{
                            bottom: "250px",
                            position: "relative",
                            width: "fit-content",
                            left: "65px",
                        }}>
                            <MushroomMatch 
                                baseMushroom={baseMushroom} 
                                compareMushroom={mushroom} 
                                card={true} 
                            />
                        </div>
                    )}
                </>
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
                            style={{ backgroundColor: isFavorite ? 'gold' : 'gray' }} 
                        ></div>
                    </div>
                    <div className="fast-facts">
                        <p>Toxic: {features.is_toxic ? 'Yes' : 'No'}</p>
                    </div>
                    <div className="background message brown rounded-xl text-sm w-full font-medium text-white px-4 py-4" style={{ backgroundColor: '#8E4A49' }}>

                        <div className="header flex items-center">
                            <h1 className="uppercase">Fast Facts</h1>
                        </div>
                        <p>Cap Diameter : {characteristics.diameter}</p>
                        <p>Gill Color : {characteristics.gill_color}</p>
                        <p>Stem Color : {characteristics.stem_color}</p>
                        <p>Habitat : {characteristics.habitat}</p>
                    </div>
                    <p className='text-black'>{description}</p>
                    {/* Include MushroomMatch when card is false */}
                    {baseMushroom && (
                        <div style={{
                            bottom: "605px",
                            position: "relative",
                            width: "fit-content",
                            left: "140px",
                        }}>
                            <MushroomMatch 
                                baseMushroom={baseMushroom} 
                                compareMushroom={mushroom} 
                                card={false} 
                            />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default MushroomCard;
