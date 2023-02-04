// This keyword

//Create a function which retrieves the property name on this.

function thisName() {
    return this.name;

}

// Binding this keyword to a function
function thisName() {
    return this.name;

}

module.exports = thisName.bind({name: 'Bob'});

// Implicit binding - Call Site

const obj = {
    name: 'Bob',
    getName: function() {
        return obj.name;
    }
}

// Unbound function 

