import { useState } from "react";
import "./App.css";
import { StatelessComponent } from "./StatelessComponent.jsx";

export function App() {
  // "Named export"
  const [count, setCount] = useState(0);

  return (
    <div>
      Hallo Welt
      <StatelessComponent></StatelessComponent>
      <div> Test </div>
    </div>
  );
}

// export default App; // "Default export" -> exportieren nur eine Funktion oder Klasse pro Datei
