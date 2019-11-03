/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import Navbar from "./Components/Navbar";
import Grid from "./Components/Grid";
import Jumbo from "./Components/Jumbo";
import "./App.css";
import characters from "./characters.json";

class App extends React.Component {
  state = {
    characters: characters,
    pickedChars: [],
    currentScore: 0,
    highScore: 0,
    message: ""
  };

  shuffleCharacters = () => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.setState(
      (this.state.characters = this.shuffle(this.state.characters))
    );
  };

  shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  handleSelection = (event) => {
    const name = event.target.getAttribute("data-name")
    this.checkClickGuess(name);
    this.shuffleCharacters();

  }

  checkClickGuess = (name) => {
    var updatedState = { ...this.state };
    if (updatedState.pickedChars.includes(name)) {
      updatedState.message = `WRONG! YOU ALREADY PICKED "${name.toUpperCase()}"!`
      console.log(updatedState.pickedChars)
      updatedState.pickedChars = []
      this.setState(this.state = updatedState)
    } else {
      updatedState.pickedChars.push(name)
      console.log(updatedState.pickedChars)
      updatedState.message = `CORRECT!`
      this.setState(this.state = updatedState)
    }
    this.updateTopScore(updatedState)
  }

  updateTopScore = (updatedState) => {
    if (updatedState.pickedChars.length > updatedState.currentScore) {
      updatedState.currentScore++
      this.setState(this.state = updatedState)
    }
    this.checkWin(updatedState)
  }

  checkWin = (updatedState) => {
    if (updatedState.pickedChars.length === 12) {
      updatedState.message = "ALL HAIL THE TRUE RULER OF THE SEVEN KINGDOMS";
      updatedState.pickedChars = [];
      this.setState(this.state = updatedState)
    }
  }

  render() {
    return (
      <div>
        <Navbar
          highScore={this.state.highScore}
          currentScore={this.state.currentScore}
        />
        <Jumbo message={this.state.message}/>
        <Grid characters={this.state.characters} handleSelection={this.handleSelection}/>
      </div>
    );
  }
}

export default App;
