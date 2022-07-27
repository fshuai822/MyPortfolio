import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import SF from "../../img/SF_head2.png";

import thumbup from "../../img/thumbup.png";

import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey, I Am</span>
          <span>Shuai(Lily) Feng</span>
          <span>
            Graduate student majoring in Computer Science at Upenn, with a
            background in
            <br />
            Architecture and Engineering. Throughout my work as an Architect, a
            Designer
            <br /> and a Software Developer, my mission is to help people design
            a better lives,
            <br />
            and I do that by combining my technical skills and collaborative
            approach
            <br />
            to produce innovative solutions.
          </span>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button i-button">Connect</button>
        </Link>

        <div className="i-icons">
          <a href="https://github.com/fshuai822">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shuai-feng">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/sfeng_22/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={SF} alt="" />

        <motion.div
          initial={{ left: "0%" }}
          whileInView={{ left: "-28%" }}
          transition={transition}
          style={{ top: "20%", left: "-28%" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} text1="Full-Stack" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "57%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "35%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} text1="Architect" />
        </motion.div>
        <motion.div
          initial={{ left: "57%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "5%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} text1="Designer" />
        </motion.div>
        {/* <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Intro;
