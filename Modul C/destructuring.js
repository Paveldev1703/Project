// setInterval() - Funksjon som kjører seg på angitt tid til den blir stoppet.

    //  const intervalID = setInterval(() => {
    //     console.log('Hello');  
    // }, 1000); 
    // console.log(intervalID);
    // // KJØR ANNEN KODE.

    // clearInterval(intervalID);

// setTimeout() - Funksjon som kjører noe på angitt tid i ms men kun en gang.
// setTimeout(() => {
//     console.log("Dette kjører en gang etter angitt tid.");
// }, 3000);


// Destructuring 

// const numbers = [1,2,3,4,5,6];
// console.log(numbers[0]);

// Mye kode å skrive for å lagre verider i en liste i forskjellige variabler.
// let tall = numbers[0];
// let tall2 = numbers[1];
// let tall3 = numbers[2];
// let tall4 = numbers[3];
// let tall5 = numbers[4];
// let tall6 = numbers[5];

// console.log(tall, tall2, tall3, tall4, tall5, tall6);

// En linje kode for å hente ut og opprette variabler fra en liste.
// const [firstNumber, secondNumber, thirdNumber, ...otherNumbers] = numbers;
// const [,,, thirdNumber1, ...otherNumbers2] = numbers; // Henter og lagrer fra index nr 3.
// console.log(firstNumber, secondNumber, thirdNumber);
// console.log(thirdNumber1, otherNumbers2);
// console.log(otherNumbers);

// Destructuring a function that returns an array.
// function colors(){
//     return ["blue", "red", "green", "yellow"];
// }

// const [farge1, farge2, ...resten] = colors();
// console.log(farge1, farge2, resten);


// Desctructuring a matrix (to dim tabell);

const matrix = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [10, 11, 12, 13, 14, 15, 16, 17],
    [20, 21, 22, 24, 25, 26, 27, 28],
    [30, 31, 32, 33, 34, 35, 36, 37],
  ];

//   console.log(matrix [2][4][2]); //y //x //z;


// Uten destructuring 
// matrix.forEach((element, index)=> {
//     console.log(`Rad: ${index + 1} Verdi: ${element[3]}`);
// })


// Med destructuring
// const position = [
//     ["x", 89],
//     ["y", 14],
//     ["z", -15],
// ]

// position.forEach(([axis, value]) => {
//     console.log(`Axis: ${axis} Value: ${value}`);
// })

// Destructuring of objects.
const user = {
    name: "Kratos",
    displayName: "KratosTheGod",
    hobbies: ["Gaming", "Coding", "Hund"],
    address: {
        streetName: "Odin's Gata",
        streetNumber: "123",
        city: "Asgard",
        postalCode: "1234"
    },
    id: 5839201043
};


// Alias -> name: navn -> name får et nytt alias som er navn.
// Destructuring av et objekt.
// const {name: navn, displayName: gamerTag, hobbies, address, id} = user;
// console.log(navn, gamerTag, hobbies, address, id);

// Dekonstruering av et objekt sendt som parameter inn in en funksjon.
function processInfo({
    displayName: gamerTag,
    name: navn,
    id,
    hobbies,
    address
}) {
    
    console.log(gamerTag, navn, id, hobbies, address);
};

processInfo(user);


// Dekonstruering av en liste av objekter men en for of løkke.

const users = [
    { name: "Alice", age: 25, country: "USA" },
    { name: "Bob", age: 30, country: "Canada" },
    { name: "Charlie", age: 35, country: "UK" },
    { name: "David", age: 40, country: "Australia" }
  ];

  for (const { name, age, country } of users) {
    console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
  }