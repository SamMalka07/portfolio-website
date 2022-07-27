import React, { useEffect, useRef, useState } from "react";
// import { HashLink as Link } from "react-router-hash-link";
import { FaBars } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link smooth to="#home">
            Logo
          </Link>
        </div>
        {/* <div>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div> */}
        <div className="nav-links">
          <Link to="home" smooth={true} duration={1000}>
            Home
          </Link>

          <Link to="about" smooth={true} duration={1000}>
            About
          </Link>

          <Link to="portfolio" smooth={true} duration={1000}>
            Portfolio
          </Link>

          <Link to="contacts" smooth={true} duration={1000}>
            Contact
          </Link>

          <button className="resume-btn">
            <span>Resume</span>
            <MdDownload className="download-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
