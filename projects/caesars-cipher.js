// function rot13(str) {
//   let result = "";
//   let reg = /[A-Z]/;
//   let alf = {
//     A: "N",
//     B: "O",
//     C: "P",
//     D: "Q",
//     E: "R",
//     F: "S",
//     G: "T",
//     H: "U",
//     I: "V",
//     J: "W",
//     K: "X",
//     L: "Y",
//     M: "Z",
//     N: "A",
//     O: "B",
//     P: "C",
//     Q: "D",
//     R: "E",
//     S: "F",
//     T: "G",
//     U: "H",
//     V: "I",
//     W: "J",
//     X: "K",
//     Y: "L",
//     Z: "M",
//   };
//   for (let i = 0; i < str.length; i++) {
//     if (reg.test(str[i])) {
//       result += alf[str[i]];
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }

// console.log(rot13("SERR PBQR PNZC"));

// otra solucion
const ROTATE = 13;

function rot13(str) {
  let decodedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charCode = str.charCodeAt(i);
    if (/[A-M]/.test(char)) {
      const decodedChar = charCode + ROTATE;
      decodedStr += String.fromCharCode(decodedChar);
    } else if (/[N-Z]/.test(char)) {
      const decodedChar = charCode - ROTATE;
      decodedStr += String.fromCharCode(decodedChar);
    } else {
      decodedStr += char;
    }
  }
  return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));

// NO FUNCIONA
// function decodeCipher(str, rotation, lowAlphabet, higherAlphabet) {
//   let decodedStr = "";
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     const charCode = str.charCodeAt(i);
//     if (lowAlphabet.test(char)) {
//       const decodedChar = charCode - rotation;
//       decodedStr += String.fromCharCode(decodedChar);
//     } else if (higherAlphabet.test(char)) {
//       const decodedChar = charCode + rotation;
//       decodedStr += String.fromCharCode(decodedChar);
//     } else {
//       decodedStr += char;
//     }
//   }
//   return decodedStr;
// }

// console.log(decodeCipher("A B C X Y Z", 2, /[A-X]/, /[Y-Z]/));