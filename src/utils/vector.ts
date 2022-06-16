export type Vector = {
  x: number;
  y: number;
};

export const newVector = (x = 0, y = 0) => ({ x, y });

export const isEqualVectors = (v1: Vector, v2: Vector) =>
  v1.x === v2.x && v1.y === v2.y;

export const mapVector = (vector: Vector, mapper: (n: number) => number) =>
  newVector(mapper(vector.x), mapper(vector.y));
