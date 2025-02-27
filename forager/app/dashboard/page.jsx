// DashboardPage.jsx

'use client';
import React, { useState } from 'react';
import NavBar from '../../components/NavBar'; 
//import dashboard from "/dashboard.png";
import FilterSettings from '../../components/FilterSetting'; 
import SearchBar from "../../components/Search";
import MushroomList from '../../components/MushroomList';
const mushroomCard  = '../../components/Mushroom';

export default function DashboardPage() {
  const [isPillListVisible, setPillListVisible] = useState(false);

  const togglePillList = () => {
    setPillListVisible(prev => !prev);
  }

  // Button style object
  const filterButtonStyle = {
    position: 'absolute',
    top: '200px', // Adjust top position
    right: '33px', // Adjust right position
    background: 'none', // Remove default button background
    border: 'none', // Remove default button border
    cursor: 'pointer', // Change cursor to pointer
    outline: 'none', // Remove outline on focus
  };



  return (
    <div style={{
      backgroundImage: `url(${"/dashboard.png"})`, // Use background.src for the image URL
      backgroundSize: 'cover', // Cover the entire area
      backgroundPosition: 'center', // Center the background image
      height: '100vh', // Adjust height as necessary
      position: 'relative',
      padding: '20px', 
    }}>
      <NavBar />
      {!isPillListVisible && <SearchBar />}
      <FilterSettings 
        isPillListVisible={isPillListVisible} 
        togglePillList={togglePillList} 
        buttonStyle={filterButtonStyle} // Pass the button style here
      />
      <MushroomList specificMushroomCard={mushroomCard} />
    </div>
  );
}
