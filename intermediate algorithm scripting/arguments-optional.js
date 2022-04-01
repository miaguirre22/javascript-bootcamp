let iteracion = 0;
function addTogether() {
  console.log("iteracion:", iteracion, "args:", arguments);
  iteracion++;
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  if (second === undefined) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}

console.log(addTogether(1)(2));
// console.log(addTogether(2,3))
// console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))
