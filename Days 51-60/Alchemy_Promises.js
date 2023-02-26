// Alchemy Promises

// Using Promises

const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
    }
    request(food) {
        makeFood(food).then(() => {
            this.isReady = true;
        });
    }
}

// Catch Error

const { makeFood } = require('./Kitchen');

class Order {
    /*Constructor method initializes a isReady to false */
    constructor() {
        this.isReady = false;
    }
    request(food) { /*request method is used to request a certain type of food 
        by passing food argument and uses function make food */
        makeFood(food).then(() => {
            /*If the promise returned by makeFood resolves successfully, the request method sets the
            is ready property of the Order instance to true, indicating food is ready */
            this.isReady = true;
            /*If promise returened by makeFood rejects with an error, the request method sets the error propert 
            of the Order instance to the error that was thrown durinf the prep process */
        }).catch((error) => {
            this.error = error;
        });
    }
}

// Create a promise