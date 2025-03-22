import React from "react";

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

interface ShapeSelectorProps {
  selectedShape: Shape;
  onSelectShape: (shape: Shape) => void;
}

const ShapeSelector: React.FC<ShapeSelectorProps> = ({
  selectedShape,
  onSelectShape,
}) => {
  const shapes: Array<{ id: Shape; name: string }> = [
    { id: "heart", name: "Heart" },
    { id: "star", name: "Star" },
    { id: "butterfly", name: "Butterfly" },
    { id: "dove", name: "Dove" },
    { id: "tree", name: "Tree" },
    { id: "circle", name: "Circle" },
    { id: "wave", name: "Wave" },
    { id: "spiral", name: "Spiral" },
    { id: "tag", name: "Tag" },
    { id: "custom", name: "Custom" },
  ];

  return (
    <div className="shape-selection">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`shape-option ${
            selectedShape === shape.id ? "selected" : ""
          }`}
          onClick={() => onSelectShape(shape.id)}
        >
          <div className="shape-preview">
            {shape.id === "heart" && (
              <svg width="80" height="80" viewBox="0 0 100 100">
                {/* Top left curve */}
                <path
                  d="M50 20 Q35 5, 20 20 Q5 35, 20 55 L50 80 L80 55 Q95 35, 80 20 Q65 5, 50 20 Z"
                  fill="none"
                  stroke="black"
                />
              </svg>
            )}
            {shape.id === "star" && (
              <svg width="80" height="80" viewBox="0 0 100 100">
                <path
                  d="M50 10 L61 39 L92 39 L67 57 L77 87 L50 68 L23 87 L33 57 L8 39 L39 39 Z"
                  fill="none"
                  stroke="black"
                />
              </svg>
            )}
            {shape.id === "butterfly" && (
              <svg width="80" height="80" viewBox="0 0 100 100">
                <path
                  d="M50 15 C40 25, 15 35, 25 50 C15 65, 40 75, 50 85"
                  fill="none"
                  stroke="black"
                />
                <path
                  d="M50 15 C60 25, 85 35, 75 50 C85 65, 60 75, 50 85"
                  fill="none"
                  stroke="black"
                />
                <line x1="50" y1="15" x2="45" y2="5" stroke="black" />
                <line x1="50" y1="15" x2="55" y2="5" stroke="black" />
              </svg>
            )}
            {shape.id === "tree" && (
              <svg width="80" height="80" viewBox="0 0 100 100">
                <rect
                  x="45"
                  y="60"
                  width="10"
                  height="30"
                  fill="none"
                  stroke="black"
                />
                <polygon
                  points="50,10 20,60 80,60"
                  fill="none"
                  stroke="black"
                />
                <polygon
                  points="50,25 25,55 75,55"
                  fill="none"
                  stroke="black"
                />
                <polygon
                  points="50,40 30,60 70,60"
                  fill="none"
                  stroke="black"
                />
              </svg>
            )}
            {shape.id === "dove" && (
              <svg width="80" height="80" viewBox="0 0 100 100">
                <path
                  d="M20 80 C30 70, 40 50, 60 50 C80 50, 90 60, 90 40 C90 20, 70 10, 50 10 C30 10, 10 30, 10 50 C10 70, 20 80, 30 90"
                  fill="none"
                  stroke="black"
                />
                <circle cx="60" cy="30" r="3" fill="black" />
              </svg>
            )}
            {shape.id === "circle" && (
              <svg width="80" height="80" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="black" />
              </svg>
            )}
            {shape.id === "wave" && (
              <svg width="80" height="80" viewBox="0 0 100 100">
                <path
                  d="M10 50 C30 20, 40 80, 60 20 C80 80, 90 50, 95 50"
                  fill="none"
                  stroke="black"
                />
              </svg>
            )}
            {shape.id === "spiral" && (
              <svg width="80" height="80" viewBox="0 0 100 100">
                <path
                  d="M50 50 C60 40, 70 50, 60 60 C50 70, 40 60, 50 50 C70 30, 80 50, 60 70 C40 90, 20 70, 40 50 C60 30, 80 40, 70 70"
                  fill="none"
                  stroke="black"
                />
              </svg>
            )}
            {shape.id === "tag" && (
              <svg width="80" height="80" viewBox="0 0 100 100">
                <path
                  d="M20 20 L80 20 L80 60 L50 80 L20 60 Z"
                  fill="none"
                  stroke="black"
                />
                <circle cx="35" cy="35" r="5" fill="none" stroke="black" />
              </svg>
            )}
            {shape.id === "custom" && (
              <svg width="80" height="80" viewBox="0 0 100 100">
                <rect
                  x="20"
                  y="20"
                  width="60"
                  height="60"
                  fill="none"
                  stroke="black"
                  strokeDasharray="5,5"
                />
                <text x="35" y="55" fontSize="12">
                  Custom
                </text>
              </svg>
            )}
          </div>
          <div>{shape.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ShapeSelector;
