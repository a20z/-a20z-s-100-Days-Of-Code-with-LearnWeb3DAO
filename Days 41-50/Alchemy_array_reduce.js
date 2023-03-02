// Alchemy Array Reduce

/*
The reduce() method executes a user-supplied "reducer" callback function on each element of thje array,
in order, passing the return value from the calculation on the preceding element. The final result of 
running the reducer across all elements of the array is a single value

The first time that the callebakc is run, there is no "return value of the previous calculation". 
If supplied, an initial value may br used in its place. Otherwise the array element at index 0 is
used as the initial valu and iteration starts from the next element (index 1 instead of 0)

WHEN SHOULD YOU USE REDUCE? 

Use the reduce method when you haqve an array of elements you'd like to combine into a 
single value or object
*/

// Array reduce

// numbers is an array full of numbers
// let's add all the numbers and return the sum
// i.e. [1,2,3,4,5] => 15
function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator += currentValue; // <-- sum the numbers here!
    });
}

// Largest value
// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        // if accumulator is larger thann current value, return accumulator, else return currentValue
        return accumulator > currentValue ? accumulator : currentValue; // <-- determine largest value
    });
}

// Largest Positive
// Add the initial value

// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator > currentValue ? accumulator : currentValue; // <-- determine largest value
    }, 1 );
}

// Removing duplicates
 // numbers is an array full of numbers
// let's remove any duplicates and return it
// i.e. [2,2,3,5,1,3,4] => [2,3,5,1,4]
function removeDuplicates(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        // TODO: reduce logic
        if (accumulator.indexOf(currentValue) === -1){
            accumulator.push(currentValue);
        }
        return accumulator;

    }, [] /* TODO: add initial value */ );
}

// Grouping with reduce 
// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
        // TODO: reduce logic
        accumulator[currentValue.type] = accumulator[currentValue.type] || []
        accumulator[currentValue.type].push(currentValue.food);
        return accumulator;
    }, {} /* TODO: add initial value */ );
}


// All unique
//Finish the allUnique function. Return true if all the elements are unique and false if they are not.

// numbers is an array full of integers
// let's figure if all the numbers are unique
// i.e. [1,2,3,1] => false
// [1,2,3] => true
function allUnique(numbers) {
    return numbers.reduce((accumulator, currentValue, index) => {
        if (!accumulator){
            return false;
        }
        return numbers.indexOf(currentValue) === index
    }, true);
}
