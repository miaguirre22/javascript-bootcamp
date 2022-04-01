function sumPrimes(num) {
  let primes = [];
  let prime = 1;
  for (let i = 2; i <= num; i++) {
    let divisors = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisors.push(j);
      }
    }
    if (divisors.length === 2) {
      primes.push(i);
    }
  }
  let result = 0;
  for (let i of primes) {
    result += i;
  }
  console.log("result", result);
  return result;
}

sumPrimes(10);
sumPrimes(977);
// console.log(sumPrimes.toString())