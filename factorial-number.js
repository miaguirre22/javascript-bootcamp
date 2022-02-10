function factorialize(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialize(5));

function recursiveFactorial(num) {
  if (num == 1) {
    return 1;
  } else {
    return recursiveFactorial(num - 1) * num;
  }
}

console.log(recursiveFactorial(10));
