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
 // Filrtering objects
// Return students whose grades are at least 90

 function topStudents(array) {
    return array.filter(function (studentGrades) {
        return studentGrades.grade >= 90;
    })
}

// Filtering By Index
// Given an array of elements, keep only the first 3 elements

function firstThree(array) {
    return array.filter(function(x, i){
        return i < 3;
    })
}

// Unique 
function unique(array) {
    return array.filter(function(x, i){
        return array.indexOf(x) === i;
    })
}