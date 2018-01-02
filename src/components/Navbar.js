import React, { Component } from "react";
import "../styles/Navbar.css";

const styles = {
    navbarStyle: {
      background: "lightblue"
    },
    anchorStyle: {
      float: "left"
    }
  };

  class Navbar extends Component {
      render() {
          return (
              <nav className="navbar navbar-default navbar-fixed-top">
                  <h1 className="test">Welcome to Clicky Game</h1>
                </nav>
          );
        }
    }
  
  export default Navbar;
  