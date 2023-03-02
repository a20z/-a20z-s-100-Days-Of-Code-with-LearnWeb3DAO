// Linked lists

// Linked list node
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// Linked List
class LinkedList {
    constructor(){
        this.head = null;
    }
}

// Add first

addFirst(node) 
    node.next = this.head;
    this.head = node; 

// Add last

/*addLast method takse a node object and adds it to the end of the linked list,
If the list is empty (ie this.head is null) then it sets the head property to 
the new node. Otherwise, it traverses the list starting from the head using
a loop that checks if the nest property of that node to the new node, effectively 
adding the new node at the end of the list */

addLast(node) 
    if(!this.head){ //checks if this.head is falsy
        this.head = node; //if linked list i empty, then the head property is set to node 
        return;
    }
    
    let ref = this.head;
    //the while loop executes while ref.next is truthy
    while (ref.next) ref = ref.next;
    ref.next = node;


// index Of
indexOf(node) 
    let idx = 0;
    let ptr = this.head;

    do {
        if(ptr === node) {
            return idx;
        }
        ptr = ptr.next;
        idx++;
    }
    while(ptr)


// Remove at

removeAt(index) 
    if (index === 0) {
        this.head = this.head.next;
        return;
    }

    let idx = 0;
    let node = this.head;

    while(idx < (index - 1)) {
        node = node.next;
        idx++;
    }

    node.next = node.next.next;
