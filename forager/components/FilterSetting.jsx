// FilterSettings.jsx

'use client';
import React from 'react';
import PillList from "./PillList";
import filterIcon from "../public/icons/FilterIcon.png";

const FilterSettings = ({ isPillListVisible, togglePillList }) => {
  return (
    <div>
      {/* Filter Icon Button */}
      <button 
        onClick={togglePillList} 
        style={{
          position: 'absolute',
          top: '200px', // Adjust top position
          right: '33px', // Adjust right position
          background: 'none', // Remove default button background
          border: 'none', // Remove default button border
          cursor: 'pointer', // Change cursor to pointer
          outline: 'none', // Remove outline on focus
        }}
      >
        <img 
          src={filterIcon.src} 
          alt="Filter" 
          style={{
            width: '30px', // Adjust size as necessary
            height: '30px', // Adjust size as necessary
          }} 
        />
      </button>

      {/* Pill List Overlay */}
      {isPillListVisible && (
        <div style={{
          position: 'absolute',
          top: '50px', // Adjust this value to control how much space you want at the top
          left: '0',
          right: '0',
          bottom: '0',
          background: 'white', // Semi-transparent background for visibility
          borderRadius: '8px', // Optional: for rounded corners
          padding: '20px', // Optional: padding for better layout
        }}>
          <PillList />
        </div>
      )}
    </div>
  );
}

export default FilterSettings;
