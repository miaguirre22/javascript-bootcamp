function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    console.log("empty string");
    return "";
  }
  if (num == 1) {
    return str;
  } else {
    return repeatStringNumTimes(str, num - 1) + str;
  }
  // return str;
}

console.log(repeatStringNumTimes("abc", 3));
