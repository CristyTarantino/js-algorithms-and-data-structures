function repeatStringNumTimes(str, num) {
  // repeat after me
  // return num > 0 ? str.repeat(num) : '';
  let repeatedString = "";

  if (num > 0) {
    while(num > 0){
      repeatedString += str;
      num--;
    };
    
    return repeatedString;
  }

  return "";
}

repeatStringNumTimes("abc", 3);