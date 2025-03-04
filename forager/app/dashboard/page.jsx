// DashboardPage Component
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from '../../components/NavBar'; 
import FilterSettings from '../../components/FilterSetting'; 
import SearchBar from "../../components/Search";
import Pill from '../../components/Pill'; 
import mushroomData from "../../data/Mushrooms"; 
import MushroomCard from "@/components/Mushroom";
import '../../styles/DashboardPage.css'; 
import PillList from "../../components/PillList";

export default function DashboardPage() {
  const [isPillListVisible, setPillListVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPills, setSelectedPills] = useState({}); // Track selected pills

  const togglePillList = () => {
    setPillListVisible(prev => !prev);
  };

  const handlePillSelectionChange = (newSelectedPills) => {
    setSelectedPills(newSelectedPills);
  };

  const handlePillClick = (pillText) => {
    setSelectedPills(prev => ({
      ...prev,
      [pillText]: !prev[pillText], // Toggle the selected state
    }));
  };

  const handleExitPillList = () => {
    setPillListVisible(false);
  };

  const filteredMushrooms = mushroomData.mushroomCards.filter(mushroom => {
    const matchesSearchTerm = mushroom.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSelectedPills = Object.keys(selectedPills).filter(pillText => selectedPills[pillText]).every(pillText => {
      if (pillText === "Favorites") {
        return mushroom.features.is_favorite; // Check if it's a favorite
      } else if (pillText === "North America" || pillText === "Europe" || pillText === "Asia" || pillText === "Africa" || pillText === "South America") {
        return mushroom.region === pillText; // Check if the region matches
      } else if (pillText === "Poisonous") {
        return mushroom.features.is_toxic; // Check if it's poisonous
      } else if (pillText === "Medicinal") {
        // Assuming a property indicating if it's medicinal (this needs to be defined in your data)
        return mushroom.features.is_medicinal; // Check if it's medicinal (assuming you have this property)
      }
      // Add more conditions based on your pill definitions
      return true; // Default to true if the pill doesn't match any known filters
    });

    return matchesSearchTerm && matchesSelectedPills;
  });

  return (
    <div className="dashboard-container">
      <NavBar />
      {!isPillListVisible && (
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}
      <FilterSettings 
        isPillListVisible={isPillListVisible} 
        togglePillList={togglePillList} 
      />

      {/* Render selected pills below SearchBar */}
      <div className="selected-pills">
        {Object.keys(selectedPills).filter(pillText => selectedPills[pillText]).map(pillText => (
          <Pill 
            key={pillText} 
            pillText={pillText} 
            pillSelected={true} 
            onPillClick={() => handlePillClick(pillText)} 
          />
        ))}
      </div>

      {/* Render PillList and pass the selection change handler with a fixed height */}
      {isPillListVisible && (
        <div className="pill-list-container">
          <button onClick={handleExitPillList} className="exit-button">Exit</button> {/* Exit button */}
          <PillList onSelectionChange={handlePillSelectionChange} />
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 mt-3">
        {!isPillListVisible && filteredMushrooms.map((mushroom, index) => (
          <Link 
            key={index} 
            href={{
              pathname: '/mushroom',
              query: { mushroom: JSON.stringify(mushroom) }, 
            }} 
            style={{ textDecoration: 'none' }} 
          >
            <div onClick={(e) => e.stopPropagation()} style={{ cursor: 'pointer' }}>
              <MushroomCard 
                mushroom={mushroom} 
                card={true} 
                style={{ width: '134px', height: '169px' }} 
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
