// Alchemy Callback functions


// Running a callback function

/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */
function runCallback(callbackFunction) {
    callbackFunction();
}

// Asynchronous Callback

/*
The global setTimeout() method sets a timer which executes a function or a specified
peice of code once the timer erxpires
*/

function runCallback(callbackFunction) {
    setTimeout(() => {
        callbackFunction();
    }, 1000);
}

// Dialog Callback

class Dialog {
    constructor() {
        this.callbacks = []
    }
    onClose(callbackFunction) {
        // store the callback
        this.callbacks.push(callbackFunction);
    }

    close() {
        let i = -1
        while (++i < this.callbacks.length)
            this.callbacks[i]()
    }
}

// Multiple dialog callbacks

class Dialog {
    constructor() {
        this.callbackFunctions = [];
    }
    close() {
        this.callbackFunctions.forEach((callbackFn) => {
            callbackFn();
        });
    }
    onClose(callbackFunction) {
        this.callbackFunctions.push(callbackFunction);
    }
}