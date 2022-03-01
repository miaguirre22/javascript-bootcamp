function findElement(arr, func) {
  let num = 0;
  for (let i of arr) {
    if (func(i)) {
      return i;
    }
  }
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
console.log(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  })
);

function findElement2(arr, func) {
  console.log(arr.find(func));
  let num = arr.find(func);
  return num;
}

console.log(
  "test 1:",
  findElement2([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);
console.log(
  "test 2:",
  findElement2([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  })
);
