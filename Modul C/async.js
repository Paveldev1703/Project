// Asynchronous JavaScript

// CALLBACK HELL! Old way of doing async javascript
// console.log("Start");

// Simulating asynchronous operations with nested callback
/* setTimeout(() => {
    console.log("Step 1: Preparing data...");
    setTimeout(() => {
        console.log("Step 2: Fetching data from API...");
        setTimeout(() => {
            console.log("Step 3: Processing data...");
            setTimeout(() => {
                console.log("Step 4: Saving data...");
                setTimeout(() => {
                    console.log("Step 5: Operation completed!");
                }, 1000); // Step 5
            }, 1000); // Step 4
        }, 1000); // Step 3
    }, 1000); // Step 2
}, 1000); // Step 1 

console.log("End"); */

// ES 6 (2015) Promises

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const rndNumber = Math.random();
//         if (rndNumber > 0.5) {
//             resolve(rndNumber); // resolve er en variabel med en funksjon som verdi. vi sender vårt svar parameter ril denne funksjonen.
//         } else {
//             reject(new Error("FEILMELDING!!!!!")); // reject er en variabel med en funksjon som verdi. vi senderätt svar parameter ril denne funksjonen. new Error("FEILMELDING");
//         }
//     }, 1000);
// })


// myPromise.then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });


// STANDART ERROR HÅNDTERING / ERROR HANDLING
// try{
// console.log(MinVariabelSomIkkeEksisterer);
// }catch (err){
//     console.log(err);
// }finally{
//     console.log("DETTE KJØRES UANSETT OM DETT ER FEIL ELLER IKKE");
// }


// API - Application Programming Interface // Kommunikasjon mellom to pc'er. 
// RESTful API - Representational State Transfer - En API som er designet til å kommunisere med data.
// JSON - JavaScript Object Notation != JS Onjekt (NESTEN IDENTISK)


// const person = {
//     name: "Kratos",
//     age: 30,
//     isStudent: true,
//     skills: ["JS", "HTML", "CSS"],
//     adress: {
//         city: "Oslo",
//         zipCode: "1234",
//         country: "Norge"
//     }
// }

// JSON Objket
/* 
{
    "name": "Kratos",
    "age": 30,
    "isStudent": true,
    "skills": ["JS", "HTML", "CSS"],
    "adress": {
        "city": "Oslo",
        "zipCode": "1234",
        "country": "Norge"
    }
} 
*/

// Fetch 
// Hva er en URL: Uniform Resource Locator
// Eksempler på URL: https://www.example.com/api/users/123 -> Nettstedsadress 
// 192.168.1.1 -> IP-adress
// C:\Users\Kratos\Documents\GitHub\Javascript\Modul C\script.js -> Path (Filsti)


// Tar i mot en URL til enressurs som er et API endepunkt (API Endpoint)
// Har innebygd promise, så må vi bruke then og catch.
// .json er også en async funksjonskall. HUSK Å CHAINE .then igjen etter denne!
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(res => res.json().then(data => {
//         console.log(data)
//     })
// )
//     .catch((err) => {
//         console.log(err) // Returnerer en feilmelding.
//     })


// fetch("https://random.dog/woof.json")
//     .then((res) => 
//         res.json().then(data => {
//         getData(data.url);
//     })
// )
//     .catch((err) => {
//         console.log(err) // Returnerer en feilmelding.
//     })

// function getData(imgsrc) {
//     const dogImgElem = document.createElement("img");
//     dogImgElem.src = imgsrc;
//     dogImgElem.style.height = "200px";
//     document.body.appendChild(dogImgElem);
// }


const apiEndpoint = "http://gutendex.com/books";

// OBS: Denne funksjonen må være async fordi den bruker async funksjoner somm fetch og .json med keywordet await.
async function getBook(id) {
    // try// catch
    try{
        // const result = await fetch(`${apiEndpoint}/${id}`);
        const result = await fetch(`${apiEndpoint}/${id}`);
        const data = await result.json(); // jso metoden konverterer JSON til JS Objekt.
        renderSite(data);
    } catch (error) {
        console.log(error);
    }
}

function renderSite(data) {
    minDiv = document.getElementById("div");
    minDiv.textContent = data.title;
    
    console.log(data);
}




getBook(1);
