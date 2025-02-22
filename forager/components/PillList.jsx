import React from "react";
import Pill from "./Pill";
import { pills } from "@/data/development";

export default function PillList () {

    const filtersTags = pills.filter(pill => pill.pillFilterType === 'tags')
    const filtersRegions = pills.filter(pill => pill.pillFilterType === 'regions')
    const filtersCategories = pills.filter(pill => pill.pillFilterType === 'categories')

    return (

        <ul>
            <li>
                <h1>Tags</h1>
                <h1>Regions</h1>
                <h1>Categories</h1>
            </li>
        </ul>
    );
}
