import React, { Component } from 'react';
import { Board, Square } from './components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      Squares: Array(9).fill(null),
    };
  }


  renderBoard() {
    return this.state.Squares.map(
      (square, index) =>
        <Square key={index}>{square}</Square>
    )
  }

  render() {
    return (
      <div className="App">
        <Board>
          {this.renderBoard()}
        </Board>
      </div>
    );
  }
}

export default App;
