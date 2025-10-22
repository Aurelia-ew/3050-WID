import { useState } from "react";
import { Header } from "./Header.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { MainArea } from "./MainArea.jsx";
import { Footer } from "./Footer.jsx";
import "./App.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <Sidebar setCount={setCount} count={count} />
      <MainArea count={count} />
      <Footer setCount={setCount} />
    </div>
  );
}
