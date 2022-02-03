import React from "react";
import CustomList from './CustomList';

function    calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
class Board extends React.Component{

  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
      xstate: true,
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xstate ? 'X': 'O';
    this.setState({squares: squares,
      xstate: !this.state.xstate
    });
  }

 renderOnCall = (i) => {
    return <CustomList value={this.state.squares[i]} 
    onClick={() => this.handleClick(i)} />;
  }

  render(){
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div>
        React Custome CustomList
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderOnCall(0)}
          {this.renderOnCall(1)}
          {this.renderOnCall(2)}
        </div>
        <div className="board-row">
          {this.renderOnCall(3)}
          {this.renderOnCall(4)}
          {this.renderOnCall(5)}
        </div>
        <div className="board-row">
          {this.renderOnCall(6)}
          {this.renderOnCall(7)}
          {this.renderOnCall(8)}
        </div>
      </div>
    );
  }
}

export default Board
