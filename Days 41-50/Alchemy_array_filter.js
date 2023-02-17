// Alchemy array filter

// Given an array of elements, find the elements whose value is < 5

function lessThanFive(array) {
    return array.filter((function(x){
        return x < 5;
        }
    ));
}
