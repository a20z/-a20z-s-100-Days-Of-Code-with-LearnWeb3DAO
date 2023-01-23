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

/*  Getters are medthods that get and return the internal properties of an object

Notable advantages of using getter methods:

# getters can preform an action on the data when getrting a property
# getters can return different values using conditionals
# in a getter we can access the properties of the calling using this
# the functionality of code becomes easier for developers to understand+

*/

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else return 'System malfunction: cannot retrieve energy level';
  }
};

console.log(robot.energyLevel);

// Exercise 5 - Setters 

// Setter methods reassign values of existing propperties within an object

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors (num){ if (typeof num === 'number' && num >= 0){
    this._numOfSensors = num;
  } else console.log('Pass in a number that is greater than or equal to 0');
  }

};

robot.numOfSensors = 100;

console.log(robot.numOfSensors);

// Execrise 6 -  Factory functions

const robotFactory = (model, mobile) =>{
  return {
    model: model,
    mobile: mobile,
    beep () {
      console.log('Beep Boop');
    }
  };
  
}; 

const tinCan = robotFactory('P-500', true);

tinCan.beep();

// Exercise 7 - Property Value Shorthand

const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

// Exercise 8 - Destructed Assignment

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

// extracts object property to variable
const { functionality } = robot;

functionality.beep();

// Exercise 9 - Built in methods

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
// Object.keys() static method returns an array of a given objects one enumerable string-keyed property pairs
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Object.entries() static method returns an array of a given objects own enumerable string-keyed property value pairs
// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Object.assign() copies all enumerable own properties from one or more source objects to a target object
// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);


/* Review

# the obkect that a method belongs o is called the calling object
# the this keyword refers to the calling object and can be used to access properties of the calling object
# methods do not automatically have access to other internal properties of the calling object
# the value of this depends on where the this is being accesseed from 
# we cannot use arrorw functions as methods if we want to access other internal propertis
# javascript objects do not jave built-in priivacy, rather there are conventions to follow to notify
  other developoers aboout the code
# the usage of an underscore before a property name means that the original developer did not intend for 
  that property to be disrectly changed
# setters and getter methods allow for more detailed ways pf accessing and assigning properties
# factory functions allow us to create object destructuring: one way is the property value shorthand and
  another is destructured asasignment

*/