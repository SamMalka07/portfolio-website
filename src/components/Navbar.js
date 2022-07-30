import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDownload } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const ref = useRef();
  const btnRef = useRef();

  const clickOut = useCallback(
    (e) => {
      if (
        !ref.current.contains(e.target) &&
        showLinks &&
        !btnRef.current.contains(e.target)
      ) {
        setShowLinks(false);
      }
    },
    [showLinks, ref]
  );

  useEffect(() => {
    window.addEventListener("mousedown", clickOut);
    return () => {
      window.removeEventListener("mousedown", clickOut);
    };
  }, [clickOut]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="home" smooth={true} duration={1000}>
            Logo
          </Link>
          <button
            ref={btnRef}
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            {showLinks ? <ImCross /> : <FaBars />}
          </button>
        </div>
        <div className={`nav-links ${showLinks ? "active" : ""}`} ref={ref}>
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
