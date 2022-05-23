import Dictionary from "./Dictionary.js"
import './App.css';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <Dictionary defaultKeyword="dictionary" />
      </header>
      <footer>
        coded by Viktoriia K
      </footer>
    </div>
  );
}

export default App;
