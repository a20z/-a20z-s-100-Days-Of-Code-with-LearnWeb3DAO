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
/*Overall, this code implements basic stack data structure with error handeling 
for stack overflow and undereflow. it also provides methods to chech wheryher the
stack is empty and to peek at the top element of the stack */
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
        /*the pop method removes and returns the item at the top of the stack. Before removing the item,
        it checks if the stack is empty by comparing the current length of the stack to zero.
        If the stack is empty, it throws an error with the messege "Sack Underflow" */
        if (this.items.length === 0) {
            throw new Error("Stack Underflow");
        }
        return this.items.pop();
    }
    isEmpty() {
        /*this method is used to check if the stack is  empty or not. It returns true if the
        stack is empty, false otherwise by checking the length of the this,items array */
        return this.items.length === 0;
    }
    peek() {
        /* the peek method return the item at the top of the stack without removing it. It does
        this by returning the last item in the this.items array */
        return this.items[this.items.length - 1];
    }
}

// Operations Manager

const Stack = require('./Stack');

class OperationManager {
    /*The operationManager constructo creates two stacks, one called this.operations and 
    one called this.undos, both if wehich are instances of a stack class which is imported*/
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }
    /*The addOperation method allows the user to add an operation to the this.operations
    stack by calling the push methin on the this.operations stack */
    addOperation(operation) {
        this.operations.push(operation);
    }
    /*the undo method removes the most recent operation from the this.operations stack using the pop method
    , and rhen pushes it into the this.undos stack using the push method. this means that the most recent 
    operation is removed from the list of operations that have been undone*/
    undo() {
        const operation = this.operations.pop();
        this.undos.push(operation);
    }

    redo() {
        /*the redo method removes the most recent operation from the thjis.undos stack using
        th pop method, and then pushes it onto the this.operations stack using the push method. This means that
        the most recent operation that was undone is removed from the list of undone operations, and added back 
        to the list of operations that have been performed */
        const operation = this.undos.pop();
        this.operations.push(operation);
    }
}