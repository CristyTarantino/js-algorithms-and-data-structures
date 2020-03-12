// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//
//   For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
//   var sumTwoAnd = addTogether(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.
//
function addTogether() {
  const args = [...arguments];
  return args.some(n => !Number.isFinite(n))
    ? undefined
    : args.length > 1
      ? args.reduce((prev, next) => prev += next, 0)
      : n => (Number.isFinite(n) ? args[0] + n : undefined);
}

addTogether(2,3);

// TEST CASES
// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.
