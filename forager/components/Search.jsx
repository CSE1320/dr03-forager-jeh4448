'use client';

import React from 'react';
const glass = "/SearchGlass.png";
const bar = "/SearchBar.png";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            {/* <img src={bar} alt="Search Bar" style={{ width: '30px', height: '200px' }} /> */}
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="search for a mushroom"
                style={{
                    width: '75%',
                    height: '100%',
                    border: 'none',
                    outline: 'none',
                    color: 'black',
                    paddingLeft: '40px', // Adjust padding to make space for the glass image
                    fontSize: '16px',
                    position: 'relative',
                    zIndex: 1, // Ensure the input is above the bar image
                    left: '20px',
                    textAlign: 'center',
                }}
            />
            <img
                src={glass}
                alt="Search Glass"
                style={{
                    position: 'absolute',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: '1'
                }}
            />
        </div>
    );
};

export default SearchBar;
