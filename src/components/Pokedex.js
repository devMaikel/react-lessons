import React from 'react';
import Pokemon from './Pokemon';
import dataImport from '../data/data.js'
import Search from './Search';

class Pokedex extends React.Component {
  render() {
    const data = dataImport;
    return (
      <div>
        <h1>Pokedex Feroz</h1>
        <Search />
        <div className='pokedex'>
          {data.map((e) => <Pokemon key={e.id} pokemons = {e}/>)}
        </div>
      </div>
    );
  }
}

export default Pokedex;