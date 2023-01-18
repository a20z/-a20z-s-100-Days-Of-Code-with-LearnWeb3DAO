// Codecademy's course on objects

// Exercise 1 Creating Object literals

let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
};

// Exercise 2 - Accessing Properties

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

// Accesses object properties
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;


// Exercise 3 - Bracket Notation

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
};
  
let propName =  'Active Mission';
  
// Write your code below
let isActive = spaceship['Active Mission'];
// logs true
console.log(spaceship['Active Mission']);

// Exercise 4 - Property Assignement

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};
  
// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 8;
delete spaceship['Secret Mission'];
  

// Exercise 5 - Methods

// A property is what an object has, while a method is what an object does

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

const alienship = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!');
  } 
};

alienship.retreat();
alienship.takeOff();

// Exercise 6 - Nested Objects

let spaceship = {
  passengers: [{name: 'Klaes Ashford'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];
let firstPassenger = spaceship.passengers[0];


// Exercisie 7 - Pass by reference

/*

Objects are passed by reference, meaning when we pass a variable assigned to 
  an object into a function as an argument, the computer interprets the parametrer name 
  as pointing to the space in memory holding that object. As a result, functions which
  change object properties actually mutate the object permanently 

*/

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
function greenEnergy(tardis){
  tardis['Fuel Type'] = 'avocado oil'
};

function remotelyDisable(timeBomb){
  timeBomb['disabled'] = true;
};

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);

// Exercise 8 - Looping through objects

/*

The for...in statement iterates over all enumerable string properties of an object
  (ignoring properties keyed by syumbols), including inherited enumerable properties

*/

let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// Write your code below
for (let crewMember in spaceship.crew){
console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
};

for (let academics in spaceship.crew){
console.log(`${spaceship.crew[academics].name}: ${spaceship.crew[academics].degree}`);
};

/* Review

# objects store collections of key-value pairs
# each key-value pair is a property - when a property is a function it is known as method
# an object literal is composed of comma-seperated key_value pairs surrounded by {}
# you can access, add or edit property within an object by using dot notation or bracket notation
# we can add methods to our object literals using key-value syntax with anonnymous function expressions 
    as values or by usiing ES6 method syntax
# we can navigate complex, nested objects by chaining operators
# objects are mutable - we can change their properties even when they're deceaired with syntax
# objects are passed by refferencer - when we make changes to an object passed into a function, 
    those changes are permanent
# we can iterater through objects using the for ... in syntax 


*/