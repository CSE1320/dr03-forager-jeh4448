'use client';
import React from 'react';
import PillList from "./PillList";
const filterIcon = "/icons/FilterIcon.png";

const FilterSettings = ({ isPillListVisible, togglePillList, buttonStyle, onSelectionChange }) => {
  return (
    <div>
      {/* Filter Icon Button */}
      <button 
        onClick={togglePillList} 
        style={buttonStyle} // Use the passed buttonStyle prop
      >
        <img 
          src={filterIcon} 
          alt="Filter" 
          style={{
            left: "340px",
            width: '30px', 
            height: '30px', 
            position: "relative"
          }} 
        />
      </button>

      {/* Pill List Overlay */}
      {isPillListVisible && (
        <div style={{
          position: 'fixed', // Changed from 'absolute' to 'fixed' for better visibility
          top: '50px', 
          left: '0',
          right: '0',
          background: 'white', 
          borderRadius: '8px', 
          padding: '20px', 
          zIndex: 1000, // Ensure it appears above other content
        }}>
          <PillList onSelectionChange={onSelectionChange} /> {/* Pass the selection handler to PillList */}
          {/* Exit Button */}
          <button 
            onClick={() => {
              togglePillList(); // Ensure the filter settings are hidden when the X button is clicked
            }} 
            style={{
              marginTop: '10px', // Use margin instead of absolute positioning
              marginLeft: 'auto', // Align to the right
              display: 'block', // Make it a block element for margin auto to work
              width: '40px', // Adjust size as necessary
              height: '40px', // Adjust size as necessary
              filter: 'brightness(0.5)',
            }}
          >
            <img 
              src="/ExitX.png" // Use the exit image directly
              alt="Exit Button" 
              style={{
                width: '100%', // Make the image fill the button
                height: '100%',
              }} 
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterSettings;
