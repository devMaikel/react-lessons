import React from 'react';
import { NavLink } from 'react-router-dom';


class Sidebar extends React.Component {
  render() {
    return (
      <section className="Sidebar">
        <h4>Projetos</h4>
        <nav>
          <NavLink to="/" activeClassName="selected" exact>Home</NavLink>
          <NavLink to="/pokedex" activeClassName="selected">Pokedex</NavLink>
        </nav>
      </section>
    );
  }
}

export default Sidebar;