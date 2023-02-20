// Alchemy Stack Data Structure

// Push & Pop

// .push() - the push method adds one or more elements to the ned of array & returns new array length
// .pop() - reomeves the LAST element from array & returns that element, changing length of array

const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    isEmpty() {
        
    }
    peek() {
        
    }
}

// Overflow & Underflow

/*
Recursive call stakc error

when dealingwith recusion, may run ionto a case where the call stack overflows

Ex:

function randomFunction(){
    randomFunction();
}
//make the initial call
myFunciton();

After that intiial call, this program will never terminate. Eventially the call stack 
will overflow because it will run out of memory to hold where to return program execution to
*/