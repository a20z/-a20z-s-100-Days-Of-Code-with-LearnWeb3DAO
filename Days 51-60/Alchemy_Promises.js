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

/*The Promise object represents the eventual completion or failure of an asynchronous operation and its resulting value */

function timer() {
    return new Promise(function (resolve, reject){
        resolve();
    });
}


// Asynchronous Executor

/*modify the timer executor function to resolve after one second. */

function timer() {
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            resolve();
        },1000);
    });
}

// Async Await

const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    const results = await getResults(patientId);
    const response = await sendResults(patientId, results);
    await logResponse(response);
}


// Catching Async/Await

/*How do we handle the case where the promise rejects? 
We can use try/catch!*/

const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    try {
        const results = await getResults(patientId);
    const response = await sendResults(patientId, results);
    await logResponse(response);
    }
    catch (ex){
        logError(ex);
    }
}