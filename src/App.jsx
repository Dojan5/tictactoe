import React, { Component } from 'react';
import { Board, Square } from './components';

class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.renderBoard = this.renderBoard.bind(this);
    this.state = {
      isVisible: false,
      Squares: Array(9).fill(null),
      gameOver: null,
      isDraw: false,
      CurrentPlayer: "Magenta",
      WinningPlayer: null
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
        //Hacky fix because of React nonsense - you can't call method handlers on custom components
        <div className="stupidFuckingBox" onClick={() => this.handleClick(index)}
          key={index}>
          <Square key={index}
            color={square}>
            {square === "Magenta" &&
              <i className="fas fa-times"></i>
            }
            {square === "Orange" &&
              <i className="far fa-circle"></i>
            }
          </Square>
        </div>
    )
  }

  //Resets the board to a default state
  resetGame() {
    this.setState({
      Squares: Array(9).fill(null),
      gameOver: null,
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
    this.checkBoardForDraw();
  }

  checkBoardForDraw() {
    var board = this.state.Squares;
    for (var i = 0; i < board.length; i++) {
      if (board[i] === null) {
        return false;
      }
    }
    if (this.state.WinningPlayer != null) {
      return this.setState({ isDraw: true, gameOver: true })
    }
  }

  checkBoardForMatch(victoryConfiguration) {
    //Enumerate through the possible victory configs
    for (var i = 0; i < victoryConfiguration.length; i++) {
      const [a, b, c] = victoryConfiguration[i];
      var squares = this.state.Squares;
      //Checks if the current board is a match towards the current victory config
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        this.setState({ gameOver: true, WinningPlayer: squares[a] })
        this.fanfare.play();
      }
    }
  }

  handleClick(index) {
    if (!this.state.gameOver && this.state.CurrentPlayer) {
      var UpdatedBoard = this.state.Squares;
      //Only clickable if the current index doesn't hold a value, ya can't overwrite other people's pieces ya twerp
      if (this.state.Squares[index] === null) {
        //Have the player claim the square
        UpdatedBoard[index] = this.state.CurrentPlayer;
        this.setState({
          Squares: UpdatedBoard,
          CurrentPlayer: this.state.CurrentPlayer === "Magenta" ? "Orange" : "Magenta"
        })
        this.checkForVictor();
      }
    }
  }

  setPlayer(player) {
    this.setState({ CurrentPlayer: player })
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <Board pose={isVisible ? 'visible' : 'hidden'}>
          {this.renderBoard()}
        </Board>
        <audio ref={(fanfare) => { this.fanfare = fanfare }}>
          <source src="/audio/PleaseDoNotSueMe.mp3" type="audio/mpeg" ></source>
        </audio>
      </div>
    );
  }
}

export default App;
