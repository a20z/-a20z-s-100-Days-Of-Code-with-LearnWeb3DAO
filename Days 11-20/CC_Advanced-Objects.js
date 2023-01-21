// Codecademy's course on Advanced Objects

// Exercise 1 - The this keyword

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo(){
      return `I am ${this.model} and my current energy level is ${this.energyLevel}`
    }
};
  
console.log(robot.provideInfo());

/*
The this keyword

A function's this keyword behaves a litel differently in JavaScript compared to 
other languages.
In most cases the value of this is determined by how a functio is callled (runtime binding).
It cant be set by assignment during execution, and it may be different each time the function
is called. 

*/

// Exercise 2 - Arrow functions and this 

/*
this does not work woith arrow functions becuase arrow functions inherently bind
an already defined this value to the function iteself that is NOT callin gobject.
*/

const robot = {
    energyLevel: 100,
    checkEnergy: function()  {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}
  
robot.checkEnergy();

// Exerecise 3 - privacy 



const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};


robot._energyLevel = 'high';

// logg : Recharged! Energy is currently at high30%.
robot.recharge();
 /*
  that a funky string is printed to the console! This is known as a side-effect of type-coercion. 
  No need to worry about what this means for now, but it’s important to understand that you can 
  cause unwanted side-effects when mutating objects and their properties.
 */

// Exercise 4 - Getters

A