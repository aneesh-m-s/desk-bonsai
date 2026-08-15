export interface TreeBranch {
  startX: number;
  startY: number;

  controlX: number;
  controlY: number;

  endX: number;
  endY: number;

  width: number;
  depth: number;
}

export interface FoliageCluster {
  x: number;
  y: number;
  radiusX: number;
  radiusY: number;
}

export interface TreeData {
  branches: TreeBranch[];
  foliage: FoliageCluster[];
}