import React from "react";
import { warningMessage } from "./development";

// Function to calculate the match percentage
const calculateMatchPercentage = (base, compare) => {
    const baseCharacteristics = base.characteristics;
    const compareCharacteristics = compare.characteristics;
    let matchCount = 0;
    let totalCount = 0;

    // Loop through each characteristic and compare
    for (const key in baseCharacteristics) {
        if (baseCharacteristics.hasOwnProperty(key)) {
            totalCount++;
            if (baseCharacteristics[key] === compareCharacteristics[key]) {
                matchCount++;
            }
        }
    }

    // Calculate percentage
    return (matchCount / totalCount) * 100;
};

export default calculateMatchPercentage