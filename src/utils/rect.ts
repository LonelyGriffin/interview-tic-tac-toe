import { isEqualVectors, newVector, Vector } from "./vector";

export type Rect = {
  position: Vector;
  size: Vector;
};

export const newRect = (position = newVector(), size = newVector()): Rect => ({
  position,
  size
});

export const isEqualRects = (r1: Rect, r2: Rect) =>
  isEqualVectors(r1.position, r2.position) && isEqualVectors(r1.size, r2.size);
