import { useEffect, useRef } from "react";

function BonsaiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    // Clear the canvas
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
    // Trunk
    // --------------------

    ctx.strokeStyle = "#5C3A21";
    ctx.lineWidth = 12;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(175, 320);
    ctx.lineTo(175, 190);
    ctx.stroke();

    // --------------------
    // Branch
    // --------------------

    ctx.lineWidth = 7;

    ctx.beginPath();
    ctx.moveTo(175, 230);
    ctx.lineTo(125, 175);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(175, 245);
    ctx.lineTo(225, 180);
    ctx.stroke();

    // --------------------
    // Leaves
    // --------------------

    ctx.fillStyle = "#4CAF50";

    const leaves = [
      [120, 165],
      [140, 150],
      [110, 185],
      [230, 170],
      [215, 150],
      [240, 190],
      [175, 130],
    ];

    leaves.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={350}
      height={400}
    />
  );
}

export default BonsaiCanvas;