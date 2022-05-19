function checkCashRegister(price, cash, cid) {
  let change = cid;

  // almacenar variable con cantidad de cambio adeudada
  const changeDue = cash - price;
  const changeDueCents = changeDue * 100;
  console.log("changeDue: ", changeDue);
  // sumar todo el dinero en la caja registradora
  const available = cid.reduce((acc, current) => {
    return acc + current[1] * 100;
  }, 0);
  if (available < changeDueCents) {
    console.log("change: ", change);
    return change;
  }
  console.log("available: ", available);
  // si el dinero en el cid no alcanza, devuélvelo
  // {status: "INSUFFICIENT-FUNDS", change: []}

  return change;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
