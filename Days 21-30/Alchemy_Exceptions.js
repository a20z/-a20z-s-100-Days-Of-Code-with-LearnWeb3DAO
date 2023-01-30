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


