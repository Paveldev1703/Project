import React from "react";
import meny from "./dish";


export default function KafeMenu() {
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