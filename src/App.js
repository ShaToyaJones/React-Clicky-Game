import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import cards from './cards.json';
import Footer from './components/Footer';
// import {Button, Icon} from 'react-materialize';

class App extends Component {
  //setting the initial value of this.state.player and this.state.score
  state = {
    player: "",
    cards: [],
    score: 0,
    topScore: 0
  };

  render() {
    return (
      <div>
        <Navbar
        score={this.state.score}
        topScore={this.state.topScore}
          name={"Welcome to Clicky Game"}
          />
          <Header></Header>
          <div className="container">
          
          </div>

          <div>
            <Section
            name={"Instructions"}
            />
          </div>
          <Footer></Footer>
      </div>
      );
    }
  }

export default App;
