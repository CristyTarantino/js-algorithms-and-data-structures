// Translate the provided string to pig latin.
//
//   Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
//   If a word begins with a vowel you just add "way" to the end.
//
//   Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
  if(/^(a|e|i|o|u)/.test(str)){
    return str.concat("way");
  }
  
  let firstCons = str.match(/^[^(a|e|i|o|u)]+/) || [];
  
  return firstCons.length ? str.slice(firstCons.length).concat(firstCons).concat("ay") : "";
}

translatePigLatin("consonant");

// TEST CASES
// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
// Should handle words where the first vowel comes in the end of the word.
// Should handle words without vowels.