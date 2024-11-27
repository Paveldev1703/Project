function makeCircles(){
    const nbOfCircles = document.getElementById("innData").value;
    // console.log(nbOfCircles);

    if (nbOfCircles < 1 || nbOfCircles > 100){
        alert("Nummer må være fra 1 til og med 100");
    } else {}
        alleSirkeler = document.getElementsByClassName("circle");
        for (enSirkel of alleSirkeler){
            enSirkel.remove();
        }

        
    const circleCont = document.createElement("div");
    circleCont.classList.add("circle-container");
    document.body.append(circleCont);

    for (let i = 0; i < nbOfCircles; i++){
        const sirkel = document.createElement("div");
        sirkel.classList.add("circle");
        sirkel.style.backgroundColor = "#" + Math.floor(Math.random() * 16777216).toString(16);
        sirkel.textContent = i + 1;


        //IKKE BRUK DENNE. SIKKERHETSUTFORDRINGER MED AT DET KAN KJØRES SCRIPT INJECTIONS.
        // sirkel.innerHTML = i + "<script>alert('text'); </script> ";
        document.body.append(sirkel);
        
    }
    }


   