import { CELL_SIZE, VIEWPORT_SIZE } from "../constants";
import { newRect, Rect } from "../utils/rect";
import { isEqualVectors, mapVector, newVector, Vector } from "../utils/vector";
import { RootState, MoveType } from "./reducer";

export const selectCameraPosition = (state: RootState) => state.cameraPosition;
export const selectLastMove = (state: RootState) => state.lastMove;

export const selectMoveInCell =
  (position: Vector) =>
  (state: RootState): MoveType | undefined => {
    const { lastMove } = state;

    if (isEqualVectors(position, lastMove.position)) {
      return lastMove.type;
    }

    return undefined;
  };

export const selectWinner = (state: RootState): MoveType | undefined =>
  undefined;

export function selectVisibleCellsRange(state: RootState): Rect {
  const { cameraPosition } = state;

  const leftTop = mapVector(cameraPosition, (n) => Math.floor(n / CELL_SIZE));

  return newRect(
    leftTop,
    newVector(leftTop.x + VIEWPORT_SIZE + 1, leftTop.y + VIEWPORT_SIZE + 1)
  );
}
