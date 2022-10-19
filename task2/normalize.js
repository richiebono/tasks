
const normalize = (variable) => {
  
  if(typeof variable !== "object" || !variable ) return { name: null, age: null, profession: null };  
  if(!variable.hasOwnProperty('name')) variable.name = null;    
  if(!variable.hasOwnProperty('age')) variable.age = null;
  if(!variable.hasOwnProperty('profession')) variable.profession = null;  
  return { name: variable.name, age: variable.age,  profession: variable.profession };
}

/**
 * Implement the function `normalize` which fulfills those minimal requirements:
 *
 * - when given an object as an argument
 *   should return a new object with ONLY properties of `name`, `age`, `profession`
 *   e.g.:
 */
console.log(
  normalize({
    name: 'James Johnson',
    age: 42,
    profession: 'freelancer',
    warrior: true,
    hobbies: ['knitting', 'skating']
  })
)
/**
 * should log:
 *   {
 *       name: 'James Johnson',
 *       age: 42,
 *       profession: 'freelancer'
 *   }
 */

/***
 * - when given an object which is missing any of the 3 properties (name, age, profession)
 *   should insert `null` as its value
 *   e.g.:
 */
console.log(
  normalize({
    name: 'John Doe',
    age: 21,
    retired: false
  })
)
/**
 *   should log:
 *   {
 *       name: 'John Doe',
 *       age: 21,
 *       profession: null
 *   }
 */

/**
 * - when given an input argument different than an object
 *   or an object missing all 3 required properties
 *   should return an object with the 3 properties set to `null`
 *   e.g.:
 */
console.log(normalize([]))
console.log(normalize(42))
console.log(normalize(null))
console.log(normalize())
console.log(normalize({}))
/**
 *   should all log:
 *   {
 *       name: null,
 *       age: null,
 *       profession: null
 *   }
 */

console.log('---')
