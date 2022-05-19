// el valor de cada tipo de billete expresado en centavos
const LOOKUP = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};

function checkCashRegister(price, cash, cid) {
  // console.log("cid: ", cid)
  // almacenar variable con cantidad de cambio adeudada
  const changeDue = cash - price;
  // console.log("changeDue: ", changeDue)
  let changeDueCents = changeDue * 100;
  // console.log("changeDueCents: ", changeDueCents)

  // sumar todos los centavos en la caja registradora
  const available = cid.reduce((acc, billType) => {
    return acc + billType[1] * 100;
  }, 0);
  // console.log("available: ", available)

  // si los centavos en el cid es igual al cambio que debo, devuelvo
  // {status: "CLOSED", change: cid}
  if (available === changeDueCents) {
    return { status: "CLOSED", change: cid };
  }

  // invertir el orden del cid, iterar a travez de el,
  // y sumar por cada tipo de billete,
  // la cantidad de dinero necesario para ese tipo de billete
  const change = cid.reverse().map(([name, amount]) => {
    // iterar mientras el cambio debido es mayor al valor del tipo de billete
    // y el monto del dinero para ese billete es suficiente
    let total = 0;
    const nameValue = LOOKUP[name];
    let amountCents = amount * 100;
    while (nameValue <= changeDueCents && amountCents > 0) {
      // sumar el valor de un billete al total
      total += nameValue;
      // restar el nameValue del total de cambio que debo
      changeDueCents -= nameValue;
      // restar el nameValue de la cantidad de dinero
      // de el tipo de billete actual que tengo disponible
      amountCents -= nameValue;
    }
    // console.log("name: ", name, "total / 100: ", total / 100)
    return [name, total / 100];
    // filtra solo los tipos de billete con cantidad mayor a cero
  }).filter(([, amount]) => amount > 0);

  // console.log("change avaible", change);
  // console.log("changeDueCents: ", changeDueCents)

  const changeTotal = change.reduce((acc, [, amount]) => {
    return acc + amount;
  }, 0.00);

  // console.log("change total", changeTotal);

  // si el dinero en el cid no alcanza, devuélvelo
  // {status: "INSUFFICIENT-FUNDS", change: []}
  // if (changeTotal < changeDue) {
    if (changeDueCents > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}

console.log(checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]));