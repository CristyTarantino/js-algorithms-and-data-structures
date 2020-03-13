// JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.
//
//   The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
//
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {

  // ^ denotes the beginning of the string.
  // (1\s?)? allows for “1” or "1 " if there is one.
  // \d{n} checks for exactly n number of digits so \d{3} checks for three digits.
  // x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
  // [\s\-]? checks for spaces or dashes between the groups of digits.
  // $ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

telephoneCheck("555-555-5555");

// TEST CASES
// telephoneCheck("555-555-5555") should return a boolean.
//
// telephoneCheck("1 555-555-5555") should return true.
//
// telephoneCheck("1 (555) 555-5555") should return true.
//
// telephoneCheck("5555555555") should return true.
//
// telephoneCheck("555-555-5555") should return true.
//
// telephoneCheck("(555)555-5555") should return true.
//
// telephoneCheck("1(555)555-5555") should return true.
//
// telephoneCheck("555-5555") should return false.
//
// telephoneCheck("5555555") should return false.
//
// telephoneCheck("2 757 622-7382") should return false.
//
// telephoneCheck("10 (757) 622-7382") should return false.
//
// telephoneCheck("27576227382") should return false.
//
// telephoneCheck("(275)76227382") should return false.
//
// telephoneCheck("2(757)6227382") should return false.
//
// telephoneCheck("2(757)622-7382") should return false.
//
// telephoneCheck("555)-555-5555") should return false.
//
// telephoneCheck("(555-555-5555") should return false.
// telephoneCheck("(555)5(55?)-5555") should return false.
// telephoneCheck("1 555)555-5555") should return false.
//
// telephoneCheck("1 555 555 5555") should return true.
//
// telephoneCheck("1 456 789 4444") should return true.
//
// telephoneCheck("123**&!!asdf#") should return false.
//
// telephoneCheck("55555555") should return false.
//
// telephoneCheck("(6054756961)") should return false
//
// telephoneCheck("2 (757) 622-7382") should return false.
//
// telephoneCheck("0 (757) 622-7382") should return false.
//
// telephoneCheck("-1 (757) 622-7382") should return false
