import React from 'react';
import Pokedex from './Pokedex';
import { Route, Switch } from 'react-router-dom';
import Page404 from './Page404';
import Home from './Home';


class Content extends React.Component {
  render() {
    return (
      <main className="Content">
        <Switch>
          <Route path="/pokedex" component={ Pokedex } exact />
          <Route path="/" component={ Home } exact />
          <Route path="*" component={ Page404 } />
        </Switch>
      </main>
    );
  }
}

export default Content;