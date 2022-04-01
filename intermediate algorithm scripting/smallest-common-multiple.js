const isScm = (x, y) => {
  return x % y === 0;
};
function smallestCommons(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  console.log(sortArr[0], sortArr[sortArr.length - 1]);
  let scm = 1;
  let iterar = true;
  while (iterar) {
    for (let i = sortArr[0]; i <= sortArr[sortArr.length - 1]; i++) {
      if (!isScm(scm, i)) {
        console.log(scm, "is not scm of", i);
        scm++;
        iterar = true;
        break;
      } else {
        console.log(scm, "is scm of", i);
        iterar = false;
      }
    }
  }
  console.log(scm);
  return scm;
}

// smallestCommons([1,5])
smallestCommons([5, 7]);
// smallestCommons([23, 18])
