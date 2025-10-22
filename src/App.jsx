import { useState } from "react";
import "./App.css";
// import { StatelessComponent } from "./StatelessComponent.jsx";
import { Header } from "./Header.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { Main } from "./MainArea.jsx";
import { Footer } from "./Footer.jsx";

export function App() {
  // "Named export"
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header></Header>
      <Sidebar></Sidebar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
