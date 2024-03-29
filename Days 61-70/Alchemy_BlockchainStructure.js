// Alchemy Blockchain Structure unit

// Ron White

// Blockchain.js

const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block()];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(block);
    }

    isValid() {
        for(let i = this.chain.length - 1; i > 0; i--) {
            const block = this.chain[i];
            const prev = this.chain[i - 1];
            if(block.previousHash.toString() !== prev.toHash().toString()) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Blockchain;

// Block.js

const SHA256 = require('crypto-js/sha256');

class Block {
    constructor (data){
        this.data = data;
    }
    toHash() {
        return SHA256(this.data + this.previousHash) // a hash!
    }
}

module.exports = Block;

// Blockchain d
