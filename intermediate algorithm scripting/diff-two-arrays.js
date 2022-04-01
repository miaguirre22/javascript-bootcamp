function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2);
  const result = [];
  for (let member of newArr) {
    let isInArr1 = arr1.indexOf(member) !== -1;
    let isInArr2 = arr2.indexOf(member) !== -1;
    if (!(isInArr1 && isInArr2)) {
      result.push(member);
    }
  }
  return result;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
