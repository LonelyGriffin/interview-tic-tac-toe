import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CELL_SIZE, VIEWPORT_SIZE } from "../constants";
import { clickCell } from "../store/reducer";
import { selectCameraPosition } from "../store/selectors";
import { newVector } from "../utils/vector";
import { Cells } from "./Cells";
import { StatusText } from "./StatusText";

export default function App() {
  const dispatch = useDispatch();
  const cameraPosition = useSelector(selectCameraPosition);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (e) => {
      if (!ref.current) {
        return;
      }

      var rect = ref.current.getBoundingClientRect();
      var x = e.clientX - rect.left - cameraPosition.x;
      var y = e.clientY - rect.top - cameraPosition.y;

      const coordX = Math.floor(x / CELL_SIZE);
      const coordY = Math.floor(y / CELL_SIZE);

      dispatch(clickCell(newVector(coordX, coordY)));
    },
    [cameraPosition, dispatch, ref]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h1>Infinity tic-tac-toe</h1>
      <div
        ref={ref}
        onClick={handleClick}
        style={{
          width: `${CELL_SIZE * VIEWPORT_SIZE}px`,
          height: `${CELL_SIZE * VIEWPORT_SIZE}px`,
          overflow: "hidden",
          border: "10px solid black",
        }}
      >
        <Cells />
      </div>
      <StatusText />
    </div>
  );
}
