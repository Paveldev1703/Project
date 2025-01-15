import {useState} from 'react';

export default function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [adresse, setAdress] = useState('');
    
    return(
        <div>
            <p>Fornavn:</p>
            <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
            <p>Etternavn:</p>
            <input type="text" onChange={(e) => setLastName(e.target.value)}/>
            <p>Adresse:</p>
            <input type="text" onChange={(e) => setAdress(e.target.value)}/>

            <h1>{firstName} </h1> 
            <h1>{lastName} </h1>
            <h1>{adresse} </h1>
        </div>
    )
}