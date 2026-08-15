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

  branches.push({
    startX,
    startY,
    endX,
    endY,
    width,
    depth,
  });

  // Stop creating smaller branches
  // when we reach the final branch depth.
  if (depth >= 3) {
    return;
  }

  const nextLength = length * 0.65;
  const nextWidth = width * 0.65;

  // Left branch
  createBranch(
    endX,
    endY,
    nextLength,
    angle - 0.5,
    nextWidth,
    depth + 1,
    branches,
  );

  // Right branch
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

  // Main trunk
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