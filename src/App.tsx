import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PokemonHome from "./components/PokemonHome";

function App() {
  return (
    <main id="main">
      <Router>
        <PokemonHome />
      </Router>
    </main>
  );
}

export default App;
