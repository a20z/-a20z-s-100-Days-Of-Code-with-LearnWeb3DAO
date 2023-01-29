// Objects Add  By type
const ORDER_TYPES = {
    PIZZA: 0,
    WINGS: 1,
    SALAD: 2,
    BURGER: 3,
    FRIES: 4,
    SANDWICH: 5,
}

module.exports = ORDER_TYPES;

// numberOfPizzas.js

const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {
    let total = 0;
    for (let i in orders) {
        if (orders[i].type == ORDER_TYPES.PIZZA){
            total += orders[i].pizzas;
        }

        

    }
    return total;
}

module.exports = numberOfPizzas;