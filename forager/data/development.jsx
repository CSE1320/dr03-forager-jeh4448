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

const createPill = (text, filterType, selected = false) => ({
    pillText: text,
    pillFilterType: filterType,
    pillSelected: selected,
    pillColor: function() {
        return getPillColor(this.pillSelected);
    }
});

const pills = [
    // Tags
    createPill("Favorites", 'tags', true),
    createPill("Recent", 'tags'),

    // Regions
    createPill("Texas", 'regions'),
    createPill("North America", 'regions'),
    createPill("South America", 'regions'),
    createPill("Asia", 'regions'),
    createPill("Europe", 'regions'),
    createPill("Africa", 'regions'),

    // Categories
    createPill("Poisonous", 'categories'),
    createPill("Medicinal", 'categories'),
    createPill("Mythical", 'categories'),
    createPill("Good for Broths", 'categories')
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
