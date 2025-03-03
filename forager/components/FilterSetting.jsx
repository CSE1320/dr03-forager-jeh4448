'use client';
import React from 'react';
import PillList from "./PillList";
const filterIcon = "/icons/FilterIcon.png";

const FilterSettings = ({ isPillListVisible, togglePillList, buttonStyle }) => {
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
            height: '30px', 
          }} 
        />
      </button>

      {/* Pill List Overlay */}
      {isPillListVisible && (
        <div style={{
          position: 'absolute',
          top: '50px', 
          left: '0',
          right: '0',
          bottom: '0',
          background: 'white', 
          borderRadius: '8px', 
          padding: '20px', 
        }}>
          <PillList />
          {/* Exit Button */}
          <button 
            onClick={togglePillList} 
            style={{
              position: 'absolute', // Position the button absolutely
              top: '10px', // Adjust as necessary
              right: '10px', // Adjust as necessary
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
