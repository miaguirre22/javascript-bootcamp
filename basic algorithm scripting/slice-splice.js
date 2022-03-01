// just using .slice
function frankenSplice(arr1, arr2, n) {
  console.log("just using .slice")
  let arr3 = [];
  let arr4 = [];
  arr3 = arr2.slice(0, n);
  arr4 = arr2.slice(n);
  for (let i = 0; i < arr1.length; i++) {
    arr3[n + i] = arr1[i];
  }
  n = arr3.length;
  for (let i = 0; i < arr4.length; i++) {
    arr3[n + i] = arr4[i];
  }
  return arr3;
}

console.log("frankenSplice([1, 2, 3], [4, 5, 6], 1)", frankenSplice([1, 2, 3], [4, 5, 6], 1));

// using .slice and .splice
function sliceAndSplice(arr1, arr2, n) {
  console.log("using .slice and .splice")
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n + i, 0, arr1[i]);
  }
  return result;
}

console.log("sliceAndSplice([1, 2, 3], [4, 5, 6], 1)", sliceAndSplice([1, 2, 3], [4, 5, 6], 1));
