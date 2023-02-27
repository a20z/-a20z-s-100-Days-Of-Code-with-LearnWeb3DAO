// Alchemy Pact: A promise library

class Pact {
    // add methods to return on the instance
    then(){

    }

    catch(){
        
    }
}

// The executor
class Pact {
    constructor(fn) {
        this.resolve = () => {

        }
        this.reject = () => {
            
        }
        fn(this.resolve, this.reject);
    }
    then() {
        
    }
    catch() {
        
    }
}

// Then ... What?

class Pact {
    constructor(fn) {
        this.resolve = (value) => {
            this.thenFn(value);
        }
        this.reject = () => {
            
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        this.thenFn = _then;
    }
    catch() {
        
    }
}

// Catch the rejection

class Pact {
    constructor(fn) {
        this.resolve = (value) => {
            this.thenFn(value);
        }
        this.reject = (value) => {
            this.catchFn(value);
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        this.thenFn = _then;
    }
    catch(_catch) {
        this.catchFn = _catch;
    }
}

// Multiple callbacks

class Pact {
    constructor(fn) {
        this.thenFns = [];
        this.catchFns = [];
        this.resolve = (value) => {
            this.thenFns.forEach((fn) => fn(value));
        }
        this.reject = (value) => {
            this.catchFns.forEach((fn) => fn(value));
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        this.thenFns.push(_then);
    }
    catch(_catch) {
        this.catchFns.push(_catch);
    }
}

// Immidiate Resolve

const STATUS = {
    PENDING: 0,
    RESOLVED: 1,
    REJECTED: 2,
}

class Pact {
    constructor(fn) {
        this.thenFns = [];
        this.catchFns = [];
        this.status = STATUS.PENDING;
        this.resolve = (value) => {
            this.resolvedValue = value;
            this.status = STATUS.RESOLVED;
            this.thenFns.forEach((fn) => fn(value));
        }
        this.reject = (value) => {
            this.rejectedValue = value;
            this.status = STATUS.REJECTED;
            this.catchFns.forEach((fn) => fn(value));
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        if (this.status === STATUS.PENDING) {
            this.thenFns.push(_then);
        }
        else if (this.status === STATUS.RESOLVED) {
            _then(this.resolvedValue);
        }
    }
    catch(_catch) {
        if (this.status === STATUS.PENDING) {
            this.catchFns.push(_catch);
        }
        else if (this.status === STATUS.REJECTED) {
            _catch(this.rejectedValue);
        }
    }
}

// Chaining callbacks

const STATUS = {
    PENDING: 0,
    RESOLVED: 1,
    REJECTED: 2,
}

class Pact {
    constructor(fn) {
        this.thenFns = [];
        this.catchFns = [];
        this.status = STATUS.PENDING;
        this.resolve = (value) => {
            this.resolvedValue = value;
            this.status = STATUS.RESOLVED;
            this.thenFns.forEach((fn) => fn(value));
        }
        this.reject = (value) => {
            this.rejectedValue = value;
            this.status = STATUS.REJECTED;
            this.catchFns.forEach((fn) => fn(value));
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        if (this.status === STATUS.PENDING) {
            return new Pact((resolve, reject) => {
                this.thenFns.push((val) => {
                    resolve(_then(val));
                });
            });
        }
        else if (this.status === STATUS.RESOLVED) {
            _then(this.resolvedValue);
        }
    }
    catch(_catch) {
        if (this.status === STATUS.PENDING) {
            this.catchFns.push(_catch);
        }
        else if (this.status === STATUS.REJECTED) {
            _catch(this.rejectedValue);
        }
    }
}

// Chaining promises

const STATUS = {
    PENDING: 0,
    RESOLVED: 1,
    REJECTED: 2,
}

class Pact {
    constructor(fn) {
        this.thenFns = [];
        this.catchFns = [];
        this.status = STATUS.PENDING;
        this.resolve = (value) => {
            this.resolvedValue = value;
            this.status = STATUS.RESOLVED;
            this.thenFns.forEach((fn) => fn(value));
        }
        this.reject = (value) => {
            this.rejectedValue = value;
            this.status = STATUS.REJECTED;
            this.catchFns.forEach((fn) => fn(value));
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        if (this.status === STATUS.PENDING) {
            return new Pact((resolve, reject) => {
                this.thenFns.push((val) => {
                    if (val instanceof Pact) {
                        val.then((val) => resolve(_then(val)));
                    }
                    else {
                        resolve(_then(val));
                    }
                });
            });
        }
        else if (this.status === STATUS.RESOLVED) {
            _then(this.resolvedValue);
        }
    }
    catch(_catch) {
        if (this.status === STATUS.PENDING) {
            this.catchFns.push(_catch);
        }
        else if (this.status === STATUS.REJECTED) {
            _catch(this.rejectedValue);
        }
    }
}

module.exports = Pact;