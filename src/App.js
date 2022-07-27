import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App" id="home">
      <Router>
        <Navbar />
        <div className="page-container">
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </div>
        {/* <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Router>
    </div>
  );
}

export default App;
