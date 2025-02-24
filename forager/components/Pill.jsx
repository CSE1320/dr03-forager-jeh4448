'use client';
import React from "react";


const Pill = ({ pillText, pillFilterType, pillSelected, pillColor }) => {
    // Determine the styles based on the selected state
    const pillStyle = {
        display: 'inline-block',
        padding: '8px 12px',
        borderRadius: '16px',
        margin: '5px',
        color: pillSelected ? '#fff' : '#000',
        backgroundColor: pillColor,
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        // border: `1px solid ${pillSelected ? pillColor.selected : pillColor.default}`,
        border: `1px solid ${pillColor}`,
    };

    return (
      <div 
        style={pillStyle} 
        onClick={() => console.log(`Selected: ${pillFilterType}`)}
      >
        {pillText}
      </div>
    );
}
export default Pill;