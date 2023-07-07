import "./styles/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/contact";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/images/logo.jpg";

function App() {
  return (
    <>
      <div className="container">
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
