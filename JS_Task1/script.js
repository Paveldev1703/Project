//First function.
//----------------------------------------------------
function halfText(text) {
    const midlIndex = Math.floor(text.length / 2);
    const firstHalf = text.slice(0, midlIndex);
    const secondHalf = text.slice(midlIndex);
    const refersFirstHalf = firstHalf.split("").reverse().join("");
        return refersFirstHalf + secondHalf;
}
    const result = halfText("Dette er en lang tekst");
    console.log(result);


// Second function.
//----------------------------------------------------
function smallBig(text, isUpperCase) {
    if (isUpperCase) {
        return text.toUpperCase();
    } else {
        return text.toLowerCase();
    }
}

console.log(smallBig("Dette er en tekst", true));

// Third function.
//----------------------------------------------------
 function ukedag(text){
     switch (text.toLowerCase()) {
         case "mandag":
             return "Det er mandag, og lege til helga! Huff.";
         case "tirsdag":
            return "Det er tirsdag, og vi ferdige med trøtte mandagen.";
         case "onsdag":
            return "Endelig midtuke. Snart helg";
         case "torsdag":
            return "Nei, kun en dag igjen på jobb før helga...";
         case "fredag":
            return "Timenedtelling har startet. 7,5 timer igjen.";
         case "lørdag":
            return "Helga!";
         case "søndag":
            return "Helga er ferdig!";
         default:
            return "Ukjent dag";
     }
 }

tekst = "mandag";
console.log(ukedag(tekst));

// Fourth function.
//----------------------------------------------------
function letters(text) {
    text = text.trim();

    const firstletter = text.charAt(0);
    const lastletter = text.charAt(text.length - 1).toLowerCase();

    return firstletter === lastletter;
}

console.log(letters("bob"));
console.log(letters("DIego"));

// Fifth function.
//----------------------------------------------------
function textList(text,list){
    return list.includes(text);
}

const cars = ["Volvo", "BMW", "Saab", "Ford", "Fiat", "Audi"];
console.log(textList("BMW", cars));
console.log(textList("Mercedes", cars));

// Sixth function.
//----------------------------------------------------
function games(playlist) {
    if (playlist.length === 0){
        return "Playlisten er tom";
    }
    const firstGame = playlist[0];
    const secondGame = playlist[playlist.length - 1];
    return firstGame + " og " + secondGame;

}
const gamesList = ["Residen evil", "cs 2", "dota 2", "fortnite", "overwatch"];
console.log(games(gamesList));

const emptyList = [];
console.log(games(emptyList));

// Seventh function.
//----------------------------------------------------
function sammenligningText(text1, text2){

if(text1.toLocaleLowerCase() === text2.toLocaleLowerCase()){
    console.log("The texts are the same");
} else {
    console.log("The texts are not the same");
}
}
console.log(sammenligningText("Pavel", "Pavel"));

// Eighth function.
//----------------------------------------------------
function checkForText(text){

    if(text.indexOf("JavaScript") >= 0){
        console.log("The text contains the word");
    } else {
        console.log("The text does not contain the word");
}
}
console.log(checkForText("Det er en text med JavaScript i det."));
console.log(checkForText("Det er en text med C++ i det."));

// Ninth function.
//----------------------------------------------------
function checkAge(age){
    if(age <= 0){
        return ("U are not born yet");
    } else {
        if (age < 13){
            return ("Barn");
    }
        if (age >= 13 && age <= 19){
            return ("Tnåring");
        }          
        if (age >= 20 && age <= 64){
            return ("Voksen");
        }
        else {
            return ("Pensionist");
        }
    }
}
console.log(checkAge(65));

// Tenth function.
//----------------------------------------------------
function checkVocal(char){
    const charLowerCase = char.toLowerCase();
    const vocal = ["a", "e", "i", "o", "u", "ø", "æ", "å"];

    if(vocal.includes(charLowerCase)){
        return "Vokal";
    } else {
        return "Konsonant";
    }
}
console.log(checkVocal("å"));

// Eleventh function.
//----------------------------------------------------
