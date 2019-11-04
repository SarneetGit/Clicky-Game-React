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
    message: "",
    correct: 0
  };

  shuffleCharacters = () => {
    this.setState({
      characters: this.shuffle(this.state.characters)
    })
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
      updatedState.message = `WRONG! YOU ALREADY PICKED ${name.toUpperCase()}!`
      updatedState.pickedChars = []
      updatedState.currentScore = 0
      updatedState.correct = false
      this.setState({
        message: updatedState.message,
        pickedChars: updatedState.pickedChars,
        currentScore: updatedState.currentScore,
        correct: updatedState.correct})
    } else {
      updatedState.pickedChars.push(name)
      updatedState.message = `CORRECT!`
      updatedState.correct = true
      this.setState({
        pickedChars: updatedState.pickedChars,
        message: updatedState.message,
        correct: updatedState.correct
      })
    }
    this.updateTopScore(updatedState)
  }

  updateTopScore = (updatedState) => {
    if (updatedState.pickedChars.length > updatedState.currentScore) {
      updatedState.currentScore++
      if (updatedState.currentScore > updatedState.highScore) {
        updatedState.highScore++
      }
      this.setState({
        currentScore: updatedState.currentScore,
        highScore: updatedState.highScore
      })
    }
    this.checkWin(updatedState)
  }

  checkWin = (updatedState) => {
    if (updatedState.pickedChars.length === 12) {
      updatedState.message = "ALL HAIL THE TRUE RULER OF THE SEVEN KINGDOMS";
      updatedState.pickedChars = [];
      this.setState({
        message: updatedState.message,
        pickedChars: updatedState.pickedChars
      })
    }
  }

  render() {
    return ( 
    <div>
      <Navbar highScore = {
        this.state.highScore
      }
      currentScore = {
        this.state.currentScore
      }
      /> 
      <Jumbo 
        message = {
          this.state.message
        }
        correct = {
          this.state.correct
        }
      /> 
      <Grid 
        characters = {
          this.state.characters
        }
        handleSelection = {
          this.handleSelection
        }
      /> 
      </div >
    );
  }
}

export default App;