import { useCallback } from "react";
import { useSelector } from "react-redux";
import {
  selectVisibleCellsRange,
  selectCameraPosition,
} from "../store/selectors";
import { Rect } from "../utils/rect";
import { newVector, Vector } from "../utils/vector";
import { Cell } from "./Cell";

export const Cells = () => {
  const visibleCellsRange = useSelector(selectVisibleCellsRange);
  const cellCoordinatesToRender = getCoordinates(visibleCellsRange);

  return (
    <div
      style={{
        position: "relative",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {cellCoordinatesToRender.map((coord) => (
        <Cell coordinates={coord} key={`${coord.x}_${coord.y}`} />
      ))}
    </div>
  );
};

const getCoordinates = (visibleCellsRange: Rect) => {
  const coords = [];

  const minX = visibleCellsRange.position.x;
  const minY = visibleCellsRange.position.y;
  const maxX = visibleCellsRange.position.x + visibleCellsRange.size.x;
  const maxY = visibleCellsRange.position.y + visibleCellsRange.size.y;

  for (let x = minX; x < maxX; x++) {
    for (let y = minY; y < maxY; y++) {
      coords.push(newVector(x, y));
    }
  }

  return coords;
};
