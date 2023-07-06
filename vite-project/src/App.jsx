import { useState } from "react";
import Header from "./components/Header";
import "./styles/main.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
