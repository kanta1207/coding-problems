// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hash = {};
  let max = 0;
  let maxChar = str[0];
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      hash[str[i]]++;
    } else {
      hash[str[i]] = 1;
    }
    if (hash[str[i]] > max) {
      max = hash[str[i]];
      maxChar = str[i];
    }
  }
  return maxChar;
}

module.exports = maxChar;
