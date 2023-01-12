// Codecademy's Lessons on Arrays

// Exercise 1 - Repeating Tasks Manually

// Shows the need to automate tasks with loops
const vacationSpots = ['Mexico', 'Norway', 'China'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// Exercise 2 - The For Loop

/*

Sample Syntax for a FOR Loop:

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

*/

for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  }
  
  // above loop logs 5-10 to the conosole

// Exercise 3 - Looping in Reverse

/*

To run a backward loop: 
set the iterator variable to the highest value in the initialization expression,
set the stopping coondition for when the iterator variable is less than the desired amount, 
the iterator should decrease in ternvals after each iteration

*/

// Loop logs backward from 3 to 0

for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }

// Exercise 4 - Looping through Arrays

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below

// To loop through each element in an array, a for loop should use the array’s .length property in its condition.

for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]); 
}


// Exercise 5 - Nested Loops

const bobsFollowers = ['Grim', 'Mandy', 'Billy', 'Irwin'];
const tinasFollowers = ['Grim', 'Mandy', 'Eris'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);

// Exercise 6 - The While loop

//The syntax of a while loop is ideal when we don’t know in advance how many times the loop should run.

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard;
while (currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}


// Exercise 7 - Do... While Statements

// do...while statement can be used when you want a piece of code to run at least once and then loop based on a specific condition after its initial run.

let cupsOfSugarNeeded = 2;
let cupsAdded = 0;

do {
  cupsAdded++
  console.log(`${cupsAdded} cup was added`);
} while (cupsAdded < cupsOfSugarNeeded);

// Exercise 8 - The Break Keyword

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");