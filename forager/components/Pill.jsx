'use client';
import React from "react";


const Pill = ({ pillText, pillFilterType, pillSelected, pillColor }) => {
    // Determine the styles based on the selected state
    const pillStyle = {
        display: 'inline-block',
        padding: '8px 12px',
        height : "29.33px",
        borderRadius: '16px',
        margin: '5px',
        color: pillSelected ? 'white' : '#7C7C7C', //second is a light gray
        //color : '#fff',
        backgroundColor: pillColor,
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        // border: `1px solid ${pillSelected ? pillColor.selected : pillColor.default}`,
        border: `1px solid ${pillColor}`,
        lineHeight: '12.33px', // Match this with height for vertical centering,
        textAlign : 'center'
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