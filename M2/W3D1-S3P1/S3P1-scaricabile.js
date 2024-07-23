/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1, num2) {
  let result = num1 + num2;
  if (num1 === num2) {
    result = (num1 + num2) * 3;
  }
  return result;
}
console.log(crazySum(3, 3));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

let number = 101;

function boundary(num) {
  if ((num >= 20 && num <= 100) || num === 400) {
    return true;
  } else return false;
}

console.log(boundary(number));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

let = stringToReverse = "EPICODE";

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString(stringToReverse));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(string) {
  // solo per 2 parole
  let splitString = string.split(" ");
  let first = splitString[0].charAt(0).toUpperCase();
  let second = splitString[1].charAt(0).toUpperCase();
  let result =
    first + splitString[0].slice(1) + " " + second + splitString[1].slice(1);
  return result;
}

console.log(upperFirst("ciao amici"));

function upperFirst2(string) {
  //ciclo per parole infinite
  let splitString = string.split(" ");
  let resultString = [];
  for (let i = 0; i < splitString.length; i++) {
    let splitString2 = splitString[i].split("");
    splitString2[0] = splitString2[0].toUpperCase();
    resultString.push(splitString2.join(""));
  }
  return resultString.join(" ");
}

console.log(upperFirst2("ciao amici carissimi"));

function upperFirst3(string) {
  // se la parola è 1 sola
  let splitString = string.split(" ");
  let result = splitString[0].charAt(0).toUpperCase() + splitString[0].slice(1);
  return result;
}

console.log(upperFirst3("ciao"));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
