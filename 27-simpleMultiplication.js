//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  // your code........
}

function simpleMultiplication(number) {
  // your code........
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

///

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}
