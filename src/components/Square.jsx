import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { tictacActions } from "../store/tictacslice";

const Square = (props) => {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.tictac.player);

  const squareHandler = () => {
    if (!props.squareValue) {
      if (player) {
        dispatch(tictacActions.setSquare({ sign: "X", index: props.index })); // Payload with multiple items
      } else {
        dispatch(tictacActions.setSquare({ sign: "O", index: props.index }));
      }
    }
  };

  return (
    <div onClick={squareHandler} className="square">
      {props.squareValue}
    </div>
  );
};

export default Square;
