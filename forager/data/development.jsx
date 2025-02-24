// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

function getPillColor(pillSelected) {
    if (pillSelected === false) {
        return '#D9D9D9';
    } else if (pillSelected === true) {
        return '#579076';
    } else {
        return 'red'; // error checking purposes/ ineffective
    }
}

const pills = [
    // Tags
    {
        pillText: "Favorites",
        pillFilterType: 'tags',
        pillSelected: true,
        pillColor: function() {
            return getPillColor(this.pillSelected)
        }
    },
    {
        pillText: "Recent",
        pillFilterType: 'tags',
        pillSelected: false,
        pillColor: function() {
            return getPillColor(this.pillSelected)
        }
    },

    // Regions
    {
        pillText: "Texas",
        pillFilterType: 'regions',
        pillSelected: false,
        pillColor: function() {
            return getPillColor(this.pillSelected)
        }
    },
    {
        pillText: "North America",
        pillFilterType: 'regions',
        pillSelected: false,
        pillColor: function() {
            return getPillColor(this.pillSelected)
        }
    },
    {
        pillText: "South America",
        pillFilterType: 'regions',
        pillSelected: false,
        pillColor: function() {
            return getPillColor(this.pillSelected)
        }
    },
    {
        pillText: "Asia",
        pillFilterType: 'regions',
        pillSelected: false,
        pillColor: function() {
            return getPillColor(this.pillSelected)
        }
    },
    {
        pillText: "Europe",
        pillFilterType: 'regions',
        pillSelected: false,
        pillColor: function() {
            return getPillColor(this.pillSelected)
        }
    },
    {
        pillText: "Africa",
        pillFilterType: 'regions',
        pillSelected: false,
        pillColor: function() {
            return getPillColor(this.pillSelected)
        }
    },

    // Categories
    {
        pillText: "Poisonous",
        pillFilterType: 'categories',
        pillSelected: false,
        pillColor: function() {
            return getPillColor(this.pillSelected)
        }
    },
    {
        pillText: "Medicinal",
        pillFilterType: 'categories',
        pillSelected: false,
        pillColor: function() {
            return getPillColor(this.pillSelected)
        }
    },
    {
        pillText: "Mythical",
        pillFilterType: 'categories',
        pillSelected: false,
        pillColor: function() {
            return getPillColor(this.pillSelected)
        }
    },
    {
        pillText: "Good for Broths",
        pillFilterType: 'categories',
        pillSelected: false,
        pillColor: function() {
            return getPillColor(this.pillSelected)
        }
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
