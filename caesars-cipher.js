function rot13(str) {
    let result = ""
    let reg = /[A-Z]/
    let alf = {
      "A":"N", 
      "B":"O",
      "C":"P",
      "D":"Q",
      "E":"R",
      "F":"S",
      "G":"T",
      "H":"U",
      "I":"V",
      "J":"W",
      "K":"X",
      "L":"Y",
      "M":"Z",
      "N":"A",
      "O":"B",
      "P":"C",
      "Q":"D",
      "R":"E",
      "S":"F",
      "T":"G",
      "U":"H",
      "V":"I",
      "W":"J",
      "X":"K",
      "Y":"L",
      "Z":"M"}
    for(let i = 0; i < str.length; i++){
      if(reg.test(str[i])){
        result += alf[str[i]]
      } else {
        result += str[i]
      }
    }
    return result;
  }
  
  rot13("SERR PBQR PNZC");
  console.log(rot13("SERR PBQR PNZC"))