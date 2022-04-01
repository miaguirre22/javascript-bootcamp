// var my = new Date("2017-07-31T15:30:00+0000");
// var offset = myDate.getTimezoneOffset() * 60 * 1000;

// var withOffset = myDate.getTime();
// var withoutOffset = withOffset - offset;

// console.log(myDate);
// const year = myDate.getFullYear();
// const month = myDate.getMonth();
// const day = myDate.getDate();
// console.log(year);
// console.log(month);
// console.log(day);

// const finalDate = new Date(year, month, day);

// console.log(finalDate);

var date = new Date("2017-07-31T15:30:00+0000");
console.log(
  date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
);

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  //   hour12: true,
};

var today = new Date("2022-03-03T13:17:01+01:00");
var today2 = new Date("2017-07-31T16:30:00+0000");

console.log(today.toLocaleDateString("en-US")); // 9/17/2016
console.log(today.toLocaleDateString("es-ES", options)); // viernes, 4 de marzo de 2022 10:49
console.log(today.toLocaleString());
console.log(today.toLocaleString("es-ES", { hour12: true }));
console.log(today2.toLocaleString("es-ES", { hour12: true }));
console.log(today2.toLocaleString("es-ES"));

// Intl.DateTimeFormat
console.log("Intl.DateTimeFormat().format()");
console.log("dateStyle: full y timeStyle: medium");
const esDate = new Intl.DateTimeFormat("es", {
  dateStyle: "full",
  timeStyle: "medium",
}).format(new Date("2017-07-31T16:30:00+0000"));

console.log("esDate \n", esDate);

console.log("Intl.DateTimeFormat().formatToParts()");
console.log("options");
const esDate2 = new Intl.DateTimeFormat("es", {
  weekday: "long",
  day: "2-digit",
  dayPeriod: "long",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
}).formatToParts(new Date("2017-07-31T16:30:00+0000"));

console.log("esDate2 \n", esDate2);

console.log("Intl.DateTimeFormat().format()");
console.log("options");
const esDate3 = new Intl.DateTimeFormat("es", {
  weekday: "long",
  day: "2-digit",
  dayPeriod: "long",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
}).format(new Date("2017-07-31T16:30:00+0000"));

console.log("esDate3 \n", esDate3);

// const resolveOption = new Intl.DateTimeFormat().resolvedOptions();
// console.log(resolveOption);

// Create a Date, personalizado
console.log("Create a Date, personalizado");
const formatDate = new Date("2017-07-31T16:30:00+0000");

console.log(".toString() \n", formatDate.toString());
console.log(".toDateString() \n", formatDate.toDateString());
console.log(".toGMTString() \n", formatDate.toGMTString());
console.log(".toISOString() \n", formatDate.toISOString());
console.log(".toLocaleDateString() \n", formatDate.toLocaleDateString());
