import React from "react";
import { warningMessage } from "@/data/development";
import calculateMatchPercentage from "@/data/Percentage";

const MushroomMatch = ({ baseMushroom, compareMushroom, card }) => {
    // Calculate the match percentage
    const matchPercentage = calculateMatchPercentage(baseMushroom, compareMushroom);

    return (
        <div style={{ 
            backgroundColor: 'red', 
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid darkred', 
            display: 'flex', 
            alignItems: 'center',
            color: 'white' 
        }}>
            
            {card && (
                <div style={{ marginLeft: '10px' }}>
                     {/* Assuming this is your icon */}
                    <img src={warningMessage.icon} alt={"warning icon"} className="" />
                </div>
            )}
            <span>{`${matchPercentage.toFixed(2)}%`}</span>
        </div>
    );
};

export default MushroomMatch;
