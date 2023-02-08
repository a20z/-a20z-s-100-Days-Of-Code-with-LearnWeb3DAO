// Alchemy U- JavaScript classes

// 1. Hero

// Within your constructor function, add a health property to a hero instance and set it to 50.

class Hero {
    constructor() {
        this.health = 50;
    }
}

// 2. Take damage

/*
Add a method takeDamage to the hero class. This method should take one number
argument representing the damage. This number should be directly subtracted from the hero's health.
*/

class Hero {
    constructor() {
        this.health = 50;
    }
    takeDamage(damage){
        this.health -= damage;
    }
}

module.exports = Hero;

// Warrior

// Extend Hero: Warrior.js, modify the Warrior to extend the Hero class.

const Hero = require('./Hero');

class Warrior extends Hero {
    
}

module.exports = Warrior;

// Super Warrior

// Add range: Add a rage property to the Warrior. The value of rage will start at 0.

const Hero = require('./Hero');

class Warrior extends Hero {
    constructor(){
        super();
        this.rage = 0;
    }
    
}

