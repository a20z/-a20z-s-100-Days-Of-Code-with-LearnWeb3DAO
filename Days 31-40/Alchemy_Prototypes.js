// More Alchemy Practice

const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;
    console.log(this);
    fetchAge(this.name, (age) => {
        this.age = age;
    });
}

module.exports = Celebrity;

// Javascript Prototypes

// Taking Shape

// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {x, y}
}

module.exports = Shape;

// Move shape

// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {x, y}
}

Shape.prototype.move = function (x,y){
    this.position.x += x;
    this.position.y += y;
}


module.exports = Shape;

// Cricle Shape