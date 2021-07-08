// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). 
// If no element passes the test, return undefined.

function findElement(arr, func) {
  return arr.filter(func)[0] || undefined;
}

// Solution suggested by freeCodeCamp
// function findElement(arr, func) {
//   let num = 0;
  
//   for(var i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
  
//   return undefined;
// }

findElement([1, 2, 3, 4], num => num % 2 === 0);