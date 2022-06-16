import { Vector } from "../utils/vector";
import { MoveType } from "../store/reducer";
import { CELL_SIZE } from "../constants";
import { useSelector } from "react-redux";
import { selectMoveInCell } from "../store/selectors";

type Props = {
  coordinates: Vector;
};

export const Cell = (props: Props) => {
  const { coordinates } = props;
  const move = useSelector(selectMoveInCell(coordinates));
  return (
    <div
      style={{
        position: "absolute",
        width: CELL_SIZE,
        height: CELL_SIZE,
        left: coordinates.x * CELL_SIZE,
        top: coordinates.y * CELL_SIZE,
        border: "2px solid black"
      }}
    >
      {move === MoveType.Cross ? "x" : move === MoveType.Zero ? "0" : null}
    </div>
  );
};
