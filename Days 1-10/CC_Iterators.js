// Codecademy's Lesson on Iterators

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