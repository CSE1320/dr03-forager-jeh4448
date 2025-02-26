'use client';
import React, { useState } from 'react';
import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import dashboard from "./dashboard.png"
import filterIcon from "../../public/icons/FilterIcon.png"
import PillList from "../../components/PillList"


export default function DashboardPage() {
  const [isPillListVisible, setPillListVisible] = useState(false);

  const togglePillList = () => {
    setPillListVisible(prev => !prev);
  }

  return (
    <div style={{
      backgroundImage: `url(${dashboard.src})`, // Use background.src for the image URL
      backgroundSize: 'cover', // Cover the entire area
      backgroundPosition: 'center', // Center the background image
      height: '100vh', // Adjust height as necessary
      position: 'relative',
    }}>
      <NavBar />
      
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
          //boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Optional: shadow for depth
        }}>
          <PillList />
        </div>
      )}
    </div>
  );
}
