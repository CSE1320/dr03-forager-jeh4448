'use client';
import React, { useState } from 'react';
import NavBar from '../../components/NavBar'; 
import FilterSettings from '../../components/FilterSetting'; 
import SearchBar from "../../components/Search";
import mushroomData from "../../data/Mushrooms"; // Adjust the import path accordingly
import MushroomCard from "@/components/Mushroom";
import '../../styles/DashboardPage.css'; // Adjust the path as necessary

export default function DashboardPage() {
  const [isPillListVisible, setPillListVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredMushrooms = mushroomData.mushroomCards.filter(mushroom =>
    mushroom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <NavBar />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterSettings 
        isPillListVisible={isPillListVisible} 
        togglePillList={togglePillList} 
        buttonStyle={filterButtonStyle} // Pass the button style here
      />
      <div className="grid grid-cols-3 gap-4 mt-3">
        {filteredMushrooms.map((mushroom, index) => (
          <MushroomCard 
            key={index} 
            mushroom={mushroom} 
            card={true} 
            style={{ width: '134px', height: '169px' }} // Add inline styles here if needed
          />
        ))}
      </div>
    </div>
  );
}
