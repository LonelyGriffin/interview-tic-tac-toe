import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { VIEWPORT_SIZE } from "../constants";
import { newVector, Vector } from "../utils/vector";

export enum MoveType {
  Cross,
  Zero,
}

export type RootState = {
  cameraPosition: Vector;
  lastMove: {
    type: MoveType;
    position: Vector;
  };
};

const initialRootState: RootState = {
  cameraPosition: newVector(),
  lastMove: {
    type: MoveType.Zero,
    position: newVector(
      Math.floor(VIEWPORT_SIZE / 2),
      Math.floor(VIEWPORT_SIZE / 2)
    ),
  },
};

export const setCameraPos = createAction<Vector>("SET_CAMERA_POS");
export const clickCell = createAction<Vector>("MOVE");

export const rootReducer = createReducer(initialRootState, {
  [setCameraPos.type]: (state: RootState, action: PayloadAction<Vector>) => {
    return {
      ...state,
      cameraPosition: action.payload,
    };
  },
  [clickCell.type]: (state: RootState, action: PayloadAction<Vector>) => {
    return {
      ...state,
      lastMove: {
        position: action.payload,
        type:
          state.lastMove.type === MoveType.Cross
            ? MoveType.Zero
            : MoveType.Cross,
      },
    };
  },
});
