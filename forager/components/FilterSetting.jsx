// FilterSettings.jsx

'use client';
import React from 'react';
import PillList from "./PillList";
import filterIcon from "../public/icons/FilterIcon.png";

const FilterSettings = ({ isPillListVisible, togglePillList, buttonStyle }) => {
  return (
    <div>
      {/* Filter Icon Button */}
      <button 
        onClick={togglePillList} 
        style={buttonStyle} // Use the passed buttonStyle prop
      >
        <img 
          src={filterIcon.src} 
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
          position: 'absolute', //remove absolute, convert to tailwind
          top: '50px', 
          left: '0',
          right: '0',
          bottom: '0',
          background: 'white', 
          borderRadius: '8px', 
          padding: '20px', 
        }}>
          <PillList />
        </div>
      )}
    </div>
  );
}

export default FilterSettings;
