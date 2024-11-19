// Henter et objekt fra HTML dokumentet som har id "bestefar". Henter KUN det første hvis det er flere som har samme id. Ikke bruk samme id på flere elementer.
const objekt = document.getElementById("bestefar");
console.log(objekt);
// objekt.remove();
objekt.style.backgroundColor="darkcyan";

// Henter ut en liste/array over HTMLCollection der hvert element i lista er et HTML objekt, fra klassen som er angitt som parameternavn.
const parents = document.getElementsByClassName("parent");
// console.log(parents);
// parents[0].remove();
// console.log(parents);
// parents[0].remove();
// console.log(parents);
// parents[1].style.backgroundColor="yellow";
const newElement = document.createElement("div");
newElement.classList.add("extra");
newElement.style.backgroundColor ="yellow";
newElement.style.height = "100px";
newElement.style.width = "100px";
parents[1].prepend(newElement);

// Denne gir deg KUN et element, hvis flere gir den deg det første i HTML dokumentet. querySelector bruker CSS stil for å navngi elementet du skal ha tak i.
const barn = document.querySelector("#barn1");
barn.style.backgroundColor = "white";

// Denne fungerer som querySelector, men den gir ut en NodeListe (array) av alle elementene den finner i HMTL dokumentet.
const barna = document.querySelectorAll(".child");
console.log(barna);
// barna.remove();
for (let kid of barna){
    // Math.floor() -> Runder et tall ned til nærmeste heltall
    // Math.random() -> Gir deg et random nummer fra 0 og til 1, men ikke tallet 1. Tallene som blir generert er desimaltall.
    // Eksempel på bruk av Math.floor(Math.random() * 10 + 1) vil gi deg tallene fra 1 og til og med 9.
    //.toString(16) konverterer et heltall til hex (16 tallssystemet).
    // 16 tallsystemet: 0-9, A=10, B=11, C=12, D=13, E=14 og F=15.  
    console.log(Math.floor(Math.random() * 16777216).toString(16));
    console.log(kid);
    kid.style.backgroundColor = "#" + Math.floor(Math.random() * 16777216).toString(16)
    console.log(kid);
}

console.log(barna[0].style);
