let startWithVowel = /^[aeiou]/;
function translatePigLatin(str) {
  console.log(str);
  let result = [];
  result = str.split("");
  let consonant = [];
  for (let char of str) {
    if (!startWithVowel.test(char)) {
      consonant.push(char);
      result.shift();
    } else {
      break;
    }
  }
  if (startWithVowel.test(str[0])) {
    result.push("way");
  } else {
    result.push(consonant.join("") + "ay");
  }
  return result.join("");
}

console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
