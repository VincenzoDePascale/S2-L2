/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const numberX = 5;
const numberY = 7;

if (numberX < numberY) {
  console.log("ex.1:", "x < y");
} else if (numberX > numberY) {
  console.log("ex.1:", "x > y");
} else if (numberX === numberY) {
  console.log("ex.1:", "x = y");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const numberT = 9;

if (numberT !== 5) {
  console.log("ex.2:", "t !== 5");
} else if (numberT === 5) {
  console.log("ex.2:", "t = 5");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numberJ = 27;
const resultJ = numberJ % 5;

if (resultJ === 0) {
  console.log("ex.3:", numberJ, "is a multiple of 5");
} else if (resultJ !== 0) {
  console.log("ex.3:", numberJ, "is not a multiple of 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numberM = 8;
const numberN = 8;

if (numberM === 8 && numberN === 8) {
  console.log("ex.4:", "m = 8, n = 8");
} else if (numberM === 8) {
  console.log("ex.4:", "m = 8");
} else if (numberN === 8) {
  console.log("ex.4:", "n = 8");
} else if (numberM + numberN === 8) {
  console.log("ex.4:", "m + n = 8");
} else if (numberM - numberN === 8) {
  console.log("ex.4:", "m - n = 8");
} else if (numberN - numberM === 8) {
  console.log("ex.4:", "n - m = 8");
}

//secondo svolgimento

if (numberM === 8 && numberN !== 8) {
  console.log("ex.4b:", "only m === 8");
} else if (numberN === 8 && numberM !== 8) {
  console.log("ex.4b:", "only n === 8");
} else if (numberM === 8 && numberN === 8) {
  console.log("ex.4b:", "m and n are equal to 8");
} else if (numberM !== 8 && numberN !== 8) {
  console.log("ex.4b:", "m and n are not equal to 8");
}

if (numberM + numberN === 8) {
  console.log("ex.4b:", "m + n = 8");
} else if (numberM - numberN === 8) {
  console.log("ex.4b:", "m - n = 8");
} else if (numberN - numberM === 8) {
  console.log("ex.4b:", "n - m = 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const object1 = 12;
const object2 = 5;
const object3 = 30;
const object4 = 21;
let shipment = 10;

//inserire gli oggetti desiderati nel carrello

let prePrice = object4 + object3 + object1;

if (prePrice < 50) {
  console.log(
    "ex.5:",
    "prePrice:",
    prePrice,
    "euro",
    "+ costi spedizione:" + shipment,
    "=",
    "euro",
    "total:",
    prePrice + shipment
  );
} else if (prePrice > 50) {
  shipment = 0;
  console.log(
    "ex.5:",
    "prePrice:",
    prePrice,
    "euro",
    "+ costi spedizione:" + shipment,
    "=",
    "euro",
    "total:",
    prePrice + shipment
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

totalPrice = prePrice - (prePrice / 100) * 20;

if (totalPrice < 50) {
  console.log(
    "ex.6:",
    "prePrice scontato:",
    totalPrice,
    "euro",
    "+ costi spedizione:" + shipment,
    "=",
    "euro",
    "total:",
    totalPrice + shipment
  );
} else if (totalPrice > 50) {
  shipment = 0;
  console.log(
    "ex.6:",
    "prePrice scontato:",
    totalPrice,
    "euro",
    "+ costi spedizioni:" + shipment,
    "=",
    "euro",
    "total:",
    totalPrice + shipment
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const v1 = 7;
const v2 = 1;
const v3 = 3;

if (v1 > v2 && v2 > v3) {
  console.log("ex.7:", "v1>v2>v3");
} else if (v1 > v3 && v3 > v2) {
  console.log("ex.7:", "v1>v3>v2");
} else if (v2 > v1 && v1 > v3) {
  console.log("ex.7:", "v2>v1>v3");
} else if (v2 > v3 && v3 > v1) {
  console.log("ex.7:", "v2>v3>v1");
} else if (v3 > v1 && v1 > v2) {
  console.log("ex.7:", "v3>v1>v2");
} else if (v3 > v2 && v2 > v1) {
  console.log("ex.7:", "v3>v2>v1");
}

// inserire la possibilita in cui almeno due numeri sono uguali

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const TorN = "lairsugh";

if (typeof TorN === Number) {
  console.log("ex.8:", "the tipe of data is a number");
} else if (typeof TorN !== Number) {
  console.log("ex.8:", "the tipe of data is not a number, but", typeof TorN);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numberP = 30;
const resultP = numberP % 2;

if (resultP === 0) {
  console.log("ex.9:", numberP, "is even");
} else if (resultP !== 0) {
  console.log("ex.9:", numberP, "is not even");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 10;
if (val < 5) {
  console.log("ex.10:", val, "Meno di 5");
} else if (val < 10) {
  console.log("ex.10:", val, "Meno di 10");
} else if (val >= 10) {
  console.log("ex.10:", val, "Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

console.log("ex.11a:", me);

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log("ex.11b:", me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log("ex.12:", me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.skills[2];
console.log("ex.13:", me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arrayEx = [];
console.log("ex.14a:", "arrayEx contain:", arrayEx);
arrayEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("ex.14b:", "now arrayEx contain:", arrayEx);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arrayEx[9] = 100;
console.log("ex.15:", "now arrayEx contain:", arrayEx);
