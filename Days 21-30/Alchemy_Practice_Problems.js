// Count the Elements:


// Write a function countElements that takes in an array and returns an object a count of each element in the array.
function countElements(elements) {
    
    // creates new array
    let newObject = {};
    
    // loops eleements in array
    for (let i = 0; i < elements.length; i++){
        // condition checks if elements in array exist
        if (!newObject[elements[i]]){
            newObject[elements[i]] = 1;
        } else { 
            newObject[elements[i]] += 1;
        }

    }

    return newObject;
    
}

module.exports = countElements;

// Player Hand Score 

function playerHandScore(hand) {
    let score = 0;
    const points = { "K": 4, "Q": 3, "J": 2 };

    for (let i = 0; i < hand.length; i++) {
        score += points[hand[i]] || 0;
    }

    return score;
}
module.exports = playerHandScore;

// Guard Orperator

function friendName(friend) {
    
    
    return friend && friend.name;
}

module.exports = friendName;

// Not Operator

function carCrossing(aCrossing, bCrossing) {
    if (aCrossing && !bCrossing){
        return true;
    }

    if (!aCrossing && bCrossing){
        return true;
    } else {
        return false;
    }
}

module.exports = carCrossing;


// Exceptions 