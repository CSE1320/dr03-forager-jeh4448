//how to call and use this
// // Import the JSON data
// import mushroomData from "../../data/Mushrooms"; // Adjust the import path accordingly
// import MushroomCard from "@/components/Mushroom";

// export default function SandboxPage() {
//     return (
//         <div className="page flex justify-center items-center flex-row flex-wrap">
//             {mushroomData.mushroomCards.map((mushroom, index) => (
//                 <MushroomCard key={index} mushroom={mushroom} card = {true} /> //true for basic cards, false for extended information
//             ))}
//         </div>
//     );
// }


'use client'
//output whole list if card is false, output just image and title if true

const MushroomCard = ({ mushroom, card }) => {
    const { image, name, scientific_name, features, description } = mushroom;

    return (
        <div className="mushroom-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            {card ? true : (
                <>
                    <h3>{scientific_name}</h3>
                    <div className="fast-facts">
                        <p>Toxic: {features.is_toxic ? 'Yes' : 'No'}</p>
                    </div>
                    <div className="message brown rounded-xl text-sm w-full font-medium text-white px-4 py-4 mx-4" style={{ backgroundColor: '#8E4A49' }}>
                        <div className="header flex items-center">
                            {/* <img width="27px" height="27px" className="" src={square}></img> */}
                            <h1 className="uppercase">Fast Facts</h1>
                        </div>
                        <p className="">temp fast facts</p>
                    </div>
                    <p>{description}</p>
                </>
            )}
        </div>
    );
};

export default MushroomCard