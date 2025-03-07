'use client';
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar'; 
import mushroomDataJson from "../data/Mushrooms"; // Ensure correct import path
import MushroomCard from '@/components/Mushroom';

export default function ComparisonTable({ mushroomIndex }) {
    // Log the index for debugging
    console.log('Selected Mushroom Index:', mushroomIndex);

    // Handle case where the index might be out of bounds
    const chosenMushroom = mushroomIndex >= 0 && mushroomIndex < mushroomDataJson.mushroomCards.length
        ? mushroomDataJson.mushroomCards[mushroomIndex]
        : mushroomDataJson.mushroomCards[0]; // Default to the first mushroom if index is invalid

    // Assuming the 'best fit' mushroom is the second entry in the list
    const bestFitMushroom = mushroomDataJson.mushroomCards[1] || null; // Ensure it defaults correctly

    const [editableCharacteristics, setEditableCharacteristics] = useState({});

    // Update editable characteristics when chosenMushroom changes
    useEffect(() => {
        if (chosenMushroom) {
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
        }
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px', color: '#203B5F' }}>
            {/* Container for MushroomCards */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                {/* Render MushroomCard for chosenMushroom */}
                <MushroomCard mushroom={chosenMushroom} card={true}/>
                
                {/* Render MushroomCard for bestFitMushroom */}
                {bestFitMushroom && (
                    <MushroomCard mushroom={bestFitMushroom} card={true} baseMushroom={chosenMushroom}/>
                )}
            </div>
            
            {/* Table displaying characteristics */}
            <table style={{ marginTop: '20px', borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>{chosenMushroom.name} ({chosenMushroom.scientific_name})</th>
                        <th>Mushroom Characteristics</th>
                        <th>{bestFitMushroom ? bestFitMushroom.name : 'Not Available'} ({bestFitMushroom ? bestFitMushroom.scientific_name : 'N/A'})</th>
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
                                    style={{ width: '100%', border: 'none', outline: 'none', color: '#203B5F' }} 
                                />
                            </td>
                            <td style={{ border: '1px solid black', color: '#203B5F' }}>{key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}</td>
                            <td style={{ border: '1px solid black', color: '#203B5F' }}>{bestFitMushroom ? bestFitMushroom.characteristics[key] : 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
