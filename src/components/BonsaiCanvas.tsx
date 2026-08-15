import { useEffect, useRef } from "react";
import type { GrowthStage } from "../types/plant";
import { generateTree } from "../utils/treeGenerator";

interface BonsaiCanvasProps {
  stage: GrowthStage;
}

function BonsaiCanvas({ stage }: BonsaiCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Generate the tree structure.
    const tree = generateTree();

    // --------------------
    // Pot
    // --------------------

    ctx.fillStyle = "#8B5A2B";

    ctx.beginPath();
    ctx.moveTo(120, 320);
    ctx.lineTo(230, 320);
    ctx.lineTo(215, 380);
    ctx.lineTo(135, 380);
    ctx.closePath();

    ctx.fill();

    // --------------------
    // Branches
    // --------------------

    tree.branches.forEach((branch) => {
      ctx.strokeStyle = "#5C3A21";
      ctx.lineWidth = branch.width;
      ctx.lineCap = "round";

      ctx.beginPath();

      ctx.beginPath();

      ctx.moveTo(branch.startX, branch.startY);

      ctx.quadraticCurveTo(
        branch.controlX,
        branch.controlY,
        branch.endX,
        branch.endY,
      );

      ctx.stroke();
    });

    // --------------------
    // Simple foliage
    // --------------------

    if (stage !== "sprout") {
      ctx.fillStyle = "#4CAF50";

      tree.branches
        .filter((branch) => branch.depth >= 2)
        .forEach((branch) => {
          ctx.beginPath();

          ctx.arc(
            branch.endX,
            branch.endY,
            stage === "sapling" ? 14 : 18,
            0,
            Math.PI * 2,
          );

          ctx.fill();
        });
    }
  }, [stage]);

  return (
    <canvas
      ref={canvasRef}
      width={350}
      height={400}
    />
  );
}

export default BonsaiCanvas;