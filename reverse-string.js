function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverseString("hello"));

function reverseString2(str) {
  let reverse = "";
  for (let char of str) {
    reverse = char + reverse;
  }
  return reverse;
}

console.log(reverseString2("martin"));

function reverseString3(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString3("aguirre"));
