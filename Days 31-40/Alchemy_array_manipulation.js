// Alchemy University Array Manipulation

// Given an array of numbers, sort the numbers ascending

function sortUp(array) {
    array.sort((a,b) => a-b);
}


// Numbers Descending

// Given an array of numbers, sort them into descending

/*
 A negative result moves a in front of b. A positive result moves b in front of a. Zero keeps the order unchanged.
/Sorting descending will be the opposite. 
We want a negative result to move b in front of a and a positive result to move a in front of b.
*/

function sortDown(array) {
    array.sort((a, b) => b-a);
}
