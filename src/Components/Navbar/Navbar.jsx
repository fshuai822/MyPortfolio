import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-warpper">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Shuai(Lily) Feng</div>
        <Toggle />

        {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                <li>Home</li>
              </Link>
              <Link to="skills" spy={true} smooth={true}>
                <li>Skills</li>
              </Link>
              <Link to="experience" spy={true} smooth={true}>
                <li>Experience</li>
              </Link>
              <Link to="projects" spy={true} smooth={true}>
                <li>Projects</li>
              </Link>
            </ul>
          </div>
          <Link to="contact" spy={true} smooth={true}>
            <button className="button n-button">Contact me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
