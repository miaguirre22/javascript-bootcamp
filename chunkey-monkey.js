/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
  let chunk = [];
  while (arr.length > 0) {
    console.log("arr:  ", arr);
    console.log("chunk:", chunk);
    chunk.push(arr.slice(0, size));
    arr = arr.splice(size);
  }
  return chunk;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
