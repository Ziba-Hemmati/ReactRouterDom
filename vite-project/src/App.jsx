import "./styles/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        {/* </BrowserRouter> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
