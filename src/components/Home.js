import React from 'react';
import logo from '../assets/logo.svg'


class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Nesta página salvarei alguns projetos em React JS feitos como exercícios no curso da Trybe.</p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Home;