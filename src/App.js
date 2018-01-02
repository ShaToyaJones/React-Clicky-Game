import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import cards from './cards.json';
import HelloBootstrap from './components/HelloBootstrap';
// import {Button, Icon} from 'react-materialize';

// const App = () => (
//   <div>
//   < Navbar />
//     < cards />
//       </div>
// );

class App extends Component {
  //setting the initial value of this.state.player and this.state.score
  state = {
    player: "",
    cards: [],
    score: 0
  };

  render() {
    return (
      <div>
        <Navbar
          name={"Welcome to Clicky Game"}
          />
          <div className="container">
          
          </div>

          <div>
            <Section
            name={"Instructions"}
            />
          </div>
      </div>
      );
    }
  }

export default App;

//< Navbar />
//        < cards />
//        </div>
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h1 className="App-title">Welcome to Clicky Game</h1>
//        </header>
//        <p className="App-intro">
//          How good is your memory?!?! To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//        <div>