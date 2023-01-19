// Codecademy's course on Advanced Objects

// Exercise 1 - The this keyword

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo(){
      return `I am ${this.model} and my current energy level is ${this.energyLevel}`
    }
  };
  
console.log(robot.provideInfo());

/*
The this keyword

A function's this keyword behaves a litel differently in JavaScript compared to 



*/