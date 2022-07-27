import React from "react";
import "./Skill.css";
import Web from "../../img/web2.png";
import Arch from "../../img/arch2.png";
import Design from "../../img/design2.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Skill = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  //transition
  const transition = { durationn: 1, type: "spring" };

  return (
    <div className="skill" id="skills">
      <div className="technical">
        <span style={{ color: darkMode ? "white" : "" }}>My Technical</span>
        <span>Skills</span>
        <span>
          Expertise in object-oriented programming, developing, and testing.
          <br />
          Experience in full-stack Web/Mobile development.
          <br />
          Proficient in computational design and UX design in A/E industry.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "7rem" }}
          whileInView={{ left: "5rem" }}
          transition={transition}
          style={{ left: "5rem" }}
        >
          <Card
            emoji={Web}
            heading={"As a Developer..."}
            detail={
              "Java, Python, C/C++, JavaScript, HTML/CSS, MySQL, MongoDB, AWS, GIT, React, Spring Boot..."
            }
          />
        </motion.div>
        <motion.div
          initial={{ left: "35rem" }}
          whileInView={{ left: "37rem" }}
          transition={transition}
          style={{ left: "37rem" }}
        >
          <Card
            emoji={Design}
            heading={"As a Designer..."}
            detail={
              "Sketch, Adobe PhotoShop, Adobe Illustractor, Adobe Indesign, Adobe Premiere, Figma..."
            }
          />
        </motion.div>
        <motion.div
          initial={{ left: "22rem" }}
          whileInView={{ left: "21rem" }}
          transition={transition}
          style={{ left: "21rem" }}
        >
          <Card
            emoji={Arch}
            heading={"As an Architect"}
            detail={
              "Rhino, Dynamo, Grasshopper, Revit, SketchUp, AutoCAD, Enscape, Lumion, ..."
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
