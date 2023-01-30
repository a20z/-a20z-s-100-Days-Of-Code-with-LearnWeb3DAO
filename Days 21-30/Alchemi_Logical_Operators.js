
// OR operator

function willEat(hasPizza, hasDonuts, hasCookies) {
    if (hasPizza || hasDonuts || hasCookies){
        return true;
    } else {
        return false;
    }
}

module.exports = willEat;

// Default Operator

function double(x) {
    if (x > 0){
    
    return x * 2;
    } else {return 0;}
}

/* Solution shouild be 
function double(x) {
    return (x || 0) * 2;
}
*/

module.exports = double;

// AND Operator

function canBreathe(isConnected, hasOxygen, aboveWater) {
    if (aboveWater == true){
        return true
    }

    if (isConnected && hasOxygen == true){
        return true;
    } else {
        return false;
    }
}

module.exports = canBreathe;