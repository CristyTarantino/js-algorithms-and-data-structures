// Slice and Splice
// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// TEST CASES
// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
// frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

// Solution suggested by freeCodeCamp
// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let localArray = arr2.slice();
//   for (let i = 0; i < arr1.length; i++) {
//     localArray.splice(n, 0, arr1[i]);
//     n++;
//   }
//   return localArray;
// }
