// using .splice()
function destroyer(arr) {
  console.log(arguments[0]);
  let [array, ...args] = arguments;
  // for(let i = 1; i < arguments.length; i++) {
  //   // console.log(arguments[i])
  //   args.push(arguments[i])
  // }
  console.log(args);
  for (let i = 0; i < array.length; i++) {
    if (args.indexOf(array[i]) >= 0) {
      console.log(array[i]);
      array.splice(i, 1);
      console.log(array);
      i--;
    }
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3, 5));

// using .filter() and .includes()
// function destroyer(arr) {
//   const [array, ...args] = arguments
//   return array.filter(member => {
//     return !args.includes(member)
//   })
// }
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3, 5))
