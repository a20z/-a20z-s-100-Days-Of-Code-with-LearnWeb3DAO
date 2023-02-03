// Alchemy Type Conversion

// String to Number

// converst string to number, if NaN, retruns 0
function toNumber(string) {
    return Number(string) || 0;
}

// To String 

// function takes in 2 strings a & b, uses .toString() method to convert to string & then combines
function combineToString(a, b) {
    return a.toString() + b.toString();
}

// Boolean Conversion

// asked to return a if it is truthy

function isTruthy(a) {
    // !!a converts a to a boolian, if true it returns a
    if (!!a === true){
        return a;
    }
}

// Loose Equals

// function checks if a and b are loosely equal, and returns true or false
function looseEquals(a, b) {
    if (a == b){
        return true;
    } else {
        return false;
    }
}

// To JSON

//convers object to stringified JSON
function toJSON(obj) {
    return JSON.stringify(obj);
}
module.exports = toJSON;

// JSON to object

const personJSON = `
    {
        "name": "Jack",
        "age": 27,
        "isReal": false
        
    } 
`;