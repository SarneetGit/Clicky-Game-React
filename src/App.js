import React from 'react';
import Navbar from "./Components/Navbar"
import Grid from "./Components/Grid"
import './App.css';
import characters from "./characters.json";

class App extends React.Component {

  state = {
    characters: characters,
    pickedChars: [],
    currentScore: 6,
    highScore: 9
  }

  shuffleCharacters = () => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.setState(this.state.characters = this.shuffle(this.state.characters))
  }

  shuffle = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}



render() {
  return (
    <div>
      <Navbar highScore={this.state.highScore} currentScore={this.state.currentScore} />
      <Grid characters={this.state.characters}/>
    </div>
  )
}
}

export default App;
