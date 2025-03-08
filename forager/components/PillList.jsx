import React, { useState, useCallback } from "react"; 
import Pill from "./Pill";
import { pills } from "@/data/pill.json";
import "../styles/globals.css";
import background from "../app/dashboard/Rectangle.png";

// Debounce function to limit the rate of function calls
const useDebounce = (callback, delay) => {
    const [timer, setTimer] = useState(null);

    const debouncedCallback = useCallback((...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        setTimer(setTimeout(() => {
            callback(...args);
        }, delay));
    }, [callback, delay, timer]);

    return debouncedCallback;
};

export default function PillList({ onSelectionChange }) {
    const filtersTags = pills.filter(pill => pill.pillFilterType === 'tags');
    const filtersRegions = pills.filter(pill => pill.pillFilterType === 'regions');
    const filtersCategories = pills.filter(pill => pill.pillFilterType === 'categories');

    const [selectedPills, setSelectedPills] = useState(
        pills.reduce((acc, pill) => {
            acc[pill.pillText] = pill.pillSelected; 
            return acc;
        }, {})
    );

    const debouncedOnSelectionChange = useDebounce(onSelectionChange, 300);

    const updatePill = (pillText) => {
        setSelectedPills(prevState => {
            const newState = {
                ...prevState,
                [pillText]: !prevState[pillText] 
            };
            debouncedOnSelectionChange(newState); 
            return newState;
        });
    };

    return (
        <div style={{ 
            backgroundImage: `url(${background.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50vh',
            marginTop: '0px',
            position: 'relative',
            bottom:'0',
        }}>
            <h1 style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>FILTERS</h1>
            <h1 className="bold-black-title">Tags</h1>
            <ul>
                {filtersTags.map((pill, index) => (
                    <Pill
                        key={index}
                        pillText={pill.pillText}
                        pillFilterType={pill.filterType}
                        pillSelected={selectedPills[pill.pillText]}
                        isDisabled={pill.pillSelected === "disabled"} // Check if the pill is disabled
                        onPillClick={() => updatePill(pill.pillText)}
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
                        isDisabled={pill.pillSelected === "disabled"} // Check if the pill is disabled
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
                        isDisabled={pill.pillSelected === "disabled"} // Check if the pill is disabled
                        onPillClick={() => updatePill(pill.pillText)}
                    />
                ))}
            </ul>
        </div>
    );
}

// Default props
PillList.defaultProps = {
    onSelectionChange: () => {}, 
};
