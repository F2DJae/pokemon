
import './App.css';
import {Routes, Route, NavLink, Link} from "react-router-dom";
import PokemonList from './containers/PokemonList';
import Pokemon from './containers/Pokemon';

function App() {
  return (
    
    <div className="App">
      
      <nav>
        <NavLink to="me">Search</NavLink>
      </nav>
      <Routes>
        <Route path="me" element={<PokemonList />} />
        <Route path="/pokemon/" element={<Pokemon />} />
        
    
        </Routes>
    </div>
  );
}

export default App;
