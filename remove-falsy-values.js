function bouncer(arr) {
  console.log("arr:", arr);
  let newArray = [];
  for (let i in arr) {
    if (arr[i]) newArray.push(arr[i]);
  }
  console.log("newArray:", newArray);
  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));

function bouncer2(arr) {
  return arr.filter(Boolean);
}

console.log("bouncer2", bouncer2([7, "ate", "", false, 9]));
console.log("bouncer2", bouncer2([false, null, 0, NaN, undefined, ""]));
