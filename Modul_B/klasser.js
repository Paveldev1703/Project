// Klasser
//
// Syntax:
// class klasseNavn{
 //   constructor(minVariabel){ // Dette er funksjonen som blir kjørt når du initialiserer er objekt av denne klassen.
 //     this.minVariabel = minVariabel;
 //   }
 //
 //   minMetode(parametre){
 //           kodeblock
 //   }
 // }
 // 
 // Bruk av en klasse:
 // const minKlasseNavn = new klasseNavn("Hei");
 // minKlasseNavn.minMetode();
//  class Person{ // Du kan tenke på deklarasjone
//     #adresse //privat variable i klassen.
//    constructor(fornavn, etternavn, alder, adresse){
//     // Standart metode ved initialisering av et objekt av denne klassen.
//     // Denne metoden/konstruktøren er PÅKREVDT å ha.
//      this.forNavn = fornavn; //this.forNavn som heter bare forNavn er en public variabel i klassen.
//      this.etterNavn = etternavn;
//      this.alder = alder;
//      this.#adresse = adresse;
//    }

//    #siHei(){ // Metodenavn er valgfritt og kan hete alle lovlige navn. Tenk på dette som funksjonsnanv.
//     console.log(`Hei ${this.fornavn} ${this.etternavn}`);
//     console.log("Hei " + this.fornavn + " " + this.etternavn);
//     console.log("Din alder er:" + this.alder);
//    }


//    print(){
//     this.#siHei();
//     console.log("Din adresse er: " + this.#adresse)
//    }

//    getAdresse(){
//      return this.#adresse
//    }

//    setAdresse(nyAdresse){
//      this.#adresse = nyAdresse;
//    }

//  }

 // Her blir det opprettet et nytt objekt minPerson av datatype Person(objekrk).
 // Ved opprettelsen blir konstruktøren kjørtsom initialiserer objektet.
 // Så her oppretter du et "dokumet" fra malen.
//  const minPerson = new Person("Pavel", "Nekrasov", 18, "Storm Gata"); 

 // Her bruker vi metoden siHei på objektet minPerson.
 // minPerson.siHei();


//  console.log(minPerson.forNavn);
//  minPerson.forNavn = "Pal";
//  console.log(minPerson.etterNavn);
//  console.log(minPerson.alder); // Skriver ut alder som den finner i objektet sin alder variabel. Dette kan gjøres fordi variabel er public.
//  console.log(minPerson.adresse); // Gir indefined fordi at vi ikke har en public variabel i objektet som er tilgjengelig. Denne variabelen er private.


// Arv er en viktig del av objekt orientert tankegang.
// Are gjør at du kan gjenbruke kode på en organisert måte.


class Dyr{
    #navn;

    constructor(navn){
        this.navn = navn;
    }

    print(){
        console.log(this.#navn);
    }

    getNavn(){
        return this.#navn;
    }
    setNavn(navn){
        this.#navn = navn;
    }

    #privatMetodeNavn(){
        console.log("Dette er en privat metode");
    }
 
}

class Katt extends Dyr{ // Barn klasse av Dyr. Kan brukes uten å lage mor, da den blir laget av Katt klassen.
    #type;
    #antFotter;

    constructor(type, navn, antFotter){
        super(navn);
        this.#type = type;
        this.#antFotter = antFotter;
    }

    print(){
        super.print();
        console.log(this.#type);
        console.log(this.#antFotter);
        super.setNavn("Katt");
    }

    getAntFotter(){
        return this.#antFotter;
    }
    setAntFotter(antFotter){
        this.#antFotter = antFotter;
    }

    getType(type){
        this.#type = type;
    }
}


class Fisk extends Dyr{
    #type;
    #skjegg;

    constructor(type, navn, skjegg){
        super(navn);
        this.#type = type;
        this.#skjegg = skjegg;
    }

    print(){
        super.print();
        console.log(this.#type);
        console.log(this.#skjegg);
    }

    setSkjegg(skjegg){
        this.#skjegg = skjegg;
    }
    getSkjegg(){
        return this.#skjegg;
    }

    setType(type){
        this.#type = type;
    }
}

class Dogs extends Dyr{
    #type;
    #color;
    #name;

    constructor(type, color, name){
        super(name);
        this.#type = type;
        this.#color = color;
        this.#name = name;
    }

    print(){
        super.print();
        console.log(this.#type);
        console.log(this.#color);
        console.log(this.#name);
    }

    setName(name){
        this.#name = name;
    }
    getName(){
        return this.#name;
    }

    setType(type){
        this.#type = type;
    }
    getType(){
        return this.#type;
    }

    setColor(color){
        this.#color = color;
    }
    getColor(){
        return this.#color;
    }

}

const pus = new Katt("Skogskatt", "Buster ", 4);
const boble = new Fisk("Torsk", "Jens", true);
const boble2 = new Fisk("Makrel", "Bob", false);
const dog = new Dogs("Hasky", "Rød", "Dolly");

pus.print();
boble.print();
boble2.print();
dog.print();

console.log(typeof pus);

// Mini oppgave:
// Lag en egen klasse Dyr Den skal ha minst to private og minst en public variabel. Den skal ha metoder for å kunne endre på en av de private variablene, samt returnere ut begge de private varible. Test klassen ved å opprette et objekt og se at det virker. Tid: 20min.


class Animals {
    #lions
    #tigers
    constructor(lions, tigers, zebras, gorillas, elephants){
        this.#lions = lions;
        this.#tigers = tigers;
        this.zebras = zebras;
        this.gorillas = gorillas;
        this.elephants = elephants;
    }

    print(){
        console.log(`Dyr: Lions: ${this.#lions}, Tigers: ${this.#tigers}, Zebras: ${this.zebras}, Gorillas: ${this.gorillas}, Elephants: ${this.elephants}`);
    }

    setLions(lions){
        this.#lions = lions;
    }
    getLions(){
        return this.#lions;
    }
    getTigers(){
        return this.#tigers;
    }
}

const minDyr = new Animals("Leo", "Markus", "Stripes", "King Kong", "Dumbo");
minDyr.print();
console.log(minDyr.getTigers());
minDyr.setLions(10);
console.log(minDyr.getLions());
minDyr.setLions(120);
console.log(minDyr.getLions());



// Exersizes 

//first ARV
class Person {
    #name;
    #surname;
    #age;
    #address;

    constructor(name, surname, age, address){
        this.#name = name;
        this.#surname = surname;        
        this.#age = age;
        this.#address = address;
    }

    print(){
        console.log(this.#name);
        console.log(this.#surname);
        console.log(this.#age);
        console.log(this.#address);
    }
}

    const person1 = new Person("Pavel", "Nekrasov", 24, "Storm Gata");
    person1.print();


// Second arv

class Rectangle {
    #width;
    #height;

    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    getArea(){
        return this.height * this.width;
    }
}

const rect = new Rectangle (10, 5);
console.log(rect.getArea());

//Third arv 

class Animal {
    #sound;
    
    constructor(sound){
        this.#sound = sound;
    }

    makeSound(){
        console.log(this.#sound);
    }
}

class Dog extends Animal {
    #name;
    constructor(sound){
        super(sound);
        this.#name = name;
    }

    setName(name){
        this.#name = name;
    }

    makeSound(){
        super.makeSound();
        console.log(this.#name);
    }


}

const duck = new Dog("Quack Quack");
duck.makeSound();


// Static metoder
// ---------------------------------------------------
console.log()







// En utility klasser har ikke constructor, men alle metoder er static
class matte{
    static add(numb1, numb2){
        return numb1 + numb2;
    }

    static sub(numb1, numb2){
        return numb1 - numb2;
    }

    static mult(numb1, numb2){
        return numb1 * numb2;
    }

    static div(numb1, numb2){
        return numb1 / numb2;
    }



}


console.log(matte.add(1, 2));
console.log(matte.sub(1, 2));
console.log(matte.mult(1, 2));
console.log(matte.div(1, 2));





























