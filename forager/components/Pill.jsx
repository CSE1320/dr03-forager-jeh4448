// components/Pill.jsx
'use client';

import React, { useState } from 'react';

const Pill = ({ pillText, pillFilterType, pillSelected, onPillClick }) => {
    const pillStyle = {
        display: 'inline-block',
        padding: '8px 12px',
        height : "29.33px",
        borderRadius: '16px',
        margin: '5px',
        color: pillSelected ? 'white' : '#7C7C7C',
        backgroundColor: pillSelected ? '#579076' : '#D9D9D9',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        border: pillSelected ? '#579076' : '#D9D9D9',
        lineHeight: '12.33px',
        textAlign : 'center'
    };

    const [selected, setSelected] = useState(pillSelected); // Track local selected state
    const updatePill = () => {
        setSelected(!selected); // Toggle selected state
        if (onPillClick) {
            onPillClick(); // Call the onClick handler passed from PillList
        }
    };

    return (
        <div 
            style={pillStyle} 
            onClick={updatePill}
        >
            {pillText}
        </div>
    );
}

export default Pill;
