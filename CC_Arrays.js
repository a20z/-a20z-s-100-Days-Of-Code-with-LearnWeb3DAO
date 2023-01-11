// Codecademy's lesson on Arrays

// Exercise 1  

// Creates adn array
const hobbies = ['Playing guitar', 'Playing Dark Souls', 'Listening to music'];

console.log(hobbies);

// Exercise 2 - Assesing Elements

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
console.log(listItem);

// Logs the last saying
console.log(famousSayings[2]);

// Outside the number of elements of the array, logs undefined
console.log(famousSayings[3]);


// Exerceise 4 Update Elements

let groceryList = ['bread', 'tomatoes', 'milk'];

// changes the second element in the array
groceryList[1] = 'avocados';

// Exercise 5 - Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo'; 
console.log(condiments);


// reassigns all array elements to 'Mayo'
condiments = ['Mayo'];
console.log(condiments);

// despite being declared with a CONST keyword, the array elements themselves are mutable 
utensils[3] = 'Spoon';
console.log(utensils); 


// Exerceise 6 - The .length property

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
 
 // logs the number of elements in the array
 console.log(objectives.length);
 
 // Exercise 7 the .push() method


 const chores = ['wash dishes', 'do laundry', 'take out trash'];

// .push() adds elements to the end of the array
chores.push('vacuum the floor', 'mop the floor');
console.log(chores);

// Exercise 8

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

// .pop() gets rid of the last element in an array
chores.pop();
console.log(chores);

// Exercise 9 - More array methods

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// .shift() removes first element from array
groceryList.shift();
console.log(groceryList);

// .unshift() adds elements the the begining of an array
groceryList.unshift('popcorn');
console.log(groceryList);

// .slice() returns a shallow copy of all or part of an array without modifying the original
console.log(groceryList.slice(1, 4));

// Original array unaffected by slice method
console.log(groceryList);

// .indexOf() returns the first index at which an element can be found. Returns -1 if the element is not found
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// Exercise 10 

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

/* 
array concept. There is also a function changeArr that will assign the element in index 3 of an array to 'MUTATED'. The function changeArr was called with an argument of concept 
*/

// this logs: [ 'arrays', 'can', 'be', 'MUTATED' ]
console.log(concept);


// function gets rid of last element in array
function removeElement(newArr){
  newArr.pop();
};

// applies function above to the array concept
removeElement(concept);

console.log(concept);