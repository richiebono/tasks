const addSpaces = (variable) => {
    if(typeof variable !== "string" || !variable ) return "";  
    return variable.split('').join(' ');
}

/**
 * Implement the function `addSpaces` which fulfills those minimal requirements:
 *
 * - when given a string as an argument
 *   should insert spaces between all characters
 *   e.g.
 */
console.log('"' + addSpaces('kayak') + '"') // should log "k a y a k"
console.log('"' + addSpaces('Hello world!') + '"') // should log "H e l l o   w o r l d !"
console.log('"' + addSpaces('it is not the case') + '"') // should log "i t   i s   n o t   t h e   c a s e"

/**
 * - when given any other type of argument
 *   should return an empty string
 *   e.g.:
 */
console.log('"' + addSpaces([]) + '"') // should log ""
console.log('"' + addSpaces(null) + '"') // should log ""
console.log('"' + addSpaces(42) + '"') // should log ""
console.log('"' + addSpaces({ foo: 'bar' }) + '"') // should log ""
console.log('"' + addSpaces() + '"') // should log ""

console.log('---')
