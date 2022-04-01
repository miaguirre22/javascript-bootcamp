// function spinalCase(str) {
//   console.log(str)
//   let upperCase = /[A-Z]/
//   let isChar = /[a-zA-Z]/
//   let result = ""
//   for(let char of str) {
//     if(!isChar.test(char)) {
//       result += " "
//       continue
//     }
//     if(upperCase.test(char)) {
//       result += " " + char.toLowerCase()
//       continue
//     }
//     result += char
//   }
//   let result2 = result.split(" ")
//   let result3 = []
//   for(let word of result2) {
//     if(word !== "") result3.push(word)
//   }

//   return result3.join("-")
// }

function spinalCase(str) {
  return str
    .split(/\W|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
