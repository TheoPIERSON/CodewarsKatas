/*A hero is on his way to the castle to complete his mission. However, 
he's been told that the castle is surrounded with a couple of powerful dragons! 
each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, 
will he survive?

Return true if yes, false otherwise :)
*/
function hero(bullets, dragons) {
  //Get Coding!
  const maxDragons = Math.floor(bullets / 2);
  if (dragons <= maxDragons) {
    return true;
  } else {
    return false;
  }
}

/*The function calculates the maximum number of dragons the hero can defeat by dividing the number of bullets by 2 
since each dragon requires 2 bullets.
 If the number of dragons is less than or equal to the maximum number of dragons the hero can defeat, 
 the function returns true, indicating that the hero will survive. 
 Otherwise, it returns false, indicating that the hero won't have enough bullets to defeat all the dragons.*/

////
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}
