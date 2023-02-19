// Alchem,y recursion

/* Generally, iteration is more performant and can be less confusing for simple problems. 
Therefore, we should only look to use recursion in cases where it helps creat clear and consise code.

Recursion is best used in cases where a problem can be subdivided into many smaller prtoblems,
a command-and-conquer approach. 

That's why you typically see recursion mentioned with tree-like data structures
*/

// Base Case
function factorial(n) {
    if(n === 1){
        return 1;
    }
}
// Second Case
function factorial(n) {
    if(n === 1){
        return 1;
    }  
    if (n === 2){
        return 2;
    }
}

// General Recursion
function factorial(n) {
    if(n === 1){
        return 1;
    }  
    if (n === 2){
        return 2;
    }
    if (n < 1){
        return 0;
    }    
    return n * factorial(n-1);
}

// Walk nodes
function walk(node) {
    if (!node.next){ 
        return node; 
    }
}

//Walk Recusrive
function walk(node) {
    if (!node.next){ 
        return node; 
    }
    return walk(node.next);
}