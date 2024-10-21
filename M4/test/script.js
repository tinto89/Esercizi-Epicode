let ordini = [
  { prodotto: "Telefono", prezzo: 500, quantita: 2 },
  { prodotto: "Laptop", prezzo: 900, quantita: 1 },
  { prodotto: "Cuffie", prezzo: 100, quantita: 4 },
];

let guadagno = ordini.reduce((acc, currentOrder) => {
  let quantity = currentOrder.prezzo * currentOrder.quantita;
  return acc + quantity;
}, 0);

console.log(guadagno);

let numeri = [1, 2, 3, 4, 5];

let totale = 0;
for (let i = 0; i < numeri.length; i++) {
  totale += numeri[i];
}
console.log(totale);
