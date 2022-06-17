import { CELL_SIZE } from "../constants";
import { newRect, Rect } from "../utils/rect";
import { isEqualVectors, mapVector, Vector } from "../utils/vector";
import { RootState, MoveType } from "./reducer";

export const selectCamera = (state: RootState) => state.camera;
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
  const { camera } = state;

  return newRect(
    mapVector(camera.position, (n) => Math.floor(n / CELL_SIZE)),
    mapVector(camera.size, (n) => Math.ceil(n / CELL_SIZE))
  );
}
