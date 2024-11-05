// let Name = "Pavel"
// let Surname = "Nekrasov"
// console.log(Name,Surname);



// let Numb1 = 4;
// let Numb2 = 20;
// let Total;
// Total = sum(Numb1,Numb2);
// function sum (Numb1,Numb2){
//   return Numb1 + Numb2;
// }
// console.log (Total);



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

// let alder = 41;


// console.log(alder >= 18);
// console.log(alder < 40);
// console.log(alder >= 18 && alder < 40);

// if (alder >= 18 && alder < 40) { // kode som kommer mellom {} er inne i en kode blokk
//   // Dette blokken kjører hvis uttrykket er sann/usann
//   console.log("Du er over 18 år og under 40 år") 
//   //console.log(alder);
//   //alder = alder + 1;
// }
//   else{
//     //Denne blokken blir kjørt når uttrykket evalueres til false/usann
//     console.log("Din alder er utenfor målgruppen vår"); 
//   }



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


// Metoder
// Her er .log() en metode som tar inn en parameter. log() er metode på objektet console.
// --------------------------------------------

console.log("Test");

// Numbers
// --------------------------------------------
const tall = 131.45138;
let tall2 = 2;
let sum;
let sum2;

sum2 = tall + tall2;
sum = tall.toString() + tall2.toString(); // Konverterer tall til tekst med toString()


// console.log( typeof tall.toString());
// console.log(typeof tall);
// console.log(typeof sum);
// console.log(sum);
// console.log(typeof sum2);
// console.log(sum2);

// console.log(tall.toFixed(2)); // Avrunder til angitt antall desimaler.
// console.log(tall.toPrecision(3)); // Gir et svar med totalt antall siffer i svaret.


// Strings metoder og properties.
// ----------------------------------------------

// const text = "     Dette er en tekst.";

// console.log(text);
// console.log(text.length); // length er en property og ikke en ,etode. returnerer antall tegn i en string.
// // Properties bruker ikke () ved kjoring.



// let fornavn = "Per";
// let dag = "MANdag"
// console.log(fornavn.length);
// if (fornavn.length != 0) { 
//   // Sjeker om fornavn har en tom string.
//   console.log("Brukeren har tastet inn noe i feltet.");
// } else {
//   console.log("Brukeren har ikke tastet inn noe i feltet.");
// }


// console.log(text.charAt(2)); // Returnerer er tegn på angitt Index.
// console.log(text.charCodeAt(2)); // Returnerer ascii koden for tegnet angitt på posisjonen angitt med index.
// console.log(text.concat(fornavn)); // Slår sammen to string er og returnerer svartet.
// console.log(text + fornavn); // Alternativ måte å kontaktiner to tekster. 
// console.log(text.toUpperCase); // Returner stringen med kun store bokstaver.
// console.log(text.toLowerCase); // Returner stringen med kun små bokstaver.
// // if (dag.toLowerCase() === "mandag"){
// //   console.log("Det er mandag");
// // }


// console.log("EkSEMPEL".toLowerCase()); // Eksempel på at metoder kan benyttes direkte på alle stringer.
// console.log(text.indexOf("tekst")); // Returnerer -1 hvis søkestring ikke finnes, ellers så returnerer den
//                                   // index til første treff der søkestrenger starter.
// console.log(text.replace("en", "et")); // Erstatte første treff på angitt søkestring med en ny angitt string.
// console.log(text.search("er")); // Returnerer -1 hvis ikke treff. Hvis ikke index til første treff på angitt søkestring.
// console.log(text.repeat(3)); // Returnerer stringen * angitt antall ganger den skal repeters.
// console.log(text.slice(3, 7)); // Returnerer en string med innhold fra index 3 til og med 5 fra text.
// console.log(text.slice(3)); // Returnerer en string med innhold fra index 3 og til slutten.
// console.log(text.slice(-3)); // Returnerer en string mde innhold fra index -3 og til slutten. -3 regnes 3 indexer fra slutten mot  start.
// console.log(text.slice(-10, -3));  // Returnerer en string med innhold fra index -3 til og med index 2.

// console.log(text.substring(3, 10)); // Gjør det samme som slice uten negative indexer. Bruk Slice istedet!
// lottorekket = "4;34;5;8;21;16;9";
// console.log(lottorekket.split(";")); // Konverterer en string til en array. OBS:Søke tegn blir fjernet fra stringen.
// console.log(text.trim()); // Trim fjerner ledende og etterfølgende space fra en strin.
// console.log(text);



//Arrays - Lister/Tabeller
// -----------------------------------------------
const bilMerker = ["BMW", "Mercedes", "Audi", "Volvo", "Ford", "Saab", "Peugeot", ];
const extraBilMErker = ["VW", "Toyota", "Honda", "Mazda", "Mitsubishi"];
console.log(bilMerker); // Skrive ut hele listen.
console.log(bilMerker.length); // Property. Ikke bruk ().
// console.log(bilMerker.concat(extraBilMErker)); // Returnerer ny liste der angitt liste er lagt til på slutten.
//console.log(bilMerker.sort()); // Sorterer original liste og returnerer original liste etter sortering, selv om det er en const.
// console.log(bilMerker.pop()); // Endrer original liste. Fjerner siste element og returnerer siste element.
// console.log(bilMerker.push("Porche")); // Setter inn angitt element på slutten av lista. Endrer original.
// console.log(bilMerker.join(" ")); // Legger till angitt verdi bak på hvert element og konverterer lista til string. Endrer ikke på original liste. Returnerer stringen som den lager.
// console.log(bilMerker.reverse()); // Snur om rekkefølgen på elementene, og endrer på original lista.
// console.log(bilMerker.shift()); // Returnerer første element (index 0), og juster my index på alle elementer.
// console.log(bilMerker.slice(3, 5)); // Returnerer en ny liste bestående av elementer fra og med angitt index til angitt index (dvs ikke med indexen som er angitt som slutt index.)
// console.log(bilMerker.splice(3,3,"Mercedes", "Audi")); // Endre original liste. Fjerner elementer og har mulighet for å sette inn nye elementer fra samme plass den fjernet elementer fra.
console.log(bilMerker.unshift("Skoda")); // Endrer på original liste. Setter inn element først i lista.
console.log("Etter denne tekster vises original liste:");
console.log(bilMerker);

/** // JSDoc Comment

* @param {Array}
* @param {Number}
* @returns {String}
*/