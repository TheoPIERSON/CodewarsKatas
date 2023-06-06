/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

function abbrevName(name) {
  // code away
  let secondWord = name.split(" ")[1];

  return name.substring(0, 1) + "." + secondWord.substring(0, 1);
}
////UPPERCASE
function abbrevName(name) {
  // code away
  let secondWord = name.split(" ")[1];

  return name.substring(0, 1).toUpperCase() + "." + secondWord.substring(0, 1).toUpperCase();
}

//Best Practice
function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
