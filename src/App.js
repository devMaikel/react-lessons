import './App.css';
import Pokedex from './components/Pokedex.js';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <h1>Pokedex Feroz</h1>
      <Search />
      <Pokedex />
    </div>
  );
}

export default App;
