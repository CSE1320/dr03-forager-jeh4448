'use client'
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar'; 
import mushroomData from "../data/Mushrooms"; // Adjust the import path accordingly
import MushroomCard from '@/components/Mushroom';

// Function to find mushroom by ID
const findMushroomById = (id) => {
    return mushroomData.mushroomCards.find(mushroom => mushroom.id === id); // Assuming each mushroom has a unique 'id'
};

export default function ComparisonTable({ mushroomId }) {
    const chosenMushroom = findMushroomById(mushroomId) || mushroomData.mushroomCards[0]; // Default to first if not found
    const bestFitMushroom = mushroomData.mushroomCards[1]; // assuming Destroying Angel is the second entry

    const [editableCharacteristics, setEditableCharacteristics] = useState({
        diameter: chosenMushroom.characteristics.diameter,
        gill_color: chosenMushroom.characteristics.gill_color,
        cap_shape: chosenMushroom.characteristics.cap_shape,
        cap_color: chosenMushroom.characteristics.cap_color,
        cap_texture: chosenMushroom.characteristics.cap_texture,
        gills_type: chosenMushroom.characteristics.gills_type,
        gills_color: chosenMushroom.characteristics.gills_color,
        stem_shape: chosenMushroom.characteristics.stem_shape,
        stem_color: chosenMushroom.characteristics.stem_color,
        stem_ring: chosenMushroom.characteristics.stem_ring,
        habitat: chosenMushroom.characteristics.habitat,
    });

    // Update editable characteristics when chosenMushroom changes
    useEffect(() => {
        setEditableCharacteristics({
            diameter: chosenMushroom.characteristics.diameter,
            gill_color: chosenMushroom.characteristics.gill_color,
            cap_shape: chosenMushroom.characteristics.cap_shape,
            cap_color: chosenMushroom.characteristics.cap_color,
            cap_texture: chosenMushroom.characteristics.cap_texture,
            gills_type: chosenMushroom.characteristics.gills_type,
            gills_color: chosenMushroom.characteristics.gills_color,
            stem_shape: chosenMushroom.characteristics.stem_shape,
            stem_color: chosenMushroom.characteristics.stem_color,
            stem_ring: chosenMushroom.characteristics.stem_ring,
            habitat: chosenMushroom.characteristics.habitat,
        });
    }, [chosenMushroom]);

    // Handler to update state
    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditableCharacteristics({
            ...editableCharacteristics,
            [name]: value,
        });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
            {/* Container for MushroomCards */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                {/* Render MushroomCard for chosenMushroom */}
                <MushroomCard mushroom={chosenMushroom} card={true} />
                
                {/* Render MushroomCard for bestFitMushroom */}
                <MushroomCard mushroom={bestFitMushroom} card={true} />
            </div>
            
            {/* Table displaying characteristics */}
            <table style={{ marginTop: '20px', borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>{chosenMushroom.name} ({chosenMushroom.scientific_name})</th>
                        <th>Mushroom Characteristics</th>
                        <th>{bestFitMushroom.name} ({bestFitMushroom.scientific_name})</th>
                    </tr>
                </thead>
                <tbody style={{ border: '1px solid black' }}>
                    {Object.entries(editableCharacteristics).map(([key, value]) => (
                        <tr key={key}>
                            <td style={{ border: '1px solid black' }}>
                                <input 
                                    type="text" 
                                    name={key} 
                                    value={value} 
                                    onChange={handleChange} 
                                    style={{ width: '100%', border: 'none', outline: 'none' }} 
                                />
                            </td>
                            <td style={{ border: '1px solid black' }}>{key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}</td>
                            <td style={{ border: '1px solid black' }}>{bestFitMushroom.characteristics[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
