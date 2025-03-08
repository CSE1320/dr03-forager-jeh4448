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
            width: '30px', 
            height: '30px'
          }} 
        />
      </button>

      {/* Pill List Overlay */}
      {isPillListVisible && (
        <div style={{
          position: 'fixed', // Keep it fixed for visibility
          top: '50px', 
          left: '0',
          right: '0',
          background: 'white', 
          borderRadius: '8px', 
          padding: '20px', 
          zIndex: 1000, // Ensure it appears above other content
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Exit Button Container */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end', // Align to the right
            marginBottom: '10px' // Space below the button
          }}>
            <button 
              onClick={togglePillList} // Close the filter settings when clicked
              style={{
                width: '40px', // Adjust size as necessary
                height: '40px', // Adjust size as necessary
                filter: 'brightness(0.5)',
                border: 'none', // Remove default button border
                background: 'transparent', // Make the background transparent
                cursor: 'pointer', // Change cursor to pointer
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

          <PillList onSelectionChange={onSelectionChange} /> {/* Pass the selection handler to PillList */}
        </div>
      )}
    </div>
  );
}

export default FilterSettings;
