class Roman {
    constructor(numberToConvert){
      this.number = numberToConvert;
      this.symbol = "";
    }
    convertNumber(symbol, value) {
      while(this.number >= value) {
        this.symbol += symbol;
        this.number -= value
      }
    }
  }
  
  function convertToRoman(num) {
    let roman = new Roman(num);
    console.log(roman)
    roman.convertNumber("M", 1000)
    roman.convertNumber("CM", 900)
    roman.convertNumber("D", 500)
    roman.convertNumber("CD", 400)
    roman.convertNumber("C", 100)
    roman.convertNumber("C", 100)
    roman.convertNumber("XC", 90)
    roman.convertNumber("L", 50)
    roman.convertNumber("XL", 40)
    roman.convertNumber("X", 10)
    roman.convertNumber("IX", 9)
    roman.convertNumber("V", 5)
    roman.convertNumber("IV", 4)
    roman.convertNumber("I", 1)
  
    // while(num >= 10) {
    //   roman += "X"
    //   num -= 10
    // }
    // while(num >= 9) {
    //   roman += "IX"
    //   num -= 9
    // }
    // while(num >= 5) {
    //   roman += "V"
    //   num -= 5
    // }
    // while(num >= 4) {
    //   roman += "IV"
    //   num -= 4
    // }
    // while(num >= 1){
    //   roman += "I"
    //   num--
    // }
   return roman.symbol;
  }
  
  console.log(convertToRoman(13));
  
  //otras posibles soluciones: usar objetos
  const switchRom = (num) => {
    switch(num) {
      case num = 10: 
        return "X"
      case num = 5:
        return "V"
      default:
        return "I"
    }
  }
  const rom = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I"
  }
  // console.log(rom)