import React, { useState } from "react";

const AutiComplete = () => {
    // Hardkoding av data med liste over bilmerker
    const carBrands = [
        "BMW", "Mercedes", "Audi", "Volvo", "Ford", "Saab", "Peugeot", "Kia", 
        "Honda", "Nissan", "Mazda", "Toyota", "Volkswagen", "Tesla", "Mitsubishi", 
        "Porsche", "Lamborghini", "Dodge", "Ferrari", "Saab", "Fiat", "Oles", 
        "Sondres", "Troll", "Rubens", "Nicklas", "Angelica", "Pasha", "Villius", 
        "Pil", "Johnny", "Jane Doe", "Tottenham", "Sprus","!Liverpool", "Abast", 
        "Seat", "ABS", "Abdast", "Opel"
    ];

    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleInput = (e) => {
        setInputValue(e.target.value);
        const value = e.target.value;

        if (value) {
            // Фильтруем массив по введённым символам
            const filteredResult = carBrands.filter((brand) =>
                brand.toLowerCase().startsWith(value.toLowerCase())
            );
            setSuggestions(filteredResult);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div>
            <p>Fiplet på: {inputValue}</p>
            <input 
                name="carInput" 
                placeholder="Bilmerke" 
                onChange={handleInput}
            />
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default AutiComplete;
