// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <p>hello</p>
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
//   )
// }





function KafeMenu() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Kafe Menu</h1>
      <div className="menu-grid">
        {meny.map((item) => (
          <div className="menu-card" key={item.id}>
            <h2 className="menu-card-title">{item.tittel}</h2>
            <p className="menu-card-price">{item.pris}</p>
            <p className="menu-card-ingredients">{item.ingredienser}</p>
            <p className="menu-card-category">{item.kategori}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const meny = [
  {
    id: 1,
    tittel: "Spaghetti Bolognese",
    pris: "159 kr",
    ingredienser: "Spaghetti, kjøttsaus, parmesan",
    kategori: "Hovedrett",
  },
  {
    id: 2,
    tittel: "Kremet Kyllingsuppe",
    pris: "129 kr",
    ingredienser: "Kylling, fløte, gulrøtter, selleri",
    kategori: "Forrett",
  },
  {
    id: 3,
    tittel: "Margarita Pizza",
    pris: "169 kr",
    ingredienser: "Tomatsaus, mozzarella, basilikum",
    kategori: "Hovedrett",
  },
  {
    id: 4,
    tittel: "Sushi Mix",
    pris: "229 kr",
    ingredienser: "Laks, tunfisk, reker, ris",
    kategori: "Hovedrett",
  },
  {
    id: 5,
    tittel: "Cæsarsalat",
    pris: "139 kr",
    ingredienser: "Romanosalat, kylling, parmesan, dressing",
    kategori: "Forrett",
  },
  {
    id: 6,
    tittel: "Brownie med Is",
    pris: "89 kr",
    ingredienser: "Brownie, vaniljeis, sjokoladesaus",
    kategori: "Dessert",
  },
  {
    id: 7,
    tittel: "Taco Tallerken",
    pris: "199 kr",
    ingredienser: "Kjøttdeig, mais, ost, guacamole",
    kategori: "Hovedrett",
  },
  {
    id: 8,
    tittel: "Pannekaker med Syltetøy",
    pris: "99 kr",
    ingredienser: "Pannekaker, jordbærsyltetøy, sukker",
    kategori: "Dessert",
  },
  {
    id: 9,
    tittel: "Reker med Sitron",
    pris: "149 kr",
    ingredienser: "Reker, sitron, dill, brød",
    kategori: "Forrett",
  },
  {
    id: 10,
    tittel: "Entrecôte med Grønnsaker",
    pris: "289 kr",
    ingredienser: "Entrecôte, asparges, poteter, peppersaus",
    kategori: "Hovedrett",
  },
];

export default KafeMenu