import React, { forwardRef, useEffect, useState } from "react";

type Shape =
  | "heart"
  | "dove"
  | "circle"
  | "wave"
  | "spiral"
  | "custom"
  | "tag"
  | "star"
  | "butterfly"
  | "tree";

interface CalligramPreviewProps {
  text: string;
  shape: Shape;
  fontSize: number;
  fontFamily: string;
  letterSpacing: number;
  color: string;
  fontWeight: string;
  fontStyle: string;
  backgroundColor: string;
}

interface Point {
  x: number;
  y: number;
}

const CalligramPreview = forwardRef<HTMLDivElement, CalligramPreviewProps>(
  (
    {
      text,
      shape,
      fontSize,
      fontFamily,
      letterSpacing,
      color,
      fontWeight,
      fontStyle,
      backgroundColor,
    },
    ref
  ) => {
    const [points, setPoints] = useState<Point[]>([]);
    const canvasWidth = 800;
    const canvasHeight = 600;

    useEffect(() => {
      // Generate shape points based on selected shape
      const shapePoints = generateShapePoints(shape, canvasWidth, canvasHeight);
      setPoints(shapePoints);
    }, [shape]);

    const generateShapePoints = (
      shape: Shape,
      width: number,
      height: number
    ): Point[] => {
      const centerX = width / 2;
      const centerY = height / 2;
      const result: Point[] = [];

      switch (shape) {
        case "heart":
          // Create a proper heart shape
          const heartSize = 200;

          // Using a parametric heart equation that works properly
          for (let t = 0; t <= Math.PI * 2; t += 0.05) {
            // Standard heart curve equation
            const x =
              centerX + (heartSize * (16 * Math.pow(Math.sin(t), 3))) / 16;
            const y =
              centerY -
              (heartSize *
                (13 * Math.cos(t) -
                  5 * Math.cos(2 * t) -
                  2 * Math.cos(3 * t) -
                  Math.cos(4 * t))) /
                16;
            result.push({ x, y });
          }

          // Add additional points inside the heart for better text distribution
          for (let i = 1; i < 8; i++) {
            const scale = i / 8;
            for (let t = 0; t <= Math.PI * 2; t += 0.2) {
              const x =
                centerX +
                (scale * heartSize * (16 * Math.pow(Math.sin(t), 3))) / 16;
              const y =
                centerY -
                (scale *
                  heartSize *
                  (13 * Math.cos(t) -
                    5 * Math.cos(2 * t) -
                    2 * Math.cos(3 * t) -
                    Math.cos(4 * t))) /
                  16;
              result.push({ x, y });
            }
          }

          // Add additional points in center of heart
          for (
            let y = centerY - heartSize / 3;
            y <= centerY + heartSize / 3;
            y += 10
          ) {
            for (
              let x = centerX - heartSize / 3;
              x <= centerX + heartSize / 3;
              x += 10
            ) {
              result.push({ x, y });
            }
          }
          break;

        case "star":
          // Create a star shape
          const starPoints = 5; // 5-pointed star
          const outerRadius = 200;
          const innerRadius = outerRadius * 0.4;

          // Create the star's outer and inner points
          for (let i = 0; i < starPoints * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (Math.PI / starPoints) * i;
            const x = centerX + radius * Math.sin(angle);
            const y = centerY - radius * Math.cos(angle);
            result.push({ x, y });
          }

          // Add points inside the star for better text distribution
          for (let i = 1; i < 8; i++) {
            const scale = i / 8;
            for (let j = 0; j < starPoints * 2; j++) {
              const radius =
                j % 2 === 0 ? outerRadius * scale : innerRadius * scale;
              const angle = (Math.PI / starPoints) * j;
              const x = centerX + radius * Math.sin(angle);
              const y = centerY - radius * Math.cos(angle);
              result.push({ x, y });
            }
          }

          // Add center points
          for (
            let y = centerY - innerRadius;
            y <= centerY + innerRadius;
            y += 15
          ) {
            for (
              let x = centerX - innerRadius;
              x <= centerX + innerRadius;
              x += 15
            ) {
              result.push({ x, y });
            }
          }
          break;

        case "butterfly":
          // Create a butterfly shape
          const bfSize = 250;

          // Right upper wing (complex curve)
          for (let t = 0; t <= Math.PI; t += 0.05) {
            const x = centerX + (bfSize / 2) * Math.sin(t);
            const y = centerY - (bfSize / 2) * Math.sin(2 * t);
            result.push({ x, y });
          }

          // Left upper wing (complex curve)
          for (let t = 0; t <= Math.PI; t += 0.05) {
            const x = centerX - (bfSize / 2) * Math.sin(t);
            const y = centerY - (bfSize / 2) * Math.sin(2 * t);
            result.push({ x, y });
          }

          // Right lower wing (simple curve)
          for (let t = 0; t <= Math.PI; t += 0.05) {
            const x = centerX + (bfSize / 3) * Math.sin(t);
            const y = centerY + (bfSize / 4) * Math.sin(t);
            result.push({ x, y });
          }

          // Left lower wing (simple curve)
          for (let t = 0; t <= Math.PI; t += 0.05) {
            const x = centerX - (bfSize / 3) * Math.sin(t);
            const y = centerY + (bfSize / 4) * Math.sin(t);
            result.push({ x, y });
          }

          // Body
          for (
            let y = centerY - bfSize / 2;
            y <= centerY + bfSize / 3;
            y += 5
          ) {
            result.push({ x: centerX, y });
          }

          // Antennae
          for (let i = 0; i < 10; i++) {
            // Left antenna
            result.push({
              x: centerX - (10 * i) / 2,
              y: centerY - bfSize / 2 - 10 * i,
            });

            // Right antenna
            result.push({
              x: centerX + (10 * i) / 2,
              y: centerY - bfSize / 2 - 10 * i,
            });
          }

          // Add filling points
          for (let i = 1; i < 5; i++) {
            const scale = i / 5;
            // Right upper wing filling
            for (let t = 0; t <= Math.PI; t += 0.2) {
              const x = centerX + scale * (bfSize / 2) * Math.sin(t);
              const y = centerY - scale * (bfSize / 2) * Math.sin(2 * t);
              result.push({ x, y });
            }

            // Left upper wing filling
            for (let t = 0; t <= Math.PI; t += 0.2) {
              const x = centerX - scale * (bfSize / 2) * Math.sin(t);
              const y = centerY - scale * (bfSize / 2) * Math.sin(2 * t);
              result.push({ x, y });
            }

            // Lower wings filling
            for (let t = 0; t <= Math.PI; t += 0.2) {
              const x = centerX + scale * (bfSize / 3) * Math.sin(t);
              const y = centerY + scale * (bfSize / 4) * Math.sin(t);
              result.push({ x, y });

              // Left side
              result.push({
                x: centerX - scale * (bfSize / 3) * Math.sin(t),
                y: centerY + scale * (bfSize / 4) * Math.sin(t),
              });
            }
          }
          break;

        case "tree":
          // Create a tree shape
          const trunkWidth = 30;
          const trunkHeight = 180;

          // Trunk
          for (let y = centerY; y <= centerY + trunkHeight; y += 5) {
            for (
              let x = centerX - trunkWidth / 2;
              x <= centerX + trunkWidth / 2;
              x += 5
            ) {
              result.push({ x, y });
            }
          }

          // Tree crown (triangular)
          // Level 1 (bottom)
          const crownWidth1 = 200;
          const crownHeight1 = 100;
          for (let y = centerY; y >= centerY - crownHeight1; y -= 5) {
            const progress = (centerY - y) / crownHeight1;
            const currentWidth = crownWidth1 * progress;
            for (
              let x = centerX - currentWidth;
              x <= centerX + currentWidth;
              x += 5
            ) {
              result.push({ x, y });
            }
          }

          // Level 2 (middle)
          const crownWidth2 = 150;
          const crownHeight2 = 80;
          for (
            let y = centerY - crownHeight1;
            y >= centerY - crownHeight1 - crownHeight2;
            y -= 5
          ) {
            const progress = (centerY - crownHeight1 - y) / crownHeight2;
            const currentWidth = crownWidth2 * progress;
            for (
              let x = centerX - currentWidth;
              x <= centerX + currentWidth;
              x += 5
            ) {
              result.push({ x, y });
            }
          }

          // Level 3 (top)
          const crownWidth3 = 100;
          const crownHeight3 = 70;
          for (
            let y = centerY - crownHeight1 - crownHeight2;
            y >= centerY - crownHeight1 - crownHeight2 - crownHeight3;
            y -= 5
          ) {
            const progress =
              (centerY - crownHeight1 - crownHeight2 - y) / crownHeight3;
            const currentWidth = crownWidth3 * progress;
            for (
              let x = centerX - currentWidth;
              x <= centerX + currentWidth;
              x += 5
            ) {
              result.push({ x, y });
            }
          }
          break;

        case "dove":
          // Create a dove shape (simplified)
          // Body
          for (let t = 0; t < Math.PI; t += 0.1) {
            const scale = 100;
            const x = centerX + scale * Math.cos(t);
            const y = centerY + scale * Math.sin(t) * 0.7;
            result.push({ x, y });
          }

          // Wings
          for (let t = 0; t < Math.PI; t += 0.1) {
            const scale = 80;
            const x = centerX + scale * Math.cos(t + Math.PI / 4);
            const y = centerY - 50 + scale * Math.sin(t + Math.PI / 4) * 0.5;
            result.push({ x, y });
          }

          // Head and beak
          for (let i = 0; i < 20; i++) {
            const x = centerX + 100 + i * 5;
            const y = centerY - 20 - i * 2;
            result.push({ x, y });
          }
          break;

        case "circle":
          // Create a circle
          for (let t = 0; t < Math.PI * 2; t += 0.05) {
            const radius = 200;
            const x = centerX + radius * Math.cos(t);
            const y = centerY + radius * Math.sin(t);
            result.push({ x, y });
          }
          break;

        case "wave":
          // Create a wave shape
          for (let x = 0; x < width; x += 10) {
            const amplitude = 100;
            const frequency = 0.01;
            const y = centerY + amplitude * Math.sin(frequency * x);
            result.push({ x, y });
          }
          break;

        case "spiral":
          // Create a spiral shape
          for (let t = 0; t < 20; t += 0.1) {
            const radius = t * 10;
            const x = centerX + radius * Math.cos(t);
            const y = centerY + radius * Math.sin(t);
            result.push({ x, y });
          }
          break;

        case "tag":
          // Create a tag shape
          const tagWidth = 300;
          const tagHeight = 200;

          // Top line
          for (
            let x = centerX - tagWidth / 2;
            x <= centerX + tagWidth / 2;
            x += 10
          ) {
            result.push({ x, y: centerY - tagHeight / 2 });
          }

          // Right line
          for (
            let y = centerY - tagHeight / 2;
            y <= centerY + tagHeight / 4;
            y += 10
          ) {
            result.push({ x: centerX + tagWidth / 2, y });
          }

          // Bottom right diagonal
          for (let i = 0; i <= 10; i++) {
            const x = centerX + tagWidth / 2 - (tagWidth / 4) * (i / 10);
            const y = centerY + tagHeight / 4 + (tagHeight / 4) * (i / 10);
            result.push({ x, y });
          }

          // Bottom left diagonal
          for (let i = 0; i <= 10; i++) {
            const x = centerX - (tagWidth / 4) * (i / 10);
            const y = centerY + tagHeight / 2 - (tagHeight / 4) * (i / 10);
            result.push({ x, y });
          }

          // Left line
          for (
            let y = centerY + tagHeight / 4;
            y >= centerY - tagHeight / 2;
            y -= 10
          ) {
            result.push({ x: centerX - tagWidth / 2, y });
          }

          // Add hole in tag
          const holeRadius = 20;
          for (let t = 0; t < Math.PI * 2; t += 0.2) {
            const x = centerX - tagWidth / 4;
            const y = centerY - tagHeight / 4;
            const hx = x + holeRadius * Math.cos(t);
            const hy = y + holeRadius * Math.sin(t);
            result.push({ x: hx, y: hy });
          }
          break;

        case "custom":
          // Create a simple rectangle shape for "custom"
          const rectWidth = 300;
          const rectHeight = 200;

          // Top line
          for (
            let x = centerX - rectWidth / 2;
            x <= centerX + rectWidth / 2;
            x += 10
          ) {
            result.push({ x, y: centerY - rectHeight / 2 });
          }

          // Right line
          for (
            let y = centerY - rectHeight / 2;
            y <= centerY + rectHeight / 2;
            y += 10
          ) {
            result.push({ x: centerX + rectWidth / 2, y });
          }

          // Bottom line
          for (
            let x = centerX + rectWidth / 2;
            x >= centerX - rectWidth / 2;
            x -= 10
          ) {
            result.push({ x, y: centerY + rectHeight / 2 });
          }

          // Left line
          for (
            let y = centerY + rectHeight / 2;
            y >= centerY - rectHeight / 2;
            y -= 10
          ) {
            result.push({ x: centerX - rectWidth / 2, y });
          }
          break;
      }

      return result;
    };

    const renderCalligram = () => {
      if (!text || points.length === 0) {
        return null;
      }

      // Calculate how many characters we can place per point
      const chars = text.replace(/\s+/g, " ").split("");
      const charsPerPoint = Math.max(
        1,
        Math.ceil(chars.length / points.length)
      );

      return points.map((point, index) => {
        const startIndex = index * charsPerPoint;
        const endIndex = Math.min(startIndex + charsPerPoint, chars.length);
        const charSlice = chars.slice(startIndex, endIndex).join("");

        if (!charSlice) return null;

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${point.x}px`,
              top: `${point.y}px`,
              fontSize: `${fontSize}px`,
              fontFamily,
              fontWeight,
              fontStyle,
              letterSpacing: `${letterSpacing}px`,
              color,
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
            }}
          >
            {charSlice}
          </div>
        );
      });
    };

    return (
      <div
        ref={ref}
        className="calligram-preview"
        style={{
          width: `${canvasWidth}px`,
          height: `${canvasHeight}px`,
          position: "relative",
          overflow: "hidden",
          backgroundColor: backgroundColor,
        }}
      >
        {renderCalligram()}
      </div>
    );
  }
);

export default CalligramPreview;
