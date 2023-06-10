/*Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]*/

function digitize(n) {
  //code here
}

function digitize(n) {
  //code here
  const digits = String(n).split(""); // Convert the number to a string and split it into an array of individual digits
  const reversedDigits = digits.reverse(); // Reverse the array of digits
  const reversedArray = reversedDigits.map((digit) => Number(digit)); // Convert each digit back to a number

  return reversedArray;
}

////Best Practice
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

///
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

///
