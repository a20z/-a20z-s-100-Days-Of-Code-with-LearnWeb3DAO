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

