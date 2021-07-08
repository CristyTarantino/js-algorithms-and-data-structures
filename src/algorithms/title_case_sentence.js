// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  // any character following (a space, or the start of a line
  return str.toLowerCase().replace(/(\s|^)./ig, c => c.toUpperCase());
}

titleCase("I'm a little tea pot");

// TEST CASES

// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
// titleCase("sHoRt AnD sToUt") should return Short And Stout.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.