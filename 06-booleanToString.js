//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  //...
}

function boolToWord(bool) {
  if (bool) {
    bool = "Yes";
    return bool;
  } else {
    bool = `No`;
    return bool;
  }
}

//best practice

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
