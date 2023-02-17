// Alchemy University Array Manipulation


/*
The Compare Function

The purpose of the compare function is to define an alternative sort order
The compare function shouls return  negative, zero, or positive value, depending on the arguments:

function (a, b){return a-b};

When the sort() functionn compares ttwo values to the compare function, and sorts the values according
to the returened (negative, zero, positive) value.

If the result is negative, a is sorted before b
If the result is positive, b is sorted before a
If the result is 0, no changes are done with the sort order of the two values
*/


// Given an array of numbers, sort the numbers ascending

function sortUp(array) {
    array.sort((a,b) => a-b);
}


// Numbers Descending

// Given an array of numbers, sort them into descending

/*
 A negative result moves a in front of b. A positive result moves b in front of a. Zero keeps the order unchanged.
/Sorting descending will be the opposite. 
We want a negative result to move b in front of a and a positive result to move a in front of b.
*/

function sortDown(array) {
    array.sort((a, b) => b-a);
}

// Comparing strings

/* 
String.prototype.localeCompare()

localeCompare() method returns a number indicting wherter a reference string comes before, or after,
or is the same as the given sort order 
*/

function sortStringsUp(array) {
    array.sort((a,b) => {
        return a.localeCompare(b);
    });
}

// Strings descending

function sortStringsDown(array) {
    array.sort(function comparison(a, b){
        return b.localeCompare(a);
    })
}

// Sort students

// Sorting by multiple properties

// using sort
function sortStudents(students) {
    students.sort((a, b) => b.grade - a.grade).sort((a, b) => b.graduated - a.graduated);
}

// using if statements
function sortStudents(students) {
    students.sort((a,b) => {
        if (a.graduated && !b.graduated) {
            return -1;
        } 
        if (b.graduated && !a.graduated) {
            return 1;
        }
        return b.grade - a.grade;
    });
}

// Sorting by month

// use indexOf() array method - index() returns the first index at which given element can be found in the arraym or -1 of notr present

const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(events) {
    events.sort((a, b) => {
        return (MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month));
    })
}