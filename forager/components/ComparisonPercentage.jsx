import React from "react";
import { warningMessage } from "@/data/development";
import calculateMatchPercentage from "@/data/Percentage";

const MushroomMatch = ({ baseMushroom, compareMushroom, card }) => {
    // Calculate the match percentage
    const matchPercentage = calculateMatchPercentage(baseMushroom, compareMushroom);
    
    // Determine the background color based on toxicity and match percentage
    let backgroundColor;

    if (matchPercentage < 60) {
        backgroundColor = 'grey';
    } else if (compareMushroom.features.is_toxic) {
        backgroundColor = 'red';
    } else {
        backgroundColor = 'green';
    }

    return (
        <div style={{ 
            backgroundColor, 
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid darkred', 
            display: 'flex', 
            alignItems: 'center',
            color: 'white' 
        }}>
            {/* Show the warning icon only if compareMushroom is toxic */}
            {compareMushroom.features.is_toxic && (
                <div style={{ marginLeft: '10px' }}>
                    <img src={warningMessage.icon} alt={"warning icon"} className="" />
                </div>
            )}
            <span>{`${matchPercentage.toFixed(2)}%`}</span>
        </div>
    );
};

export default MushroomMatch;
