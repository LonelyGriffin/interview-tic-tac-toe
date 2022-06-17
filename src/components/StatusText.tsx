import { useSelector } from "react-redux";
import { MoveType } from "../store/reducer";
import { selectLastMove, selectWinner } from "../store/selectors";

export const StatusText = () => {
  const winner = useSelector(selectWinner);
  const lastMove = useSelector(selectLastMove);

  if (winner !== undefined) {
    return winner === MoveType.Cross ? (
      <span style={{ fontSize: "26px" }}>
        <span style={{ color: "#2196F3" }}>Cross</span> is winner!!!
      </span>
    ) : (
      <span style={{ fontSize: "26px" }}>
        <span style={{ color: "#F44336" }}>Zero</span> is winner!!!
      </span>
    );
  }

  if (lastMove.type === MoveType.Cross) {
    return (
      <span style={{ fontSize: "26px" }}>
        Now the move of the <span style={{ color: "#F44336" }}>Zero</span>
      </span>
    );
  } else {
    return (
      <span style={{ fontSize: "26px" }}>
        Now the move of the <span style={{ color: "#2196F3" }}>Cross</span>
      </span>
    );
  }
};
