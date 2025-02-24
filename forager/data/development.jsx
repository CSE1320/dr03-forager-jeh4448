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
        pillSelected: false,
        pillColor: () => {
            if (this.pillSelected === false) {
                return 'grey';
            } else {
                return 'green';
            }
        }
    },    
    {
        pillText: "Recent",
        pillFilterType: 'tags',
        pillSelected: false,
        pillColor: () => {
            if(this.pillSelected === false){
                return 'grey'
            }
            else{
                return 'green'
            }
        }
    },

    // Regions
    {
        pillText: "Texas",
        pillFilterType: 'regions',
        pillSelected: false,
        pillColor: () => {
            if(this.pillSelected === false){
                return 'grey'
            }
            else{
                return 'green'
            }
        }
    },
    {
        pillText: "North America",
        pillFilterType: 'regions',
        pillSelected: false,
        pillColor: () => {
            if(this.pillSelected === false){
                return 'grey'
            }
            else{
                return 'green'
            }
        }
    },
    {
        pillText: "South America",
        pillFilterType: 'regions',
        pillSelected: false,
        pillColor: () => {
            if(this.pillSelected === false){
                return 'grey'
            }
            else{
                return 'green'
            }
        }
    },
    {
        pillText: "Asia",
        pillFilterType: 'regions',
        pillSelected: false,
        pillColor: () => {
            if(this.pillSelected === false){
                return 'grey'
            }
            else{
                return 'green'
            }
        }
    },
    {
        pillText: "Europe",
        pillFilterType: 'regions',
        pillSelected: false,
        pillColor: () => {
            if(this.pillSelected === false){
                return 'grey'
            }
            else{
                return 'green'
            }
        }
    },
    {
        pillText: "Africa",
        pillFilterType: 'regions',
        pillSelected: false,
        pillColor: () => {
            if(this.pillSelected === false){
                return 'grey'
            }
            else{
                return 'green'
            }
        }
    },

    // Categories
    {
        pillText: "Poisonous",
        pillFilterType: 'categories',
        pillSelected: false,
        pillColor: () => {
            if(this.pillSelected === false){
                return 'grey'
            }
            else{
                return 'green'
            }
        }
    },
    {
        pillText: "Medicinal",
        pillFilterType: 'categories',
        pillSelected: false,
        pillColor: () => {
            if(this.pillSelected === false){
                return 'grey'
            }
            else{
                return 'green'
            }
        }
    },
    {
        pillText: "Mythical",
        pillFilterType: 'categories',
        pillSelected: false,
        pillColor: () => {
            if(this.pillSelected === false){
                return 'grey'
            }
            else{
                return 'green'
            }
        }
    },
    {
        pillText: "Good for Broths",
        pillFilterType: 'categories',
        pillSelected: false,
        pillColor: () => {
            if(this.pillSelected === false){
                return 'grey'
            }
            else{
                return 'green'
            }
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
