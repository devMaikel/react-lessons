import React from 'react';
import Pokemon from './Pokemon';
import dataImport from '../data/data.js'

class Pokedex extends React.Component {
  render() {
    const data = dataImport;
    return (
      <div className='pokedex'>
        {data.map((e) => <Pokemon key={e.id} pokemons = {e}/>)}
      </div>
    );
  }
}

export default Pokedex;