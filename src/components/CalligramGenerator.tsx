import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import ShapeSelector from "./ShapeSelector";
import CalligramPreview from "./CalligramPreview";

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ShapeData {
  id: Shape;
  name: string;
  points: { x: number; y: number }[];
}

// Color theme interface
interface ColorTheme {
  id: string;
  name: string;
  backgroundColor: string;
  textColor: string;
}

const CalligramGenerator: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [selectedShape, setSelectedShape] = useState<Shape>("heart");
  const [fontSize, setFontSize] = useState<number>(16);
  const [fontFamily, setFontFamily] = useState<string>("Georgia");
  const [letterSpacing, setLetterSpacing] = useState<number>(2);
  const [color, setColor] = useState<string>("#000000");
  const [fontWeight, setFontWeight] = useState<string>("normal");
  const [fontStyle, setFontStyle] = useState<string>("normal");
  const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF");
  const [selectedTheme, setSelectedTheme] = useState<string>("default");
  const previewRef = useRef<HTMLDivElement>(null);

  // Define color themes
  const colorThemes: ColorTheme[] = [
    {
      id: "default",
      name: "Default",
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
    },
    {
      id: "dark",
      name: "Dark Mode",
      backgroundColor: "#121212",
      textColor: "#FFFFFF",
    },
    {
      id: "pastel",
      name: "Pastel",
      backgroundColor: "#FAF3F0",
      textColor: "#A367B1",
    },
    {
      id: "vintage",
      name: "Vintage",
      backgroundColor: "#F5EBE0",
      textColor: "#7D5A50",
    },
    {
      id: "ocean",
      name: "Ocean",
      backgroundColor: "#EBF5FB",
      textColor: "#1A5276",
    },
    {
      id: "forest",
      name: "Forest",
      backgroundColor: "#E8F6EF",
      textColor: "#2D6A4F",
    },
    {
      id: "sunset",
      name: "Sunset",
      backgroundColor: "#FAE8E0",
      textColor: "#D35400",
    },
    {
      id: "monochrome",
      name: "Monochrome",
      backgroundColor: "#F2F3F4",
      textColor: "#424949",
    },
    {
      id: "elegant",
      name: "Elegant",
      backgroundColor: "#FAF9F6",
      textColor: "#85929E",
    },
    {
      id: "vibrant",
      name: "Vibrant",
      backgroundColor: "#FFFFFF",
      textColor: "#8E44AD",
    },
  ];

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleShapeSelect = (shape: Shape) => {
    setSelectedShape(shape);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const themeId = e.target.value;
    setSelectedTheme(themeId);

    // Update colors based on theme
    const theme = colorThemes.find((theme) => theme.id === themeId);
    if (theme) {
      setBackgroundColor(theme.backgroundColor);
      setColor(theme.textColor);
    }
  };

  const saveAsImage = async () => {
    if (previewRef.current === null) {
      return;
    }

    try {
      const dataUrl = await toPng(previewRef.current, {
        backgroundColor: backgroundColor,
      });
      saveAs(dataUrl, `calligram-${selectedShape}.png`);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  // Font categories
  const fontCategories = [
    {
      name: "Serif",
      fonts: [
        "Georgia",
        "Times New Roman",
        "Garamond",
        "Baskerville",
        "Palatino",
      ],
    },
    {
      name: "Sans-Serif",
      fonts: ["Arial", "Helvetica", "Verdana", "Trebuchet MS", "Calibri"],
    },
    {
      name: "Monospace",
      fonts: ["Courier New", "Consolas", "Monaco", "Lucida Console"],
    },
    {
      name: "Handwriting",
      fonts: [
        "Brush Script MT",
        "Comic Sans MS",
        "Segoe Script",
        "Satisfy",
        "Dancing Script",
      ],
    },
    {
      name: "Decorative",
      fonts: ["Impact", "Papyrus", "Copperplate", "Luminari", "Chalkduster"],
    },
  ];

  return (
    <div className="calligram-container">
      <div className="input-section">
        <h2>1. Select a Shape</h2>
        <ShapeSelector
          selectedShape={selectedShape}
          onSelectShape={handleShapeSelect}
        />

        <h2>2. Enter Your Text</h2>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your poem or text here..."
        />

        <h2>3. Customize Your Calligram</h2>

        <div className="theme-selector">
          <h3>Choose a Color Theme</h3>
          <select
            value={selectedTheme}
            onChange={handleThemeChange}
            className="theme-dropdown"
          >
            {colorThemes.map((theme) => (
              <option key={theme.id} value={theme.id}>
                {theme.name}
              </option>
            ))}
          </select>

          <div className="theme-colors">
            <div
              className="color-preview"
              style={{ backgroundColor: backgroundColor }}
            >
              <span style={{ color: color }}>Aa</span>
            </div>

            <div className="color-inputs">
              <label>
                Background Color
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                />
              </label>
              <label>
                Text Color
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="settings-panel">
          <label>
            Font Size
            <input
              type="range"
              min="8"
              max="24"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
            />
            {fontSize}px
          </label>

          <label>
            Font Family
            <select
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
            >
              {fontCategories.map((category) => (
                <optgroup key={category.name} label={category.name}>
                  {category.fonts.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>

          <label>
            Font Weight
            <select
              value={fontWeight}
              onChange={(e) => setFontWeight(e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="lighter">Light</option>
            </select>
          </label>

          <label>
            Font Style
            <select
              value={fontStyle}
              onChange={(e) => setFontStyle(e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="italic">Italic</option>
            </select>
          </label>

          <label>
            Letter Spacing
            <input
              type="range"
              min="0"
              max="10"
              value={letterSpacing}
              onChange={(e) => setLetterSpacing(parseInt(e.target.value))}
            />
            {letterSpacing}px
          </label>
        </div>

        <div className="controls">
          <button onClick={saveAsImage} disabled={!text}>
            Save as Image
          </button>
        </div>
      </div>

      <div className="preview-section" style={{ backgroundColor }}>
        <CalligramPreview
          ref={previewRef}
          text={text}
          shape={selectedShape}
          fontSize={fontSize}
          fontFamily={fontFamily}
          letterSpacing={letterSpacing}
          color={color}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          backgroundColor={backgroundColor}
        />
      </div>
    </div>
  );
};

export default CalligramGenerator;
