import React from "react";
import "./Experience.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Experience = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        <div className="circle">2+</div>
        <span style={{ color: darkMode ? "white" : "" }}>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">10+</div>
        <span style={{ color: darkMode ? "white" : "" }}>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">2+</div>
        <span style={{ color: darkMode ? "white" : "" }}>companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
