"use client";

import tinycolor from "tinycolor2";
import React, { useState, useEffect, useRef } from "react";

interface Dimension {
  width: number;
  height: number;
}

const HeroScene: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0,
  });

  const resize = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  let indexOfCurrentColor = 0;

  const colors: string[] = ["#5A9DAC", "#E69E37", "#F1E0D6"];

  let prevX: number | null = null;
  let prevY: number | null = null;

  const manageMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, movementX, movementY } = event;

    requestAnimationFrame(() => {
      paint(clientX, clientY, 180, 18);
    });

    if (prevX != null) {
      const mouseSpeed = Math.max(Math.abs(movementX), Math.abs(movementY));
      fill(clientX, clientY, 180, mouseSpeed / 20);
    }

    prevX = clientX;
    prevY = clientY;
  };

  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

  const fill = (x: number, y: number, radius: number, amount: number): void => {
    if (prevX !== null && prevY !== null) {
      for (let i = 0; i < amount; i++) {
        const targetX = lerp(prevX, x, (1 / amount) * i);
        const targetY = lerp(prevY, y, (1 / amount) * i);

        requestAnimationFrame(() => {
          paint(targetX, targetY, radius, 18);
        });
      }
    }
  };

  const lighten = (color: string, amount: number): string => {
    if (amount === 0) return color;

    return tinycolor(color)
      .brighten(amount * 0.8)
      .saturate(amount * 0.8)
      .toString();
  };

  const paint = (x: number, y: number, radius: number, shade: number) => {
    if (shade === 0) return;

    const ctx = canvas.current?.getContext("2d");

    if (ctx) {
      const color = lighten(colors[indexOfCurrentColor], shade);

      ctx.fillStyle = color;

      ctx.beginPath();

      ctx.arc(x, y, radius, 0, Math.PI * 2, true);

      ctx.fill();

      requestAnimationFrame(() => {
        paint(x, y, radius, shade - 1);
      });
    }
  };

  return (
    <div
      ref={container}
      className="flex justify-center items-center h-screen bg-[#f0f0f0]"
      onMouseMove={manageMouseMove}
    >
      <canvas
        ref={canvas}
        className="canvas"
        width={dimension.width}
        height={dimension.height}
      ></canvas>
    </div>
  );
};

export default HeroScene;
