import React from "react";
import Pill from "./Pill";
import { pills } from "@/data/development";

export default function PillList () {

    const filtersTags = pills.filter(pill => pill.pillFilterType === 'tags')
    const filtersRegions = pills.filter(pill => pill.pillFilterType === 'regions')
    const filtersCategories = pills.filter(pill => pill.pillFilterType === 'categories')
    //const [selectedPill, setSelectedPill] = useState(null);

    // const handlePillClick = (filterType) => {
    //     setSelectedPill(filterType);
    // };
    return (
        
        <ul>
            <li>
                <h1>Tags</h1>
                <h1>Regions</h1>
                <h1>Categories</h1>
            </li>

            <div>
            <h1>Select a Pill</h1>
            {filtersTags.map((pill, index) => (
                <Pill
                    key={index}
                    pillText={pill.pillText}
                    pillFilterType={pill.filterType}
                    //pillSelected={selectedPill === pill.filterType}
                    pillColor={pill.color}
                    //onClick={() => handlePillClick(pill.filterType)} // Optional if you want to perform an action on click
                />
            ))}
        </div>
            <div>
            {filtersTags.map((tag, index) => (
                <div key={index} style={{ backgroundColor: tag.pillColor }}>
                    {tag.pillText}
                </div>
            ))}
        </div>
        </ul>
    );
}
