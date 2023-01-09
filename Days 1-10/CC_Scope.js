// Exercise 1 of Scope - Codecademy

// This exercise in particular looks at Blocks and Scope

const city = 'New York City';

function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
};

console.log(logCitySkyline());

// Exercise 2 - Global scope

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());


// Exercise 3 - Block 3 

function logVisibleLightWaves(){
  const lightWaves = 'Moonlight';
  console.log(lightWaves); 
  
};

logVisibleLightWaves();

// This produces an error massage
console.log(lightWaves);



// Exercise 4 - Scope Polution

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  // This changes the global value of stars
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());

// Logs "Sirius"
console.log(stars)


// Exercise 6 

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    // Logs 'Northern Lights'
    console.log(lightWaves);
  };
  // Logs 'Moonligt'
 console.log(lightWaves);
};

logVisibleLightWaves();


/* Scope Review

Scope refers to where variables can be accessed throughout the program, and is determined by where and how they are declared.
Blocks are statements that exist within curly braces {}.
Global scope refers to the context within which variables are accessible to every part of the program.
Global variables are variables that exist within global scope.
Block scope refers to the context within which variables are accessible only within the block they are defined.
Local variables are variables that exist within block scope.
Global namespace is the space in our code that contains globally scoped information.
Scope pollution is when too many variables exist in a namespace or variable names are reused.

*/
