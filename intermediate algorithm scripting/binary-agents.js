// String.fromCharCode(number) will return a String from a UTF-16 char code
// parseInt(binary , 2) will transform a base 2 number string into a base 10 number

function binaryAgent(str) {
  return str
    .split(" ")
    .map((i) => String.fromCharCode(parseInt(i, 2)))
    .join("");
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
