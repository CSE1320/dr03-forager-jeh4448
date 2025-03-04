'use client'
import '../styles/globals.css'; // Import the CSS file for styling
const MushroomCard = ({ mushroom, card }) => {
    const { image, name, scientific_name, features, characteristics, description } = mushroom;

    return (
        <div className="mushroom-card">
            <img src={image} alt={name} width="290" height="290" />
            {card ? (
                <h2 className="text-black">{name}</h2>
            ) : (
                <>
                    <div className="mushroom-text-container">
                        <div className="text-container">
                            <h2 className="text-black">{name}</h2>
                            <h3>{scientific_name}</h3>
                        </div>
                        <div className="circle"></div>
                    </div>
                    <div className="fast-facts">
                        <p>Toxic: {features.is_toxic ? 'Yes' : 'No'}</p>
                    </div>
                    <div className="message brown rounded-xl text-sm w-full font-medium text-white px-4 py-4 mx-4" style={{ backgroundColor: '#8E4A49' }}>
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
