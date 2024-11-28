// Events - Hendelser 

/*
1. Musrelaterte eventer (Mouse Events):
click: Utløses når brukeren klikker på et element.
dblclick: Utløses når brukeren dobbeltklikker på et element.
mousedown: Utløses når brukeren trykker ned en museknapp.
mouseup: Utløses når brukeren slipper en museknapp.
mousemove: Utløses når brukeren flytter musen over et element.
mouseenter: Utløses når musen går inn i et element (uten å trigge på barn).
mouseleave: Utløses når musen forlater et element.
mouseover: Utløses når musen går inn i et element (inkluderer barn).
mouseout: Utløses når musen forlater et element (inkluderer barn).
contextmenu: Utløses når brukeren åpner en kontekstmeny (ofte høyreklikk).

2. Tastaturrelaterte eventer (Keyboard Events):
keydown: Utløses når en tast trykkes ned.
keypress (utdatert): Utløses når en tast trykkes (bruk keydown).
keyup: Utløses når en tast slippes.

3. Berøringsrelaterte eventer (Touch Events):
touchstart: Utløses når en berøring starter.
touchend: Utløses når en berøring slippes.
touchmove: Utløses når en finger beveges over skjermen.
touchcancel: Utløses når berøringen avbrytes (f.eks. av et annet system).

4. Skjermrelaterte eventer (Screen/Window Events):
resize: Utløses når størrelsen på vinduet endres.
scroll: Utløses når brukeren blar i en rullbar beholder.
load: Utløses når siden eller et element er ferdig lastet.
unload: Utløses når en side forlates.
beforeunload: Utløses rett før siden forlates (for advarsler).
error: Utløses ved en feil (f.eks. når en ressurs ikke lastes).
focus: Utløses når et element får fokus.
blur: Utløses når et element mister fokus.

5. Inputrelaterte eventer (Form/Input Events):
input: Utløses når brukerens input endres.
change: Utløses når brukerens input bekreftes (f.eks. av et select-element).
submit: Utløses når et skjema sendes inn.
reset: Utløses når et skjema tilbakestilles.
focus: Utløses når en input får fokus.
blur: Utløses når en input mister fokus.

6. Drag-and-Drop-relaterte eventer (Drag Events):
dragstart: Utløses når dra-operasjonen starter.
drag: Utløses mens et element dras.
dragend: Utløses når dra-operasjonen avsluttes.
dragenter: Utløses når et dratt element kommer over et droppbart område.
dragover: Utløses når et dratt element holdes over et droppbart område.
dragleave: Utløses når et dratt element forlater et droppbart område.
drop: Utløses når det dratte elementet slippes i et droppbart område.

7. Medierelaterte eventer (Media Events):
play: Utløses når avspilling starter.
pause: Utløses når avspilling stoppes midlertidig.
ended: Utløses når medieavspillingen fullføres.
volumechange: Utløses når volumet endres.
timeupdate: Utløses når avspillingens tidsindikator oppdateres.
canplay: Utløses når mediet kan begynne avspilling.
error: Utløses ved feil i medielasting eller avspilling.

8. Andre eventer:
Clipboard:
copy: Utløses når brukeren kopierer.
cut: Utløses når brukeren klipper.
paste: Utløses når brukeren limer inn.
Focus/Blur (Lifecycle):
focusin: Utløses når et element eller barn får fokus.
focusout: Utløses når et element eller barn mister fokus.

Miscellaneous:
animationstart: Utløses når en CSS-animasjon starter.
animationend: Utløses når en CSS-animasjon slutter.
animationiteration: Utløses når en CSS-animasjon repeteres.
transitionend: Utløses når en CSS-overgang er ferdig.
*/


// const knapp = document.querySelector("#minKnapp");
// const para = document.querySelector("#minParagraf");
// const cordinates = document.querySelector("#cordinator");
// let counter = 0;

//addEventListener tar to parametre. Dette er eventtype og callbackfn.
// knapp.addEventListener("click", () => para.textContent = ++counter);
// IKKE BRUK FLERE EVENTLISTENER PÅ SAMME OBJEKT MED SAMME EVENT !!! (NB: DET FINNES UNNITAK DER DETTE NØDVENDIG)
// function increment(){
//     para.textContent = counter;
// }

// Shifte farge
// const div = document.querySelector("#minDiv");
// let divLeftPosition = 0;

// function boxclick(){
//     console.log("Klikket");
//     div.style.backgroundColor = "yellow";
//     divLeftPosition += 10;
//     div.style.left = divLeftPosition + "px";
//     //div.style.left = Math.random() * window.innerWidth + "px";
// }





// div.addEventListener("mouseenter", () => div.style.backgroundColor = "red");
// div.addEventListener("mouseleave", () => div.style.backgroundColor = "black");

// div.addEventListener("click", () => div.style.backgroundColor = "green");
// div.addEventListener("dblclick", () => div.style.backgroundColor = "blue");

// div.addEventListener("click", () => {
//     console.log("Klikket");
//     div.style.backgroundColor = "yellow";
//     divLeftPosition += 10;
//     div.style.left = divLeftPosition + "px";
//     //div.style.left = Math.random() * window.innerWidth + "px";
// })

// div.addEventListener("dblclick", () => {
//     console.log("Doble klikket");
//     div.style.backgroundColor = "green";
//     div.removeEventListener("click", boxclick);
// });


// Eventlister på body 

// document.body.addEventListener("click", (event) => {
//     console.log(event);
//     cordinates.textContent = `X:${event.x} Y:${event.y}`;
// })

// window.alert("Hello");

// div.addEventListener("dblclick", () => {
//     div.style.backgroundColor = "red";
//     div.removeEventListener("click", );

// });


//Keyboard move block

let posLeft = 0;
let posTop = 0;


document.body.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        posLeft -= 10;
        minDiv.style.left = posLeft + "px";
    } else if (event.key === "ArrowRight") {
        posLeft += 10;
        minDiv.style.left = posLeft + "px";
    } else if (event.key === "ArrowUp") {
        posTop -= 10;
        minDiv.style.top = posTop + "px";
    } else if (event.key === "ArrowDown") {
        posTop += 10;
        minDiv.style.top = posTop + "px";
    }

    console.log(event);
});



