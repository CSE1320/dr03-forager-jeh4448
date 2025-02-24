import React from "react";
import Pill from "./Pill";
import { pills } from "@/data/development";
import "../styles/globals.css"


export default function PillList () {

    const filtersTags = pills.filter(pill => pill.pillFilterType === 'tags')
    const filtersRegions = pills.filter(pill => pill.pillFilterType === 'regions')
    const filtersCategories = pills.filter(pill => pill.pillFilterType === 'categories')
    //const [selectedPill, setSelectedPill] = useState(null);
    
    // const handlePillClick = (filterType) => {
    //     setSelectedPill(filterType);
    // };
    return (
        <div style={{ backgroundColor: 'white' }}>
        <ul>
                <h1 className="bold-black-title">Tags</h1>
                <li>
                {filtersTags.map((pill, index) => (
                <Pill
                    key={index}
                    pillText={pill.pillText}
                    pillFilterType={pill.filterType}
                    pillSelected={pill.pillSelected}
                    pillColor={pill.pillColor()}
                    //onClick={() => handlePillClick(pill.filterType)} // Optional if you want to perform an action on click
                />
            ))}
        </li>
                <h1 className="bold-black-title">Regions</h1>
                <li>
                {filtersRegions.map((pill, index) => (
                <Pill
                    key={index}
                    pillText={pill.pillText}
                    pillFilterType={pill.filterType}
                    pillSelected={pill.pillSelected}
                    pillColor={pill.pillColor()}
                    //onClick={() => handlePillClick(pill.filterType)} // Optional if you want to perform an action on click
                />
            ))}
        </li>
                <h1 className="bold-black-title">Categories</h1>
                <li>
                {filtersCategories.map((pill, index) => (
                <Pill
                    key={index}
                    pillText={pill.pillText}
                    pillFilterType={pill.filterType}
                    pillSelected={pill.pillSelected}
                    pillColor={pill.pillColor()}
                    //onClick={() => handlePillClick(pill.filterType)} // Optional if you want to perform an action on click
                />
              ))}
             </li>

            
           
        </ul>
        </div>
    );
}
