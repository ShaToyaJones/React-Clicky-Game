import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import cards from './cards.json';
import Footer from './components/Footer';
// import Cards from './components/Cards';
// import {Button, Icon} from 'react-materialize';

class App extends Component {
  //setting the initial value of this.state.player and this.state.score
  state = {
    player: "",
    cards: cards,
    score: 0,
    topScore: 0
  };


//************************************************************************shuffle algorithm taken from Stack Overflow (https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array).*************************************************************************
  shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

// componentWillMount() {

// }

handleClick = (event) => {
  const {id} = event.target;
  console.log(id);

  this.setState({
    
  })
}

//Increases score for game after handleClick.
incrementScore = () => {
  this.setState({ score: this.state.score + 1 });
  if (this.state.score === 12) {
    alert("CONGRATULATIONS!!! You won!!!");
    this.setState({
      guesses: [],
      score: 0
    });
  }
}

//To handle increasing the topScore.
incrementTopScore = () => {
  if (this.state.Score === this.state.topScore && this.state.topScore !== 12) {
    this.setState({ topScore: this.state.topScore + 1 });
  }
}

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
          {/* <button onClick={this.handleClick}>
          </button> */}
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