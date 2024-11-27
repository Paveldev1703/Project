// Modul C - Avansert Javascript!

// Repetisjon på funkshoner:

// Funksjon deklarasjon: OBS: En funksjon blir ikke kjørt når den blir deklarert!
// Her er minFunksjon navnet på funksjonen.
function minFuncrtion(){
    // Funksjonskodeblockk
//     console.log("Her er min funksjon");
}

minFuncrtion(); // Funksjonskall: Functioncall: Det er først ved kallet på funksjonen at den blir kjørt

// En funksjon med en parameter tall.
function minAndreFunksjon(tall, id = 5){
    // console.log(tall);
    // console.log(id);
}

minAndreFunksjon(10);
minAndreFunksjon(-5);
minAndreFunksjon("Dette er en tekst");
minAndreFunksjon(-5, 100);
minAndreFunksjon();


// Arrow funksjoner MÅ alltid ha en returverdi.
// Arrow/Pil funksjoner: Arrow funksjoner er "unnamed"/navnløse funksjoner.
const ReturVerdi = (tekst) => {
    return tekst;
};

// console.log(ReturVerdi("Ny test"));

// Enlinje Arrow funksjon 
// Så er return statement implied.
const svar = (tall) => {tall * 2}; // => er operator. Ikke den samme som >= og <=. Den er en arrow funksjon.
// console.log(typeof svar);
// console.log(svar);
// console.log(svar(5));
// console.log(svar("Dette er en tekst"));

//High order function/meroder

// En funksjon (ikke arow) som returnerer en funksjon

// Deklarerer en funksjon med navn nummer som tar to parameter.
// Parameter nr 1: nummer -> Denne funksjonen forventer en arre av nummer.
// Parameter nr 2: callback -> callback funskjonen du vil skal kjøres på arrayrn.
function nummer(nummer, callback){
    // Funksjonsblokk
    // MAP() metode -> High order metode.
    return nummer.map(callback); // Returnerer svartet til map() funksjonen.
}

const numbers = [1, 2, 3, 4, 5,]; // Oppretter en array av nummer 1 til 5.
const dobbel = nummer(numbers, num => num * 2);
// console.log(dobbel);
const numbers100 = nummer(numbers, num => num * 100);
// console.log(numbers100);

// Oppgave: Lag en funksjon som tar 2 parametere. numbers og callback. Kjør funksjonen med en callback som legger til et angitt tall til alle elementene i arrayen

function oppgave(numbers,callback){
    return numbers.map(callback);
}

const numbers2 = [1, 2, 3, 4, 5,]; // Oppretter en array av nummer 1 til 5.
const addNums = oppgave(numbers2, num => num + 10);
// console.log(addNums);


// ForEach 
// const nyArray = [];
// Returnerer ikke noe som helst.
const text = numbers.forEach((e,i,a) => {
    // nyArray[i] = e * 3;
    // console.log(i);
    // console.log(e)
    // console.log(a);
});

// console.log("Ny tabell:");
// console.log(nyArray);
console.log(text); 


// Filter metode -> High order.
// Må returnere enter true/false.
const frukter = ["Pære", "Appelsin", "Melon", "Mango", "Kiwi", "Eple", "Tomat" ];

const korringertFrukt = frukter.filter(frukt => frukt.startsWith("M"));
// console.log(frukter);
// console.log(korringertFrukt);


const korringertFrukt2 = frukter.filter((e) => {
    // frukt.startsWith("M");
    // console.log(e[0].toLowerCase() === 'm');
    return e[0].toLowerCase() === "M";
});
// console.log(frukter);
// console.log(korringertFrukt);

const sortertListeEtterLengde = frukter.sort((a,b) => {
    // console.log("Element a:" + a);
    // console.log("Element b:" + b);
    return a.length - b.length;
});
// console;e.log(sortertListeEtterLengde); 

// High order metode sort()
// Oppgave: Ta frukt lista og bruk sort metoden på denne. Send med en egen callbackfn som sorterer etter lengden på navnet til frukter.
// Sort metoden bruker to parametere på callback function. Parameter a og b normalt.

frukter.sort((a,b) => a.length - b.length);
// console.log(frukter);


// const sortNumbers = [8, 2, 6, 4, 7, 19, 12, 14];
// sortNumbers.sort((a,b) => a-b);

// console.log(sortNumbers);

// Andre high order metoder:
// reduce() -> Slår sammen alle verdier i en liste til en enkelt verdi.[1,2,3] = 6, avhenging av callback function som du angir.
// some() -> Boolean test
// every() -> Boolean test

// Eksampel på chaining uten utfylling av parametere til metodene.
// Chain metoder: const whatEver = frukter.sort().map()..filter().;
// forEach -> aldri brukka i chaining.

// Oppgave: Chain sidde tre metodene.
// 1: Sort skal sortere listen etter bokstav nr 3 (index 2);
// 2: Map skal legge til ! bakerst på alle elementene.
// 3: Filter skal filtrere listen, der kun frukter som starter på m blir med.
// Rekkefølge på chaining er valgfri. HUSK at kommandoene kjøres fra venstre til høyre.

// Oppgave 1





// Oppgave 2
function addSymbol(nummer, callback){
    return nummer.map(callback); 
}

const arrToSymbols = [1, 2, 3, 4, 5,]; 
const sybol = addSymbol(numbers, num => num + "!");

console.log(sybol);




// Oppgave 3

const fruktList = ["Pære", "Appelsin", "Melon", "Mango", "Kiwi", "Eple", "Tomat", "Banan", "Mandarin",];

const filterFrukt = fruktList.filter(frukt => frukt.toUpperCase().startsWith("M"));

console.log(filterFrukt);




