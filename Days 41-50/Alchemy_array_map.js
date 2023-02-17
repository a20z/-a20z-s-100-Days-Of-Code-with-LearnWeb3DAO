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