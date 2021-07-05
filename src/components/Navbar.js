import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { links, social } from "../data";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const clickHandling = () => setClick(!click);

  const refLinks = useRef(null);
  const refLinksContainer = useRef(null);
  useEffect(() => {
    const linksHeight = refLinks.current.getBoundingClientRect();
    console.log(linksHeight);
    if (click) {
      refLinksContainer.current.style.height = `${linksHeight.height + 1}px`;
    } else {
      refLinksContainer.current.style.height = "0px";
    }
  }, [click]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="navbar-logo">
            Royal <span className="title-food">Foods</span>
          </Link>

          <button className="nav-toggle" onClick={clickHandling}>
            {click ? <FaTimes /> : <VscThreeBars />}
          </button>
        </div>
        <div
          className={`${
            click ? "links-container show-container  " : "links-container "
          }`}
          ref={refLinksContainer}
        >
          <ul className="links" ref={refLinks}>
            {links.map((link) => {
              const { url, text, id } = link;
              return (
                <li key={id}>
                  <Link className="url-link" to={url}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="social-media-container">
          <ul className="social-links">
            {social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <Link className="social-icons" to={url}>
                    {icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
