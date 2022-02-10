function largestOfFour(arr) {
  let longest = [];
  for (let i = 0; i < arr.length; i++) {
    let large = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > large) {
        large = arr[i][j];
      }
    }
    longest.push(large);
  }
  return longest;
}

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);

function largestOfFour2(arr) {
  let largest = [];
  for (let subarr of arr) {
    let large = subarr[0];
    for (let num of subarr) {
      if (num > large) {
        large = num;
      }
    }
    largest.push(large);
  }
  return largest;
}

console.log(
  largestOfFour2([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);

function largestOfFour3(arr) {
  let largest = [];
  for (let subarr of arr) {
    largest.push(Math.max(...subarr));
  }
  return largest;
}

console.log(
  "largestOfFour3:",
  largestOfFour3([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);
