const pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

function pairElement(str) {
  // console.log(str.split("").map(i => { return [i, pairs[i]] }))
  return str.split("").map((i) => {
    return [i, pairs[i]];
  });
}

console.log(pairElement("GCG"));
