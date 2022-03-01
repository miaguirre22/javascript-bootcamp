function findLongestWordLength(str) {
  // split de string into words
  let arr = str.split(" ");
  let longest = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

function findLongest2(str) {
  let longest = "";
  let regx = /\w+/gi;
  let words = str.match(regx);
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest.length;
}

console.log(
  findLongest2("What if we try a super-long word such as otorhinolaryngology")
);
