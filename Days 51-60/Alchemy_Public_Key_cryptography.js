// Alchemy public key cryptography

// Hash message

const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    const byteMessage = utf8ToBytes(message);
    const hash = keccak256(byteMessage);
    return hash;
}


module.exports = hashMessage;

// Signing the hash


