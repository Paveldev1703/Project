import { useState } from 'react'
import './App.css'

// Handler om useState og onjekter -> kopleks state
// Hva er forskjell fra vanlige objekter
// 1. useState ligger lagret i selve objektet
// 2. Vi lager en funksjon som inneholder objektet og returnerer HTML
// 3. Du må kopiere objektet når du skal gjøre en endring på en verdi i objektet
//   Dette gjøres med hjelp av ... (spread operator)
const UpdateObject = () => {
  const [user, setUser] = useState({
  name: "Ole",
  age: 21
 })

 const updateAge = () => {
  setUser({...user, age: user.age +1});
 }

 return (
  <div>
    <p>Navn: {user.name} </p>
    <p>Alder: {user.age} </p>
    <button onClick={updateAge}>Happy Bithday</button>
  </div>
 );
};


function App() {
  

  return <div> {UpdateObject()}</div>
}

export default App
