/*
The assignment was to change all aphabetic characters in a
certain string to the letter right next to it in the alphabetical order.
Also the vowels had to be capital letters in the newly created string.

I know there are other ways to accomplish this but I really 
wanted to check if I could pull it off by using callback functions 
instead of string methods.
*/
  
function LetterChanges(str) {
  // ASSIGN
  let devstring = "";
  const abc = "abcdefghijklmnopqrstuvwxyza";
  const vow = "aeijouy";
  // CHANGE THE LETTER (with callback) when neccesary   
  const addstr = (captrd) => {
    // SHIFT LETTER if it's a alphatical one
    for (let x = 0; x <= abc.length - 1; x++) {
      if (captrd == abc[x]) {
        captrd = abc[x + 1];
        break;
      }
    }
    // CAPITALIZE newLetter if it's a vowel
    for (let c = 0; c <= vow.length - 1; c++) {
      if (captrd == vow[c]) {
        captrd = captrd.toUpperCase();
        return captrd;
      }
    }
    // DON'T CHANGE CAPTURED LETTER
    return captrd;
  }
  // PUT IT ALL TOGETHER
  for (let i = 0; i <= str.length - 1; i++) {
    let singler = str[i];
    devstring += addstr(singler);
  }
  // WRAP IT - SEND IT
  return devstring;
}
// for node check
console.log(LetterChanges("zadfasdsaf234sdfz.309cvm;alkasfz"));
