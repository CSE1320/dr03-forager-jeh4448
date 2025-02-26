'use client';

import React, { useState } from "react";
import Pill from "./Pill";
import { pills } from "@/data/development";
import "../styles/globals.css";

export default function PillList() {
    const filtersTags = pills.filter(pill => pill.pillFilterType === 'tags');
    const filtersRegions = pills.filter(pill => pill.pillFilterType === 'regions');
    const filtersCategories = pills.filter(pill => pill.pillFilterType === 'categories');

    const [selectedPills, setSelectedPills] = useState(
        pills.reduce((acc, pill) => {
            acc[pill.pillText] = pill.pillSelected; // Initialize state based on the initial pills data
            return acc;
        }, {})
    );

    const updatePill = (pillText) => {
        setSelectedPills(prevState => ({
            ...prevState,
            [pillText]: !prevState[pillText] // Toggle the selected state
        }));
    };

    return (
        <div style={{ backgroundColor: '#F2F2F2' }}>
            <h1 style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>FILTERS</h1>
            <h1 className="bold-black-title">Tags</h1>
            <ul>
                {filtersTags.map((pill, index) => (
                    <Pill
                        key={index}
                        pillText={pill.pillText}
                        pillFilterType={pill.filterType}
                        pillSelected={selectedPills[pill.pillText]} // Pass selected state from PillList
                        pillColor={pill.pillColor()}
                        onPillClick={() => updatePill(pill.pillText)} // Call updatePill on click
                    />
                ))}
            </ul>
            <h1 className="bold-black-title">Regions</h1>
            <ul>
                {filtersRegions.map((pill, index) => (
                    <Pill
                        key={index}
                        pillText={pill.pillText}
                        pillFilterType={pill.filterType}
                        pillSelected={selectedPills[pill.pillText]}
                        pillColor={pill.pillColor()}
                        onPillClick={() => updatePill(pill.pillText)}
                    />
                ))}
            </ul>
            <h1 className="bold-black-title">Categories</h1>
            <ul>
                {filtersCategories.map((pill, index) => (
                    <Pill
                        key={index}
                        pillText={pill.pillText}
                        pillFilterType={pill.filterType}
                        pillSelected={selectedPills[pill.pillText]}
                        pillColor={pill.pillColor()}
                        onPillClick={() => updatePill(pill.pillText)}
                    />
                ))}
            </ul>
        </div>
    );
}
