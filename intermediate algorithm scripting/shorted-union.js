function uniteUnique(arr) {
  console.log(arguments);
  let newArr = [];
  for (let elem of arguments) {
    elem.map((i) => (newArr.indexOf(i) < 0 ? newArr.push(i) : null));
  }
  console.log(newArr);
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
