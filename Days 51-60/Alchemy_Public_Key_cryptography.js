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


// Public key cryptography

// Hashing messeges

const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    const byteMessage = utf8ToBytes(message);
    const hash = keccak256(byteMessage);
    return hash;
}

// Signing the hash

const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
    const messageHash = hashMessage(msg);
    return secp.sign(messageHash, PRIVATE_KEY, { recovered: true });
}

// Recover the Public key
const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    const messageHash = hashMessage(message);
    return secp.recoverPublicKey(messageHash, signature, recoveryBit);
}

//KEY TO ADDRESS
