// example pure functions used below
const doubleCallBack = val => val * 2
const square = val => Math.pow(val, 2)
const oneThird = val => val / 3

// a helper variable
const num = 3

/**
 * write an implementation of function `take`
 */
function take (initialState) {
  return {
    result: initialState,
    chain: function(callBack) {
      this.result = callBack(this.result);
      return this;
    }
  }
}

/**
 * so it would be possible to use it as follows
 */
console.log(
  take(num).result // should log: 3
)

console.log(
  take(num).chain(doubleCallBack).result // should log: 6
)

console.log(
  take(num)
    .chain(doubleCallBack)
    .chain(square).result // should log: 36
)

console.log(
  take(num)
    .chain(doubleCallBack)
    .chain(square)
    .chain(oneThird).result // should log: 12
)
