/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
  console.log(arr, num);
  let shortArr = arr;
  let index = arr.length;
  let greaterThanNum = 0;
  let findIndex = 0;
  shortArr.sort((a, b) => a - b);
  console.log("shortArr:", shortArr);
  greaterThanNum = shortArr.filter((i) => i >= num);
  console.log("greaterThanNum:", greaterThanNum);
  findIndex = shortArr.indexOf(greaterThanNum[0]);
  console.log("findIndex: ", findIndex);
  if (findIndex >= 0) index = findIndex;
  return index;
}

// console.log(getIndexToIns([40, 60], 50))
// console.log(getIndexToIns([5, 3, 20, 3], 5))
// console.log(getIndexToIns([10, 20, 30, 40, 50], 30))
// console.log(getIndexToIns([2, 5, 10], 15))
// console.log(getIndexToIns([], 1))
console.log(getIndexToIns([3, 10, 5], 3));
