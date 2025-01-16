import { useState, useEffect } from 'react'
// import { WebSocketComponent } from './WebSocketComponent';
import {AutiComplete} from './AutiComplete';
import './App.css'

/*
// Nå kan vi bestemme når en kode skal kjøres basert på når komponenten rerenderer seg.
// Effekter skjer etter all annen kode i komponenten. Blir derfor først kjørt når komponenten har gjennomført alt som er kodet inn i den.
Den blir derfor kjørt ved rendering, som da skjer når kode i komponenten er ferdig.

// Denne Effekten vil kjøre ved hver rerendering av komponenten.
// Denne Effekten er uten dependency (avhengighet).
// Skal ikke ligge i return statement, men utenfor 
// Syntax:
useEffect() => {
  // kode her 
})


// Denne Effekten er med tomt dependency.
// Blir kun kjørt ved oppstart/on mount (on load) av komponenten.
// Syntax:
useEffect(() => {
  // kode her 
}), [])
}

// Denne Effekten er med dependency.
// Blir kjørt når en angitt state blir endret.
// Syntax:
useEffect(() => {
  // kode her 
}, [count])
}



*/





function App() {
  // const [count, setCount] = useState(0);
  
  
  // useEffect(() => {
  //   document.title = count;
  //   console.log("Test");


  //   // Clean up function - Bruker return delen for å gjøre dette.
  //   // Her kan du f. eks. lukke en nettverksoppkobling eller annen opprydding.
  //   return console.log("HER!")
  // }, [count]);

  // return <div> 
  //   <h1>Overskrift</h1>
  //   <p>Teller: {count}</p>
  //   <button onClick={() => setCount(count + 1)}>Klick meg!</button>
  //   <WebSocketComponent />
  // </div>

  return(
    <AutiComplete />
  )
}

export default App;