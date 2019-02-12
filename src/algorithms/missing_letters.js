function fearNotLetter(str) {
  let blueprint = "abcdefghijklmnopqrstuvwxyz";
  let indexToStart = blueprint.indexOf(str[0]);
  let alteredBlueprint = blueprint.substr(indexToStart);
  
  return [...alteredBlueprint].find((c, index) => c !== str[index]) || undefined;
}

fearNotLetter("stvwx");

// TEST CASES
// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.