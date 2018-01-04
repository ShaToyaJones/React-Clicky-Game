import React from "react";
import "../styles/Section.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We use JSX curly braces to evaluate the style object on the JSX tag

const Section = (props) => (
  <img className="section"
    src={props.image}
    alt={props.name}
  />
);

export default Section;
