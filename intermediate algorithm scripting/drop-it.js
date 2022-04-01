function dropElements(arr, func) {
  console.log("arr in", arr);
  console.log(func.toString());
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(i, arr[i]);
    if (!func(arr[i])) {
      console.log("callback false");
      console.log("shift");
      arr.shift();
      i--;
    }
    if (func(arr[i])) {
      console.log("callback true");
      break;
    }
  }
  console.log("arr out", arr);
  return arr;
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});
dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
});
