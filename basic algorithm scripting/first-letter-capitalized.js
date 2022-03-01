function titleCase(str) {
  let cap = [];
  let words = "";
  words = str.split(" ");
  for (let word of words) {
    cap.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  return cap.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
