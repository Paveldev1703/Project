// Feil håntering - Error handing:

function LogError(err) {
    // KODE FOR Å LOGGE TIL DATABESE.
}


function showErrorToUser(err) {  

}


function parseJSON(jsonString) {
    try {
        // Prøver å parse (gjøre om/endre til) JSON til JS Objekt
        let parsedData = JSON.parse(jsonString);
        console.log("Vellykket konverterin", parsedData);
        return parsedData;
    } catch (error) {
        // Hvis det oppstår feil i try blokken, blir denne blokken kjørt.
        // Her legger vi inn lode som skal utføres hvis du får en deil.
        

        /*

        Vanlige efenskaper i Error
        Egenskap      Beskrivelse
        message       inneholder en beskrivende melding om feilen.
        name          Navnet på feiltypen, f.eks. Error, TypeError, SyntaxError, etc.
        stack         En streng som inneholder en stack trace (brukes til denugging).

        */

        console.log(error.name);
        // throw new Error("Konvertering feilet! - ", error.message);
        LogError(error);
        showErrorToUser(error);

    } finally{
        // Denne koden blir kjørt uansett om det oppstår en feil eller ikke.
        console.log("Konverteringsforsøket er ferdig");
    }
}

// Script start


try{
    // Fanger opp feil kan oppstå i denne kodeblockken.
    parseJSON('{name: "John", "age": 30}');
} catch (err) {

    console.log("Denne er printer fra ytteste catch", err);

}


console.log("Hei på deg. Dette er slutten på scriptet");


// Script slutt






