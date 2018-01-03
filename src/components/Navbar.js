import React, { Component } from "react";
import "../styles/Navbar.css";

  class Navbar extends Component {
      render() {
          return (
              <nav className="navbar navbar-default navbar-fixed-top">
              <h1 className="test">{this.props.name}</h1>
              <span>score:{this.props.score}</span>
              <span>topScore:{this.props.topScore}</span>
              </nav>                            
          );
        }
    }
  
  export default Navbar;
  