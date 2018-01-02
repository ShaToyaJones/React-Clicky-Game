import React from "react";
import "../styles/Section.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads

const styles = {
  sectionStyles: {
    background: "black"
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

const Section = () => (
  <section style={styles.sectionStyles} className="section">
    <h2>How good is your memory?!?!</h2>
    
  </section>
);

export default Section;
