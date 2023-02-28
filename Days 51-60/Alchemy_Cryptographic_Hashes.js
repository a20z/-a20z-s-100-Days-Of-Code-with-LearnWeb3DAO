// Alchemy Cryptographic hashes

//Find favorite color
const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash'
function findColor(hash) {
    return COLORS.find(x => toHex(sha256(utf8ToBytes(x))) === toHex(hash));
}

/*The find() method returns the first element in the provided array that satisfies 
the provided testing function. If no values satisfy the testing function, undefined is returned.*/
