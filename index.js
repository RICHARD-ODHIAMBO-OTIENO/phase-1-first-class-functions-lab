// Create a variable function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
};

// Creation of a variable with assigned anonymous function

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

// create an array that contains two elements
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//Create fare Multiplier
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

// Creating a function that doubles the fare
const fareDoubler = createFareMultiplier(2);

// variable declaration 
const fareTripler = createFareMultiplier(3);

// create a fuction  that takes two two arguments
function selectDifferentDrivers(drivers, selector) {
    return selector(drivers);
};