// Alchemy University

// Throw an Error

function throwError() {
    
    const a = 5;

    if (a > 4){
        throw new Error('Anything above a 4 is wrong and you should feel bad.');
    }
}

// Catch an Error

function catchError(fn) {
    try {
        fn();
    }

    catch(fn){

    };

}

// Return Error

function catchError(fn) {
    try {
        fn();
    }

    catch(fn){
        // catches and return the error in parameter of function fn
        return fn;
    };
    // returns false when no error is passed
    return false;
}

// Start an Error

// supposed to return an error 

function startError() {
    const shoeCount = 4;
    shoeCount += 1;
}
// returns a TypeError: Assiognment to constant variable

