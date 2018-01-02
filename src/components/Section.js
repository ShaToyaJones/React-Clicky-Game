import React from "react";
import "../styles/Section.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads

const styles = {
  sectionStyles: {
    background: "gray"
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

const Section = () => (
  <section style={styles.sectionStyles} className="section">
    <h2>Instructions:</h2>
    <h3>Click on a card.</h3>
    <h3>Try not to choose the same card twice.</h3>
  </section>
);

export default Section;
