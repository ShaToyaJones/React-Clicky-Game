import React, { Component } from "react";
import "../styles/Navbar.css";

  class Navbar extends Component {
      render() {
          return (
              <nav className="navbar">
                <ul>
                    <li className="header">{this.props.name}</li>
                    <li className="score1"> Score: {this.props.score}</li>
                    <li className="score2"> | Top Score: {this.props.topScore}</li>
                </ul>
              </nav>                            
          );
        }
    }
  
  export default Navbar;
  