import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { tictacActions } from "../store/tictacslice";
import Square from "../components/Square";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const squares = useSelector((state) => state.tictac.squares);

  const resetHandler = () => {
    dispatch(tictacActions.reset());
  };

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
      <button className="reset-btn" onClick={resetHandler}>
        Reset
      </button>
      <div className="tac-container">
        {squares.map((value, index) => {
          return <Square squareValue={value} index={index} />;
        })}
      </div>
      <h4 className="winner">{calculateWinner(squares)}</h4>
    </div>
  );
};

export default HomeScreen;
