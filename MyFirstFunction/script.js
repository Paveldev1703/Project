let Name = "Pavel"
let Surname = "Nekrasov"
console.log(Name,Surname);



let Numb1 = 4;
let Numb2 = 20;
let Total;
total = sum(Numb1,Numb2);
function sum (Numb1,Numb2){
  return Numb1 + Numb2;
}
console.log (Total);



// let og const som nøkkelordå opprette variabler 
// const forNavn = "Pavel";
// const alder = 18.9;
// const dato = "01/01/1999"


// Det er foskjell på å skrive ut  verdien av en variabel og
// en tekst.
// console.log ("forNavn");
// console.log (forNavn);
// console.log (forNavn);

// forNavn = "Per"



// Datatyper;
// string = text
// number = tall - Javascript bruker dette !!!
// integer / int= haltall
// float = desimaltall
// boolean = true/false
// bit = 0 eller 1
// byte = 8 bit
// date = dato

// console.log(typeof forNavn + " - forNavn");
// console.log(forNavn);
// console.log(typeof alder + " - alder");
// console.log(alder);
// console.log(typeof dato);


//  Aritmetiske Operatorer
// ----------------------------------------------------
// PEMDAS -> Rekkefølge for matematiske kalkulasjoner. 
// + - * / % er operatorer 
// Brøk skrives som venlig deling.
//   1 
// -----
//   4   = 1/4
// = Tilordningsoperator
// 
// Shorthand operators:
// +=, -=, *=, /=, %= Eks: alder += 1; => alder = alder + 1;
// ++ -- Øker eller minker variabelen med 1. Syntax: alder++;
// varNavn++ eller varNavn-- -> Øker eller minker variabelen med 1 etter at uttrykket er beregnet. Syntax: alder++; Porstfix: Post= Etter

// ++varNavn eller --varNavn -> Øker eller minker variabelen med 1 før resten av uttrykket blir beregnet. Syntax: --alder; Prefiks: Pre= Før




// let navn = "John";
// let alder = 17;
// let alder2; //deklarasjon
// let sumAlder = 0;
// alder2 = 10;
// sumAlder = alder / alder2; 
// alder = alder + alder2;
// alder += alder2; // En hurtigere måte å skrive linje ovenfor på.
// alder2 = 4 ** 2; // Adre språk bruker ^ istedet for **
// ader2 = alder2 /0;

// console.log(alder);
// console.log(alder +1);
//console.log(alder2);
// console.log(sumAlder);




// Sammenlignings operatorer:
// -----------------------------------------
// <, >, <=, >=, ==, !=
// == -> Sammenlihning verdier uavhenging av datatype
// === -> Sammenlihning verdier og datatype....BRUK DENNE !!!!!




let tall = 1;
let sann = false;
let usann = false;


// Conditionals:
// -------------------------------------------
// if (uttrykk) {
//
// }
//
// uttrykk må kunne evalueres som sann/usann ( end: true/false )

if (tall === "1") { // kode som kommer mellom {} er inne i en kode blokk
  console.log("Dette var sant")
  console.log(tall);
  tall = tall + 1;
}