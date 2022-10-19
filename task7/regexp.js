const isValidPrefix = (input) => {
    return /^[^<>%$-]*$/i.test(input);
}

const isAcceptableEmail = (email) => {    
    if(!email){ return false; }
    let emailsParts = email.split('@');   
    let username = emailsParts[0];    
    let userNameWithoutLastChar = username.substring(0, username.length - 1);
    if(!isValidPrefix(userNameWithoutLastChar)) return false;
    let lastCharacter = username.substr(username.length - 1)
    let inValidLastCharacter = [".", "+"];
    if(inValidLastCharacter.includes(lastCharacter)) return false;
    let validDomains = ["bono.io", "bono.it", "bono.fun"];
    let domain = emailsParts[1];
    if(!validDomains.includes(domain)) return false;
    return true;
}



/**
 * Implement the function `isAcceptableEmail` which checks whether the given input
 * is a valid email out of acceptable empoyer's emails list.
 *
 * The rules are:
 * - username should only contain letters, numbers and underscores
 * - username MAY OPTIONALLY contain a dot (".") and/or plus ("+") sign (or both)
 *   BUT neither the dot nor the plus is allowed at the very end of the username
 * - there are only 3 domains allowed:
 *   - bono.io
 *   - bono.it
 *   - bono.fun
 *
 * e.g.
 */


console.log('1', isAcceptableEmail('alexandr@bono.io'))
console.log('2', isAcceptableEmail('john.doe@bono.it'))
console.log('3', isAcceptableEmail('james+sales@bono.fun'))
console.log('4', isAcceptableEmail('the_1337@bono.io'))
console.log('5', isAcceptableEmail('the.true+hr@bono.io'))
/**
 * should all return `true`
 */

/**
 * and the calls below
 */
console.log('6', isAcceptableEmail())
console.log('7', isAcceptableEmail(null))
console.log('8', isAcceptableEmail('your.dog@gmail.com'))
console.log('9', isAcceptableEmail('boss+@bono.io'))
console.log('0', isAcceptableEmail('some-other@bono.it'))

/**
 * should all return `false`
 */
console.log('---')
