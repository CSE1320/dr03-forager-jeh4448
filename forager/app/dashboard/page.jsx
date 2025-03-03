// DashboardPage Component
'use client'
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
  }

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

  const filteredMushrooms = mushroomData.mushroomCards.filter(mushroom =>
    mushroom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
