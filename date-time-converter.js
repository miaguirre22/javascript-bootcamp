var myDate = new Date("2017-07-31T15:30:00+0000");
var offset = myDate.getTimezoneOffset() * 60 * 1000;

var withOffset = myDate.getTime();
var withoutOffset = withOffset - offset;

console.log(myDate)
const year = myDate.getFullYear()
const month = myDate.getMonth()
const day = myDate.getDate()
console.log(year)
console.log(month)
console.log(day)

const finalDate = new Date(year, month, day)

console.log(finalDate)

var date = new Date('2017-07-31T15:30:00+0000');
console.log((date.getMonth()+1) + '/' + date.getDate() + '/' +  date.getFullYear());