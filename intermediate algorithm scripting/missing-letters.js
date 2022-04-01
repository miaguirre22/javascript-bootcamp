const alphabet = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(str) {
  let index = alphabet.indexOf(str[0]);
  for (let char of str) {
    if (index !== alphabet.indexOf(char)) {
      return alphabet[index];
    }
    index++;
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
fearNotLetter("abcdefghjklmno");
