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

const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (this.items.length === MAX_STACK_SIZE) {
            throw new Error("Stack Overflow!");
        }
        this.items.push(item);
    }
    pop() {
        if (this.items.length === 0) {
            throw new Error("Stack Underflow");
        }
        return this.items.pop();
    }
    isEmpty() {
        
    }
    peek() {
        
    }
}

// ------------------ Code breakdown -------

const { MAX_STACK_SIZE } = require('./config');

class Stack {
     /* constructor method initilalizes a new stack instasnce by creating an empty array */
    constructor() {
        this.items = [];
    }
    push(item) {
        /*the push method takes an item as an argument and adds it to the top of the stack.
        Before adding the item, it checks if the stack is full by comparing the current length
        of the stack to the MAX_STACK_SIZE constant. If the stack is full, it throws an error
        with messege, "Stack Overflow!*/ 
        if (this.items.length === MAX_STACK_SIZE) {
            throw new Error("Stack Overflow!");
        }
        this.items.push(item);
    }
    pop() {
        /*the pop method removes and returns the item at the top of the stack.  */
        if (this.items.length === 0) {
            throw new Error("Stack Underflow");
        }
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}