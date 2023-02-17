// Alchemy array filter

// Given an array of elements, find the elements whose value is < 5

function lessThanFive(array) {
    return array.filter((function(x){
        return x < 5;
        }
    ));
}

// Only True
// Given an array of booleans, return only true

function onlyTrue(array) {
    return array.filter((element) =>{
        return element;
    })
}

// Filtering strings 
// Given and array of strings, return strings whose length is at most 3

function shortStrings(array) {
    return array.filter((function(x){
        return x.length <= 3
    }));
}
