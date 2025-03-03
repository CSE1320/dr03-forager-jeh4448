// DashboardPage.jsx

'use client';
import React, { useState } from 'react';
import NavBar from '../../components/NavBar'; 
import FilterSettings from '../../components/FilterSetting'; 
import SearchBar from "../../components/Search";
import mushroomData from "../../data/Mushrooms"; // Adjust the import path accordingly
import MushroomCard from "@/components/Mushroom";

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
        <div style={{
            backgroundImage: `url(${"/dashboard.png"})`, // Use background.src for the image URL
            backgroundSize: 'cover', // Cover the entire area
            backgroundPosition: 'center', // Center the background image
            height: '100vh', // Adjust height as necessary
            position: 'relative',
            padding: '20px', 
        }}>
            <NavBar />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <FilterSettings 
                isPillListVisible={isPillListVisible} 
                togglePillList={togglePillList} 
                buttonStyle={filterButtonStyle} // Pass the button style here
            />
            <div className="page flex justify-center items-center flex-wrap mt-3" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '20px', // Space between cards
                padding: '20px', // Padding around the card container
            }}>
                {filteredMushrooms.map((mushroom, index) => (
                    <MushroomCard key={index} mushroom={mushroom} card={true} /> // true for basic cards, false for extended information
                ))}
            </div>
        </div>
    );
}
