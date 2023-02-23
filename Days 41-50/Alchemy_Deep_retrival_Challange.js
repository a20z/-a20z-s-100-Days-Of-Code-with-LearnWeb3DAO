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