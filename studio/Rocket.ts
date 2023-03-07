// Defined in Rocket.ts.
import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';


export class Rocket {
    // Properties:
    // name should be a string.
    // totalCapacityKg should be a number.

    // cargoItems should be an array of Cargo objects.
    // Should be initialized to an empty array []

    // astronauts should be an array of Astronaut objects.
    // Should be initialized to an empty array []
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    // Constructor:
    // Parameter name should be a string.
    // Parameter totalCapacityKg should be a number.
    // Sets value of this.name and this.totalCapacityKg
    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    };

// Methods:
// sumMass( items: Payload[] ): number
// Returns the sum of all items using each item's massKg property
    sumMass( items: Payload[] ): number{
        let totalMass: number = 0;
        for (let i: number = 0; i < items.length; i++){
            totalMass += items[i].massKg;
        }
        return totalMass;
    }

// currentMassKg(): number
// Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems

    currentMassKg(): number {
       let currentMass:number = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
       return currentMass;
    }

// canAdd(item: Payload): boolean
// Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        } else {
            console.log("Cannot Add");
            return false;
        }
    }

// addCargo(cargo: Cargo): boolean
// Uses this.canAdd() to see if another item can be added.
// If true, adds cargo to this.cargoItems and returns true.
// If false, returns false.
    addCargo(cargo:Cargo): boolean {
        if (this.canAdd(cargo) === true){
            this.cargoItems.push(cargo);
            return true;
        } else {
            console.log("Did not add cargo")
            return false;
        }
    }

// addAstronaut(astronaut: Astronaut): boolean
// Uses this.canAdd() to see if another astronaut can be added.
// If true, adds astronaut to this.astronauts and returns true.
// If false, returns false.
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            return true;
        } else {
            console.log("Did not add cargo")
            return false;
        }
    }
}