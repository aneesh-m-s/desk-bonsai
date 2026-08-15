import type { TreeBranch, TreeData } from "../types/tree";

function createBranch(
  startX: number,
  startY: number,
  length: number,
  angle: number,
  width: number,
  depth: number,
  branches: TreeBranch[],
) {
  const endX = startX + Math.cos(angle) * length;
  const endY = startY + Math.sin(angle) * length;

  // Create a control point that bends the branch.
  const bendAmount = length * 0.25;

  const controlX =
    startX +
    Math.cos(angle + Math.PI / 2) * bendAmount +
    Math.cos(angle) * (length * 0.5);

  const controlY =
    startY +
    Math.sin(angle + Math.PI / 2) * bendAmount +
    Math.sin(angle) * (length * 0.5);

  branches.push({
    startX,
    startY,
    controlX,
    controlY,
    endX,
    endY,
    width,
    depth,
  });

  if (depth >= 3) {
    return;
  }

  const nextLength = length * 0.65;
  const nextWidth = width * 0.65;

  createBranch(
    endX,
    endY,
    nextLength,
    angle - 0.5,
    nextWidth,
    depth + 1,
    branches,
  );

  createBranch(
    endX,
    endY,
    nextLength,
    angle + 0.5,
    nextWidth,
    depth + 1,
    branches,
  );
}

export function generateTree(): TreeData {
  const branches: TreeBranch[] = [];

  createBranch(
    175,
    320,
    140,
    -Math.PI / 2,
    14,
    0,
    branches,
  );

  return {
    branches,
    foliage: [],
  };
}