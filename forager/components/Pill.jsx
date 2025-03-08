// components/Pill.jsx
'use client';

import React, { useState } from 'react';
import '../styles/Pill.css'; // Import the CSS file

const Pill = ({ pillText, pillFilterType, pillSelected, onPillClick, isDisabled }) => {
    const [selected, setSelected] = useState(pillSelected); // Track local selected state

    const updatePill = () => {
        if (!isDisabled) {
            setSelected(!selected); // Toggle selected state
            if (onPillClick) {
                onPillClick(); // Call the onClick handler passed from PillList
            }
        }
    };

    // Determine the class to apply
    let pillClass = 'pill ';
    if (isDisabled) {
        pillClass += 'disabled';
    } else if (selected) {
        pillClass += 'selected';
    } else {
        pillClass += 'unselected';
    }

    return (
        <div 
            className={pillClass} 
            onClick={updatePill}
        >
            {pillText}
        </div>
    );
}

export default Pill;
