function truthCheck(collection, pre) {
  let hasPre = true;
  for (let obj of collection) {
    if (!obj[pre]) {
      console.log("empty pre: ", obj[pre]);
      hasPre = false;
    }
  }
  console.log(hasPre);
  return hasPre;
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male", age: 0 },
    { user: "Dipsy", sex: "male", age: 3 },
    { user: "Laa-Laa", sex: "female", age: 5 },
    { user: "Po", sex: "female", age: 4 },
  ],
  "age"
);
