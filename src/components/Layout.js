import React from "react";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

import { Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" component={About} />
        <Route path="/projects" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Routes>

      {/* <About />
      <Projects />
      <Contact /> */}
    </>
  );
};

export default Layout;
