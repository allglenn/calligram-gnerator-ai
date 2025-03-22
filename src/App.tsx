import React from "react";
import "./App.css";
import CalligramGenerator from "./components/CalligramGenerator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calligram Generator</h1>
        <p>
          Create beautiful visual poems in the style of Guillaume Apollinaire
        </p>
      </header>
      <main>
        <CalligramGenerator />
      </main>
      <footer>
        <p>
          Inspired by Guillaume Apollinaire's calligrams from "Calligrammes:
          Poems of Peace and War (1913-1916)"
        </p>
      </footer>
    </div>
  );
}

export default App;
