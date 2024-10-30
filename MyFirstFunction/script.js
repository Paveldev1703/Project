let Name = "Pavel"
let Surname = "Nekrasov"
console.log(Name,Surname);



let Numb1 = 4;
let Numb2 = 20;
let Total;
Total = sum(Numb1,Numb2);
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
// > -> Hvis det er større enn
// < -> Hvis det er mindre enn
// >= -> Hvis det er større eller lik
// <= -> Hvis det er mindre eller lik
// != -> Hvis det er ulik



// let sann = false;
// let usann = false;


// Logiske operatorer:
// -----------------------------------------
// && -> logisc AND operator
// || -> eller
// ! -> ikke





// Conditionals:
// -------------------------------------------
// if (uttrykk) {
//
// }
//
// uttrykk må kunne evalueres som sann/usann ( end: true/false )


//console.log(typeof alder);
//console.log(typeof 1);

let alder = 41;


console.log(alder >= 18);
console.log(alder < 40);
console.log(alder >= 18 && alder < 40);

if (alder >= 18 && alder < 40) { // kode som kommer mellom {} er inne i en kode blokk
  // Dette blokken kjører hvis uttrykket er sann/usann
  console.log("Du er over 18 år og under 40 år") 
  //console.log(alder);
  //alder = alder + 1;
}
  else{
    //Denne blokken blir kjørt når uttrykket evalueres til false/usann
    console.log("Din alder er utenfor målgruppen vår"); 
  }



//   if (alder < 40) { // kode som kommer mellom {} er inne i en kode blokk
//   // Dette blokken kjører hvis uttrykket er sann/usann
//   console.log("Du er under 40") 
//   //console.log(alder);
//   //alder = alder + 1;
// }
//   else{
//     //Denne blokken blir kjørt når uttrykket evalueres til false/usann
//     console.log("Du er over 40"); 
//   }