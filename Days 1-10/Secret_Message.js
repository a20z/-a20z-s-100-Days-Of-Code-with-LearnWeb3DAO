let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Checks length of array
console.log(secretMessage.length);

// Step 1, remove last string in array
secretMessage.pop();
// Checks length of array after .pop()
console.log(secretMessage.length);

// Step 2, add words to the end of the array
secretMessage.push('to', 'Program');
console.log(secretMessage.length);

// Step 3, change element 7
secretMessage[7] = 'right';
console.log(secretMessage);

// Step 4, remove first string in array using .shift()
secretMessage.shift();

// Step 5, add string to begining of array
secretMessage.unshift('Programming');

// Step 6, remove elements and add an element
// sample syntax: array.splice(indexToStart, numberOfIndices, 'stringToAdd'); 
secretMessage.splice(6, 5, 'know');

console.log(secretMessage);

// Code logs the message: Programming is not about what you know it is about what you can figure out -2015 Chris Pine Learn to Program