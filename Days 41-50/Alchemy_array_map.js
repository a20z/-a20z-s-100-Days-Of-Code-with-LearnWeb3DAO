// Alchemy University course on array map


/* 
The .map() method creates a new array populated with the results of calling a provided function on
every element in the calling array
*/ 

//Map function 

// Take the array arr and add one to every element, retuen the resultin array
function plusOne(arr) {
    return arr.map(function(x){
        return x + 1;
    })
}

module.exports = plusOne;

//Mapping a function

// Using the SquareRoot function, map each element in the array arr to its square root, return new array

function squareRoot(arr) {
    return arr.map(function(x){
        return Math.sqrt(x);
    })
}

// Square it

function squared(n) {
    return n * n;
}

// Map squared

// Giaven an aray if elemenrs in squaredMap, return an array w each element squared

const squared = require('./squared');

function squaredMap(arr) {
    return arr.map(function(x){
        return squared(x);
    })
}

// Add Score
// Mapping over objects

function addScore(players) {
    return players.map(function(addTen){
        addTen.score += 10;
        return addTen;
    })
}

// Array map Index

// Modify addScoore to only add 10 points to first 3 players

function addScore(players) {
    return players.map(function(addTen, i){
        if (i <= 2){
            addTen.score += 10;
        }
        return addTen;
    })
}
