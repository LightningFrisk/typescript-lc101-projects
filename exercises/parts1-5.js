"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
var daysToMars = (kilometersToMars / (milesPerKilometer * speedMph)) / 24;
//console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hours = milesAway / speedMph;
    return hours / 24;
}
getDaysToLocation(kilometersToMars);
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`);
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to Mars.`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToMars = milesAway / this.speedMph;
        return hoursToMars / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var defiance = new Spacecraft("Defiance", 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log("".concat(defiance.name, " would take ").concat(defiance.getDaysToLocation(kilometersToMars), " days to get to Mars."));
console.log("".concat(defiance.name, " would take ").concat(defiance.getDaysToLocation(kilometersToTheMoon), " days to get to Mars."));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
defiance.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
defiance.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));