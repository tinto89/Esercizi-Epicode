//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1 = 2;
let numero2 = "4";

if (typeof numero1 === "number" && typeof numero2 === "number") {
  if (numero1 < numero2) {
    console.log(`Il secondo numero è il più grande`);
  } else if (numero1 === numero2) {
    console.log("I numeri sono uguali");
  } else console.log("Il primo numero è il più grande");
} else console.log("Non sono due numeri");

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = 35;
if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Large");
} else if (num >= 20) {
  console.log("Huge");
}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue;
  } else console.log(i);
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. 
  Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} Pari`);
  } else console.log(`${i} Dispari`);
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let intero1 = 4;
let intero2 = 6;

if (
  intero1 + intero2 === 8 ||
  intero1 - intero2 === 8 ||
  intero1 === 8 ||
  intero2 === 8
) {
  console.log("Condizione Verificata");
} else console.log("Condizione Non Verificata");

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. 
Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, 
l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 51;
let shipping = 8;
if (totalShoppingCart > 50) {
  console.log("Free Shipping Included");
} else {
  totalShoppingCart += shipping;
}
console.log(totalShoppingCart + "€ Total Cart");

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, 
  determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart1 = 51;
let blackFriday = totalShoppingCart1 - (totalShoppingCart1 * 20) / 100;
let shipping1 = 8;
if (totalShoppingCart1 > 50) {
  console.log("Free Shipping Included");
} else {
  totalShoppingCart += shipping1;
}
console.log(blackFriday + "€ Total Cart");

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let gender;
let isMale = true;

isMale ? (gender = "male") : (gender = "female");
console.log(gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i = 1; i <= 100; i++) {
  let result = i;
  if (i % 3 === 0 && i % 5 === 0) {
    result = "FizzBuzz";
  } else if (i % 3 === 0) {
    result = "Fizz";
  } else if (i % 5 === 0) {
    result = "Buzz";
  }
  console.log(result);
}
