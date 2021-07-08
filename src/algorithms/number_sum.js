// You need to create a program that will take an array of two numbers who are not necessarily in order, 
// and then add not just those numbers but any numbers in between. 
// For example, [3,1] will be the same as 1+2+3 and not just 3+1

function sumAll(arr) {
  // let sum = 0;
  // for(let i=Math.min(...arr); i<=Math.max(...arr); i++){
  //   sum += i;
  // }
  // return sum;


  let min = Math.min(...arr);
  let max = Math.max(...arr);

  // Using Arithmetic Progression summing formula 
  // https://en.wikipedia.org/wiki/Arithmetic_progression
  return (max - min + 1) * (min + max) / 2;
}

sumAll([1, 4]);


// TEST CASES
// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.