"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    // Constructor:
    // Parameter name should be a string.
    // Parameter totalCapacityKg should be a number.
    // Sets value of this.name and this.totalCapacityKg
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    ;
    // Methods:
    // sumMass( items: Payload[] ): number
    // Returns the sum of all items using each item's massKg property
    Rocket.prototype.sumMass = function (items) {
        var totalMass = 0;
        for (var i = 0; i < items.length; i++) {
            totalMass += items[i].massKg;
        }
        return totalMass;
    };
    // currentMassKg(): number
    // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    Rocket.prototype.currentMassKg = function () {
        var currentMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentMass;
    };
    // canAdd(item: Payload): boolean
    // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            console.log("Cannot Add");
            return false;
        }
    };
    // addCargo(cargo: Cargo): boolean
    // Uses this.canAdd() to see if another item can be added.
    // If true, adds cargo to this.cargoItems and returns true.
    // If false, returns false.
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            console.log("Did not add cargo");
            return false;
        }
    };
    // addAstronaut(astronaut: Astronaut): boolean
    // Uses this.canAdd() to see if another astronaut can be added.
    // If true, adds astronaut to this.astronauts and returns true.
    // If false, returns false.
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            console.log("Did not add cargo");
            return false;
        }
    };
    return Rocket;
}());
