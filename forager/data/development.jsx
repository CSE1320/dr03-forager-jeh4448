// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const pills = [
    // Tags
    {
        pillText: "Favorites",
        pillFilterType: 'tags',
        pillSelected: 'unselected',
        pillColor: 'gray'
    },
    {
        pillText: "Recent",
        pillFilterType: 'tags',
        pillSelected: 'unselected',
        pillColor: 'gray'
    },

    // Regions
    {
        pillText: "Texas",
        pillFilterType: 'regions',
        pillSelected: 'unselected',
        pillColor: 'gray'
    },
    {
        pillText: "North America",
        pillFilterType: 'regions',
        pillSelected: 'unselected',
        pillColor: 'gray'
    },
    {
        pillText: "South America",
        pillFilterType: 'regions',
        pillSelected: 'unselected',
        pillColor: 'gray'
    },
    {
        pillText: "Asia",
        pillFilterType: 'regions',
        pillSelected: 'unselected',
        pillColor: 'gray'
    },
    {
        pillText: "Europe",
        pillFilterType: 'regions',
        pillSelected: 'unselected',
        pillColor: 'gray'
    },
    {
        pillText: "Africa",
        pillFilterType: 'regions',
        pillSelected: 'unselected',
        pillColor: 'gray'
    },

    // Categories
    {
        pillText: "Poisonous",
        pillFilterType: 'categories',
        pillSelected: 'unselected',
        pillColor: 'gray'
    },
    {
        pillText: "Medicinal",
        pillFilterType: 'categories',
        pillSelected: 'unselected',
        pillColor: 'gray'
    },
    {
        pillText: "Mythical",
        pillFilterType: 'categories',
        pillSelected: 'unselected',
        pillColor: 'gray'
    },
    {
        pillText: "Good for Broths",
        pillFilterType: 'categories',
        pillSelected: 'unselected',
        pillColor: 'gray'
    }
];

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};

// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {pills}; // Requires import {warningMessage, dummyData} from './data/development.js';
