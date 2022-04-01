function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  for (let obj of collection) {
    let matching = true;
    for (let prop in source) {
      if (obj[prop] !== source[prop]) {
        matching = false;
      }
    }
    if (matching) {
      arr.push(obj);
    }
  }
  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
