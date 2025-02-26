// DashboardPage.jsx

'use client';
import React, { useState } from 'react';
import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import dashboard from "./dashboard.png";
import FilterSettings from '../../components/FilterSetting'; // Adjust the path as necessary

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
      
      {/* Pass the state and function as props to FilterSettings */}
      <FilterSettings 
        isPillListVisible={isPillListVisible} 
        togglePillList={togglePillList} 
      />
    </div>
  );
}
