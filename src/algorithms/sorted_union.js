function uniteUnique(...arr) {
  // //Use reduce function to flatten the array
  // return [...arr].reduce( (arrA, arrB) => {
  // // Apply filter to remove the duplicate elements in the array
  //   return arrA.concat(arrB.filter( (i) => {
  //     return !arrA.includes(i);
  //   }));
  // });
  
  // create a Set which clears any duplicates since it's a regular set and not a multiset
  return [...new Set([].concat(...arr))];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);