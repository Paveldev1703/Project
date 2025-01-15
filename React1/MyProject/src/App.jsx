import { useState } from 'react'
import './App.css'
import ContactForm from './ContactForm'

function App() {
  // const [dekonstruerte variabel, funksjonsnavn] = useState(startVerdi)
  const [count, setCount] = useState(0)
  const [teller, setTeller] = useState(0)
  const [isOn, setIsOn] = useState(false)


  function SkipFive(numb, increase){
    if (increase){
      if (numb===4){
        return 6
      } 
      else {
        return numb + 1
      } 
    }
    else {
      if (numb===6){
        return 4
      }
      else {
        return numb - 1
      }
    }
  }

  return (
    // <div>
    // <h1> Count: {count} </h1>
    // {/* <button onClick={() => setCount(SkipFive(count, true))}>Increase</button>
    // <button onClick={() => setCount(SkipFive(count, true))}>Increase</button> */}

    //  {/* Enlinjers if */}
    // <button onClick={() => setCount(count === 4 ? 6 : count + 1)}>Decrease</button>
    // <button onClick={() => setCount(count === 6 ? 4 : count - 1)}>Decrease</button>


    // <h1>Teller: {teller}</h1>
    // <button onClick={() => setTeller(teller - 1)}>Ok</button>

    // <ContactForm />
    // </div>

    <div>
      <h4> Toggle Button (Av/På knapp)</h4>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
      {isOn ? "Av" : "På"}
    </div>



  );
}

export default App