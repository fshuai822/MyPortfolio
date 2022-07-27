import React from "react";
import "./Works.css";
import LDD from "../../img/Ldd2.png";
import SG from "../../img/sg2.png";
import UM from "../../img/um2.png";
import UPENN from "../../img/upenn2.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="technical">
        <span style={{ color: darkMode ? "white" : "" }}>
          My Education & Work
        </span>
        <span>Experience</span>
        <span>
          Master of Computer and Information Technology @ University of
          Pennsylvania(09/2021-Present)
          <br />
          Architect @ SmithGroup(03/2020-Present)
          <br />
          Production Designer @ Lyman Davidson Dooley(08/2019-03/2020)
          <br />
          Master of Architecture @ University of Michigan(08/2017-05/2019)
        </span>

        {/* <button className="button s-button"></button> */}

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={LDD} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={SG} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={UPENN} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={UM} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
