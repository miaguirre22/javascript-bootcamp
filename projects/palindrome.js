function stringWithOnlyAlphaNumeric(str) {
    return str.replace(/[\W_]/ig, "")
  }
  // console.log(stringWithOnlyAlphaNumeric("Hello, _world!"))
  function stringLowercased(str) {
    return str.toLowerCase(str)
  }
  // console.log(stringLowercased("HELLO word!"))
  const stringReversed = str => {
    let result = "";
    for(let i = str.length-1; i >= 0; i--) {
      result += str[i]
    }
    return result
  }
  // console.log(stringReversed("hello wordl"))
  
  function palindrome(str) {
    //Remove non-alphanumeric charters
    const cleanedStr = stringWithOnlyAlphaNumeric(str)
    //Make string lowercase
    const lowercaseStr = stringLowercased(cleanedStr)
    //Reverse the string
    const reversedStr = stringReversed(lowercaseStr)
    //Return the compariso of:
    //Reversed string equal to? lowercase cleaned up string
    console.log(`Is "${lowercaseStr} equals to "${reversedStr}"` )
    return lowercaseStr === reversedStr;
  }
  
  console.log(palindrome("race car"));