import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { newRect, Rect } from "../utils/rect";
import { newVector, Vector } from "../utils/vector";

export enum MoveType {
  Cross,
  Zero
}

export type RootState = {
  camera: Rect;
  lastMove: {
    type: MoveType;
    position: Vector;
  };
};

const initialRootState: RootState = {
  camera: newRect(),
  lastMove: {
    type: MoveType.Zero,
    position: newVector()
  }
};

export const setCamera = createAction<Rect>("SET_CAMERA");

export const rootReducer = createReducer(initialRootState, {
  [setCamera.type]: (state: RootState, action: PayloadAction<Rect>) => {
    return {
      ...state,
      camera: action.payload
    };
  }
});
