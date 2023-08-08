/*Vowel Count
 * Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


 */

 public class Vowels {

  public static int getCount(String str) {
    int nmbOfVoyel = 0 ;
    for(int i = 0; i<str.length();i++){
      char c = str.charAt(i); 
      if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'){
        nmbOfVoyel++;
      }
    }
      
    return nmbOfVoyel;
  }

}

//Best Practice


public class Vowels {

    public static int getCount(String str) {
        return str.replaceAll("(?i)[^aeiou]", "").length();
    }

}