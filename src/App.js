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
    cards: cards,
    score: 0,
    topScore: 0
  };


  render() {
    return (
      <div>
        <Navbar
        score={this.state.score}
        topScore={this.state.topScore}
          name={"Clicky Game"}
          />
          <Header></Header>
          <div className="container">
          
          </div>

          <div>
           {
             this.state.cards.map(card => (
              <Section
              key={card.id}
              name={card.name}
              image={card.image}             
              />
             ))
           }
          </div>
          <Footer></Footer>
      </div>
      );
    }
  }

export default App;

//work on css and image
//work on handling the click event
//at least console log the click event