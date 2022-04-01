function sumFibs(num) {
  let fib = [1, 1];
  let sum = 0;
  while (sum <= num) {
    sum = fib[fib.length - 2] + fib[fib.length - 1];
    if (sum <= num) {
      fib.push(sum);
    }
  }
  let odds = fib.filter((i) => i % 2);
  let result = 0;
  for (let i of odds) {
    result += i;
  }
  return result;
}

sumFibs(4);
sumFibs(1000);
