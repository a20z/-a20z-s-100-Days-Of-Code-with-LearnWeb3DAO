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

const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    // store radius on this
    this.radius = radius;
}

module.exports = Circle;

// Move Circle

const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    // store radius on this
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

module.exports = Circle;

// Rectangle

const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this, x, y);
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);

module.exports = Rectangle;

// Rectangle flip

const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this, x, y);
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.flip = function(){
    const width = this.width;
    this.width = this.height;
    this.height = width;
}

module.exports = Rectangle;
