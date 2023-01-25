import React from "react";
import { useSelector } from "react-redux";

const HomeScreen = () => {
    const squares = useSelector((state) => state.tictac.squares)

  const calculateWinner = (arr) => {
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
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return `${arr[a]} won!`;
      }
    }
    return "Who will win?";
  };

  return (
    <div className="page">
      <div className="tac-container">
        <div className="tac-square"></div>
        <div className="tac-square"></div>
        <div className="tac-square"></div>
        <div className="tac-square"></div>
        <div className="tac-square"></div>
        <div className="tac-square"></div>
        <div className="tac-square"></div>
        <div className="tac-square"></div>
        <div className="tac-square"></div>
      </div>
      <button>Reset</button>
      <h4>{calculateWinner(squares)}</h4>
    </div>
  );
};

export default HomeScreen;
