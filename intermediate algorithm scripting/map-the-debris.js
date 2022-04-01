function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  for (let i of arr) {
    let a3 = (earthRadius + i.avgAlt) ** 3;

    let t = 2 * Math.PI * Math.sqrt(a3 / GM);

    i.orbitalPeriod = Math.round(t);
    delete i.avgAlt;
  }
  return arr;
}

console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);
