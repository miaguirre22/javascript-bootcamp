const characters = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};
function convertHTML(str) {
  let arr = [];
  for (let i of str) {
    if (characters[i]) {
      arr.push(characters[i]);
    } else {
      arr.push(i);
    }
  }
  return arr.join("");
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
