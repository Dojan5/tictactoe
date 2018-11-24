import React, { Component } from 'react';
import { Board, Square } from './components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: false,
      Squares: Array(9).fill(null),
      Finished: null,
      Playing: null
    };
  }

  componentDidMount() {
    setTimeout(this.toggleBoardVisibility, 250);
  }

  toggleBoardVisibility = () => this.setState({ isVisible: !this.state.isVisible });

  //Renders the board
  renderBoard() {
    return this.state.Squares.map(
      (square, index) =>
        <Square key={index} onClick={() => this.handleClick(index)}>{square}</Square>
    )
  }

  //Resets the board to a default state
  resetGame() {
    this.setState({
      Squares: Array(9).fill(null),
      Finished: null,
      Playing: null
    })
  }

  checkForVictor() {
    //Board configuration that results in a win
    const victoryConfiguration = [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6'],
    ]
    //Run check function
    this.checkBoardForMatch(victoryConfiguration)
  }

  checkBoardForMatch(victoryConfiguration) {
    //Enumerate through the possible victory configs
    for (let index = 0; index < victoryConfiguration.length; index++) {
      const [a, b, c] = victoryConfiguration[index];
      let squares = this.state.Squares;
      //Checks if the current board is a match towards the current victory config
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        this.setState({ Finished: true })
      }
    }
  }

  handleClick(index) {
    console.log("I clicked " + index);
  }

  setPlayer(player) {
    this.setState({ Playing: player })
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <Board pose={isVisible ? 'visible' : 'hidden'}>
          {this.renderBoard()}
        </Board>
      </div>
    );
  }
}

export default App;
