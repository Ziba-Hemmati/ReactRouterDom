import { useState } from "react";
import Header from "./components/Header";
import "./styles/main.css";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
