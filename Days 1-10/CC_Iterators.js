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
