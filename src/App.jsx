import { useState } from "react";
import "./App.css";

export function App() {
  // "Named export"
  const [count, setCount] = useState(0);

  return <div>Hallo Welt !!!</div>;
}

// export default App; // "Default export" -> exportieren nur eine Funktion oder Klasse pro Datei
