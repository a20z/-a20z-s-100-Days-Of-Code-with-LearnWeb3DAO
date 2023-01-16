// Codecademy's Lesson on Iterators and Higher order Functions

// Exercise 1 - Functions as Data

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  
  // Gives another name to the above function, whithout changing the original name
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
  isTwoPlusTwo();
  
  // Prints original name
  console.log(isTwoPlusTwo.name);

// Exercise 2 - Fundtions as Parameters
  const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    if (checkA === checkB){
      return func(val);
    } else {
      return 'inconsistent results'
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 4));
  

// Review

// A higher-order function is a function that either accepts functions as parameters, returns a function, or both.
// a callback function is a function passed as an argument into another function.

// Exercise 3 - The .forEach() method

// .forEach() will execute the same code for each element of an array.

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach(function(fruit){
  console.log(`I want to eat a ${fruit}`);
}

);

// Exercise 4 - The .map() method

// When .map() is called on an array, it takes an argument of a callback function and returns a new array!

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

// steps: create variable smallNumbers
// set it equal to array.map()
// inisde parentheses insert arrow function
// parameter => code
const smallNumbers = bigNumbers.map(numbers => numbers / 100);

console.log(smallNumbers);

// Exercise 5 - The .filter() method

// returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
  });

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
});

// Exercise 6 - The .findIndex() method

// Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
})

const startsWithS = animals.findIndex(sAnimals => {
  return sAnimals[0] === 's';
  });

// Exercise 7 - The .reduce() method

// The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array


const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(function(accumulator, currentValue){
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of the currentValue: ', currentValue);
  return accumulator + currentValue;
  }, 10);

  console.log(newSum);
   
  
// Exercise 8 - Iterator documentation

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log('hola');

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => word.length > 5);


// Make sure to uncomment the code below and fix the incorrect code before running it

// .every method tests whether all elements in the array pass the test implemented by the provided function. returns boolean value

console.log(interestingWords.every((word) => {return word.length > 5} ));


// Exercise 9 - Choose the right iteratot

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);


/*

Methods to really keep in mind

.forEach() - used to exeute ther same code on every element in an array 
  but does not change the array and returns undefined

.map() - executes the same code on every element in array and returns a nre array with the updated elements

.filter() - checks evey element in an an array to see if it meets certain criteria and  
  returns a new array with the elements that return truthy for the criteria

.findIndex() - returns the index of the first element of an array that satisfies a condition in the 
  callback function. it returns -1 if none of the elements in the array satisfies the condition

.reduce() - iterates through an array and takes the values of the elements  
  and returns a new array with the updated elemets

# note: all iterator methods take a callback functiuon, which can be a pre-defined function, 
  a function expression, or an arrow function
  */



/*

Further notes:

# a higher order function accepts functions as paramenters and/or returs a function

*/