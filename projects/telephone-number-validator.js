const reg = /^(1\s?)?\d{3}-\d{3}-\d{4}$/;
const reg2 = /^(1\s?)?\(\d{3}\)\s?\d{3}-\d{4}$/;
const reg3 = /^(1\s?)?\d{3}\s?\d{3}\s?\d{4}$/;

// const reg4 = /^1\s\d{3}\s\d{3}\s\d{4}$/
// const reg5 = /^1\s\d{3}-\d{3}-\d{4}$/
// const reg6 = /^1\s\(\d{3}\)\s\d{3}-\d{4}$/

// const combReg = /^(1\s?)?\d{3}-\d{3}-\d{4}/

const arrReg = [reg, reg2, reg3];

function telephoneCheck(str) {
  for (let reg of arrReg) {
    if (reg.test(str)) {
      return true;
    }
  }
  return false;
  // return reg.test(str) || reg2.test(str) || reg3.test(str)
  // return combReg.test(str)
}

console.log("1 (555) 555-5555 ->", telephoneCheck("1 (555) 555-5555"));
console.log("1(555)555-5555 ->", telephoneCheck("1(555)555-5555"));
console.log("1 555)555-5555 ->", telephoneCheck("1 555)555-5555"));
console.log("-1 (757) 622-7382 ->", telephoneCheck("-1 (757) 622-7382"));
console.log("11 555-555-5555 ->", telephoneCheck("11 555-555-5555"));
console.log("555-555-5555 ->", telephoneCheck("555-555-5555"));
console.log("(555)555-5555 ->", telephoneCheck("(555)555-5555"));
console.log("(555) 555-5555 ->", telephoneCheck("(555) 555-5555"));
console.log("555 555 5555 ->", telephoneCheck("555 555 5555"));
console.log("5555555555 ->", telephoneCheck("5555555555"));
console.log("1 555 555 5555 ->", telephoneCheck("1 555 555 5555"));
console.log("1 555-555-5555 ->", telephoneCheck("1 555-555-5555"));
