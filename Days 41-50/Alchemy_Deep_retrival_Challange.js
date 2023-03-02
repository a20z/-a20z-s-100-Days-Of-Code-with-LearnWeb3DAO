// Alchemy Deep retreiveal challange
/*
Given an object which contains an arbritrary number of objects, find the deeply nested value
The Goal is to take an object like:

{
    prop: {
        prop: {
            prop: 3
        }
    }
}

And return 3. You will not know hao deep the value is nested, only that it will be nested under an
arbritraty number of prop attributes.

typeof operator will be usef ul in this challange

--The typeof operator returns a string indicating the type of the operands value

*/

function deepRetrieval(obj) {
    if (typeof obj != "object") {
        console.log(obj.prop);
        return obj;
    }

    return deepRetrieval(obj.prop);
}

/*

Here's what the function does:

It checks whether the obj argument is an object or not. If it's not an object, the function 
logs the value of the prop property of the obj argument to the console and returns the obj.

If the obj argument is an object, the function calls itself recursively with the value of the
prop property of the obj. This recursive call will continue until it reaches a non-object value of the prop property.

*/