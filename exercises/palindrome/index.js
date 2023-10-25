// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  /* 1 */
  //     let reverse = '';
  //   for (let i = 0; i < str.length; i++) {
  //     reverse = str[i] + reverse;
  //   }
  //   return str === reverse;

  /* 2*/
  const mid = Math.floor(str.length / 2);
  for (let i = 0; i <= mid; i++) {
    console.log(str[i], str[str.length - i - 1]);
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;

  /* Solution3 */
  //   return str.split('').every((char, i) => char === str[str.length - i - 1]);
}

module.exports = palindrome;
