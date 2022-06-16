import { useSelector } from "react-redux";
import { selectCamera, selectVisibleCellsRange } from "../store/selectors";
import { newVector } from "../utils/vector";
import { Cell } from "./Cell";

export const Cells = () => {
  const camera = useSelector(selectCamera);
  const visibleCellsRange = useSelector(selectVisibleCellsRange);

  const cells = [];

  for (let x = 0; x < visibleCellsRange.size.x; x++) {
    for (let y = 0; y < visibleCellsRange.size.y; y++) {
      cells.push(<Cell coordinates={newVector(x, y)} key={`${x}_${y}`} />);
    }
  }

  return (
    <div
      style={{
        position: "relative",
        left: 0,
        top: 0
      }}
    >
      {cells}
    </div>
  );
};
