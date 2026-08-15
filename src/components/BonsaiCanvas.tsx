import { useEffect, useRef } from "react";
import type { GrowthStage } from "../types/plant";

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
    // Sprout
    // --------------------

    if (stage === "sprout") {
      ctx.strokeStyle = "#5C3A21";
      ctx.lineWidth = 8;
      ctx.lineCap = "round";

      ctx.beginPath();
      ctx.moveTo(175, 320);
      ctx.lineTo(175, 220);
      ctx.stroke();

      ctx.fillStyle = "#4CAF50";

      ctx.beginPath();
      ctx.arc(160, 215, 16, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(190, 205, 16, 0, Math.PI * 2);
      ctx.fill();
    }

    // --------------------
    // Sapling
    // --------------------

    if (stage === "sapling") {
      ctx.strokeStyle = "#5C3A21";
      ctx.lineCap = "round";

      ctx.lineWidth = 10;

      ctx.beginPath();
      ctx.moveTo(175, 320);
      ctx.lineTo(175, 190);
      ctx.stroke();

      ctx.lineWidth = 6;

      ctx.beginPath();
      ctx.moveTo(175, 240);
      ctx.lineTo(125, 180);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(175, 235);
      ctx.lineTo(225, 175);
      ctx.stroke();

      ctx.fillStyle = "#4CAF50";

      const leaves = [
        [120, 170],
        [140, 150],
        [225, 165],
        [210, 145],
        [175, 125],
      ];

      leaves.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // --------------------
    // Young / Mature / Bloom
    // --------------------

    if (
      stage === "young" ||
      stage === "mature" ||
      stage === "bloom"
    ) {
      ctx.strokeStyle = "#5C3A21";
      ctx.lineCap = "round";

      ctx.lineWidth = 12;

      ctx.beginPath();
      ctx.moveTo(175, 320);
      ctx.lineTo(175, 170);
      ctx.stroke();

      ctx.lineWidth = 7;

      const branches = [
        [175, 250, 115, 180],
        [175, 235, 235, 170],
        [175, 210, 130, 135],
        [175, 190, 220, 120],
      ];

      branches.forEach(([x1, y1, x2, y2]) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      ctx.fillStyle = "#4CAF50";

      const leaves = [
        [110, 170],
        [130, 150],
        [100, 195],
        [235, 160],
        [215, 140],
        [245, 185],
        [125, 125],
        [220, 115],
        [175, 105],
        [155, 130],
      ];

      leaves.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // --------------------
    // Bloom stage
    // --------------------

    if (stage === "bloom") {
      ctx.fillStyle = "#FFD700";

      const flowers = [
        [110, 170],
        [235, 160],
        [125, 125],
        [220, 115],
        [175, 105],
      ];

      flowers.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
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