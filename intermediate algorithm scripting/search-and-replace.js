let firstChar = /^[A-Z]/;

function upperCaseFirstChar(str) {
  let result = str.split("");
  result.splice(0, 1, result[0].toUpperCase());
  return result.join("");
}

function lowerCaseFirstChar(str) {
  let result = str.split("");
  result.splice(0, 1, result[0].toLowerCase());
  return result.join("");
}

function myReplace(str, before, after) {
  console.log("|str|", str, "|before|", before, "|after|", after);
  let isUpperCase = firstChar.test(before);
  let newAfter = after;
  if (isUpperCase) {
    newAfter = upperCaseFirstChar(after);
  } else {
    newAfter = lowerCaseFirstChar(after);
  }
  let arr = str.split(" ");
  let replaceIndex = arr.indexOf(before);
  if (replaceIndex >= 0) {
    arr.splice(replaceIndex, 1, newAfter);
  }
  return arr.join(" ");
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
