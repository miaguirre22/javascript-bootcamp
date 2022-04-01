function sumAll(arr) {
  let result = 0;
  const sortArr = arr.sort((a, b) => a - b);
  for (let i = sortArr[0]; i <= sortArr[1]; i++) {
    result += i;
  }
  return result;
}

console.log(sumAll([1, 4]));
console.log(sumAll([10, 5]));
