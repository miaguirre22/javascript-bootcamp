function confirmEnding(str, target) {
  console.log("confirm Ending 1:");
  let lengthTarget = target.length;
  let arr = str.split(" ");
  let lastIndex = arr.length - 1;
  let lastWord = arr[lastIndex];
  console.log("last word:", arr[lastIndex]);
  let indexBegin = lastWord.length - lengthTarget;
  console.log("indexBegin:", indexBegin);
  let lastSubstr = lastWord.slice(indexBegin);
  console.log("lastSubstr:", lastSubstr);
  console.log("target: ", target);
  if (lastSubstr === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Congratulation", "on"));
console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )
);
console.log(confirmEnding("Connor", "n"));

function confirmEnding2(str, target) {
  console.log("confirm ending 2:", str, target);
  return str.slice(-target.length) === target;
}

console.log(confirmEnding2("Congratulation", "on"));

function confirmEnding3(str, target) {
  console.log("confirm ending 3:", str, target);
  return str.endsWith(target);
}

console.log(confirmEnding3("Congratulation", "on"));
