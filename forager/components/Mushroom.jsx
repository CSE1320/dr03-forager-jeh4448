
'use client'

//output whole list if card is false, output just image and title if true

const MushroomCard = ({ mushroom }) => {
    const { image, name, scientific_name, features, description } = mushroom;

    return (
        <div className="mushroom-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            {features.is_favorite ? null : (
                <>
                    <h3>{scientific_name}</h3>
                    <div className="fast-facts">
                        <p>Toxic: {features.is_toxic ? 'Yes' : 'No'}</p>
                    </div>
                    <p>{description}</p>
                </>
            )}
        </div>
    );
};

export default MushroomCard