// deklarerer variabelen bil og setter den til en objekt datatype ved å angi egenskaper og metoder.
// Blir merke, modell, regnr og farge blir da egenskapene til objektet
// Info blir metoden til objektet.

const bil = {
    merke: "Toyota",
    modell: "Avensis",
    regnr: "",
    fareg: "solv",
    info: function () {
        console.log(this.merke + " " + this.modell);
    }
};

// console.log(bil);
// console.log(typeof bil);
// bil.info();

// Vi har en eldre måte å gjøre det samme på også.
const car = new Object();
car.merke = "Toyota";
car.modell = "Avensis";
car.regnr = "";
car.fareg = "solv";
car.info = function () {
    console.log(this.merke + " " + this.modell);
}

// console.log(car);
// console.log(typeof car);
// car.lengde = 2.5;
// car.info();
// console.log(car);

// Example
const person = new Object();
person.forNavn = "Pavel";
person.etterNavn = "Nekrasov";
person.alder = 18;
person.adresse = "Storm Gata";

console.log(person);

let user = {
    username: "Kratos",
    password: "1234",
    email: "gY7lE@example.com",
    
    login: function () {
        console.log(this.username + " " + this.password);
}

};


const personaj = {
    forNavn: "Pavel",
    etterNavn: "Nekrasov",
    alder: 18,
    adresse:{
        gate: "Storm Gata",
        husnummer: 2,
        postnr: 5213,
        poststed: "Oslo",

        info: function () {
            return (this.gate + " " + this.husnummer + " " + this.postnr + " " + this.poststed);
        }
    },
    fdato: "01/01/1999",
    info: function () {
        return (this.forNavn + " " + this.etterNavn + " " + this.adresse.info());
    }
}

// console.log(personaj.forNavn);
// console.log(personaj.etterNavn);
// console.log(personaj.adresse.gate);
// console.log(personaj.adresse.info());
// personaj.adresse.gate = "Nygata"; // Oppdater en eksistrende nøkkel med en ny verdi.
// console.log(personaj.info());
// personaj.hobby = "Programmering"; // Oppretter et nytt nøkkel-verdi-par med nøkkel hobby og verdi "Programmering".
// console.log(personaj.hobby);
// delete personaj.hobby; // Sletter nøkkel-verdi-par'et hobby ob verdien som er lagret.
// console.log(person.hobby);
// personaj.height = "194"; // Dot notasjon.
// console.log(personaj.info());
personaj.info = function () {
    return (this.forNavn + "," + this.etterNavn + "," + this.adresse.info() + "," + this.height);
}
// console.log(personaj.info());

// personaj["hair Color"] = "brun"; // Bracekt- notasjon. Denne metoden er påkrevd ved "" eller andre spesialtegn er i nøkkel navnet.
// // console.log(personaj.hairColor);
// console.log(personaj["hair Color"])
// console.log(Object.keys(personaj));
// console.log(Object.values(personaj));
// console.log(Object.entries(personaj));

kopi = Object.assign({}, personaj); // Oppretter en kopi av et objekt, her er person objektet som blir kopiert. Dette er et helt nytt objekt, som ikke har samme minnereferanse som objektet det ble kopiert fra.
// console.log(kopi);
kopi.forNavn = "Ragnar";
// console.log(kopi.forNavn);
// console.log(personaj.forNavn);

const prototypePerson = {
    hilse: function(){
        console.log("Hei, jeg heter " + this.forNavn + ".")
    }
}

console.log(typeof prototypePerson);

const nyPerson = Object.create(prototypePerson);
nyPerson.forNavn = "Amandus";

nyPerson.hilse();

const Per = Object.create(prototypePerson);
Per.forNavn = "Per";
Per.hilse();

for (const key in nyPerson) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}

for  (const key of Object.keys(person)){
    console.log(key + ": " + person[key]);
}

for (const [key, value] of Object.entries(person)){
    console.log(key + ": " + value);
}













// Example
// const product = {
//     name: 'Laptop',
//     price: "$1200 USD",
//     inStock: true,
//     details: {
//       processor: 'Intel i7',
//       ram: '16GB',
//       storage: '512GB SSD'
//     }
//   };
//   console.log(product);
//   console.log(product.details); 
  