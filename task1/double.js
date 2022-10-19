const double = (variable) => {

    if(!Array.isArray(variable)) { return []; }
    
    return variable.map(function(element){
       return parseFloat(element) * 2;
    });
}

/**
 * Implement the function `double` which fulfills those minimal requirements:
 *
 * - when given an array of integers
 *   it should return an array with all elements' values doubled
 *   e.g.
 */

console.log(double([1, 2, 3, 4, 5])) // should log [2, 4, 6, 8, 10]

console.log(double([5.5, 4.2, 3.1, 2.25, 1.11])) // should log [11, 8.4, 6.2, 4.5, 2.22]

/**
 * - when given any other type of argument,
 *   it should return an empty array
 */
console.log(double(42)) // should log []
console.log(double(null)) // should log []
console.log(double({})) // should log []
console.log(double()) // should log []

console.log('---')
