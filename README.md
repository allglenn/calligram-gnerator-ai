# Calligram Generator

A web application for creating beautiful calligrams - poems, phrases, or words arranged in a way that creates a visual image. Inspired by Guillaume Apollinaire's innovative calligrams from his collection "Calligrammes: Poems of Peace and War (1913-1916)".

## Features

- Select from multiple shape templates (heart, dove, circle, wave, spiral, tag, or custom)
- Enter your own text or poem
- Extensive font customization:
  - Multiple font families (including serif, sans-serif, monospace, handwriting, and decorative fonts)
  - Font styles (normal, italic)
  - Font weights (normal, bold, light)
  - Font size and letter spacing
  - Text color
- Color themes for background and text
- Export your calligram as an image

## Screenshots

![Calligram Generator Interface](./Screenshot%202025-03-22%20at%2019.27.13.png)
*The calligram generator interface showing the shape selection, text input, and customization options.*

![Star Calligram Example](./Screenshot%202025-03-22%20at%2019.27.23.png)
*Example of a star-shaped calligram with French text.*

## What is a Calligram?

A calligram is a poem, phrase, or word in which the text is arranged in a way that creates a visual image. The image created by the words illustrates the poem's theme or subject. Guillaume Apollinaire, a French poet, is particularly famous for his calligrams, which he published in his collection Calligrammes: Poems of Peace and War (1913-1916).

Apollinaire's calligrams are innovative and experimental, blending poetry and visual art. They often reflect themes of modernity, war, love, and the fragmentation of experience.

## How to Use

1. Select a shape for your calligram
2. Enter your text or poem
3. Customize the appearance using the controls (font family, size, style, weight, and color)
4. Choose a color theme or customize your own colors
5. Save your creation as an image

## Available Shapes

- **Heart**: Perfect for love poems or romantic messages
- **Star**: Ideal for celestial themes, aspirations, or guidance
- **Butterfly**: Great for poems about transformation, beauty, or freedom
- **Dove**: Ideal for peace-themed texts, as in Apollinaire's "La Colombe Poignardée et le Jet d'Eau" (The Stabbed Dove and the Fountain)
- **Tree**: Perfect for poems about growth, nature, or life
- **Circle**: Create circular texts reminiscent of eternal themes
- **Wave**: Arrange text in a wave pattern, similar to Apollinaire's "Il Pleut" (It's Raining)
- **Spiral**: Create spiral-shaped poems with words flowing inward or outward
- **Tag**: Create tag or label-shaped calligrams, perfect for naming or identification themes
- **Custom**: Arrange text in a simple rectangular outline

## Font Families

- **Serif fonts**: Georgia, Times New Roman, Garamond, Baskerville, Palatino
- **Sans-serif fonts**: Arial, Helvetica, Verdana, Trebuchet MS, Calibri
- **Monospace fonts**: Courier New, Consolas, Monaco, Lucida Console
- **Handwriting fonts**: Brush Script MT, Comic Sans MS, Segoe Script, Satisfy, Dancing Script
- **Decorative fonts**: Impact, Papyrus, Copperplate, Luminari, Chalkduster

## Color Themes

Choose from a variety of predefined color themes:
- Default: Classic black on white
- Dark Mode: White text on dark background
- Pastel: Soft pastel colors
- Vintage: Warm, aged tones
- Ocean: Cool blue tones
- Forest: Natural green tones
- Sunset: Warm orange and yellow tones
- Monochrome: Grayscale palette
- Elegant: Subtle sophisticated colors
- Vibrant: Bright, bold colors

## AI Integration for Custom Shapes

The Calligram Generator can be extended with AI capabilities to generate custom shapes based on the semantic meaning of your text. Here's how you could implement this feature:

### Proposed AI Integration

1. **Text Analysis**:
   - Implement natural language processing to analyze the main themes, emotions, and imagery in the input text
   - Extract key concepts and associated visual metaphors
   - Identify emotional tone and appropriate visual representation

2. **Shape Generation**:
   - Use a generative AI model to create custom shapes that match the extracted themes
   - Train models on datasets connecting textual concepts with visual representations
   - Implement vector graphic generation for smooth, scalable shapes

3. **Semantic Mapping**:
   - Create a system that maps semantic fields to visual patterns
   - For example, "love" → heart variations, "freedom" → bird/wing shapes, "growth" → plant/tree forms
   - Use embedding models to find relationships between words and shapes

4. **Implementation Options**:
   - Frontend integration with APIs like OpenAI's GPT for text analysis
   - SVG path generation using machine learning models
   - Integration with image generation models (Stable Diffusion, DALL-E) for shape outline extraction
   - Client-side processing for privacy and reduced latency

5. **User Experience**:
   - Add an "AI Suggest" button that generates shape ideas based on text
   - Provide options for users to refine or adjust AI-generated shapes
   - Allow saving and sharing of custom AI-generated shapes

This AI integration would take the creative potential of calligrams to a new level, allowing the visual form to be automatically derived from the meaning of the text itself—truly uniting form and content in the spirit of Apollinaire's groundbreaking work.

## Technologies Used

- React
- TypeScript
- HTML-to-Image (for exporting calligrams)
- FileSaver (for downloading images)

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Build for production
npm run build
```

## Example Calligrams by Apollinaire

- "La Colombe Poignardée et le Jet d'Eau" (The Stabbed Dove and the Fountain)
- "Il Pleut" (It's Raining)
- "La Cravate et la Montre" (The Tie and the Watch)
- "Coeur, Couronne et Miroir" (Heart, Crown, and Mirror)
