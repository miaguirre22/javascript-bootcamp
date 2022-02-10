function truncateString(str, num) {
  let truncate = "";
  if (num >= str.length) {
    return str;
  }
  for (let i = 0; i < num; i++) {
    truncate = truncate + str[i];
  }
  return truncate + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

function truncateString2(str, num) {
  let truncate = "";
  truncate = str.slice(0, num) + "...";
  return truncate;
}

console.log(truncateString2("A-tisket a-tasket A green and yellow basket", 8));

function truncateString3(str, num) {
  let truncate = "";
  truncate = str.substring(0, num) + "...";
  return truncate;
}

console.log(truncateString3("A-tisket a-tasket A green and yellow basket", 8));
