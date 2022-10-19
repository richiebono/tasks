var counterFist = 0;
var counterAnother = 0;
var lastAnother = 0; 

const createCounterComponent = (counter) => {
    return () => { counter = counter+1; return counter; }
}

/**
 * Implement the function `createCounterComponent` which will return a new instance of a component.
 * The component, when called, should return how many times it had been called.
 *
 * e.g.
 */

const firstCopy = createCounterComponent(counterFist);
const anotherCopy = createCounterComponent(counterAnother);
const lastCopy = createCounterComponent(lastAnother);

console.log(firstCopy()) // should log: 1
console.log(firstCopy()) // should log: 2
console.log(anotherCopy()) // should log: 1
console.log(firstCopy()) // should log: 3
console.log(anotherCopy()) // should log: 2
console.log(firstCopy()) // should lod: 4
console.log(lastCopy()) // should log: 1

console.log('---')
