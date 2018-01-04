import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We use JSX curly braces to evaluate the style object

const Header = props => (
  <header className="header">
    <h1>Clicky Game!</h1>
    <h2>Click on an image to earn points, but don't click on anything more than once!</h2>
  </header>
);

export default Header;
