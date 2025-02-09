import { useState, useEffect } from "react";

const AccessibilityMenu = () => {
  const [fontSize, setFontSize] = useState(16);
  const [darkMode, setDarkMode] = useState(true);

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(prevSize - 2, 12)); // Minimal size is 12px
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

 
  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
    document.body.classList.toggle("dark-mode", darkMode);
  }, [fontSize, darkMode]);

  return (
    <div className="accessibility-menu">
      <button onClick={increaseFontSize}>Increase Font Size</button>
      <button onClick={decreaseFontSize}>Decrease Font Size</button>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default AccessibilityMenu;
