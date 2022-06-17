import { Vector } from "../utils/vector";
import { MoveType } from "../store/reducer";
import { CELL_SIZE } from "../constants";
import { useSelector } from "react-redux";
import { selectMoveInCell } from "../store/selectors";
import crossIcon from "../assets/cross.svg";
import zeroIcon from "../assets/zero.svg";

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
        border: "1px dashed black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {move === MoveType.Cross ? (
        <img src={crossIcon} style={{ width: "90%", height: "90%" }} />
      ) : move === MoveType.Zero ? (
        <img src={zeroIcon} style={{ width: "90%", height: "90%" }} />
      ) : null}
    </div>
  );
};
