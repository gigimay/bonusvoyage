import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Formulaire from './formulaire.js'
import Footer from './footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Formulaire></Formulaire>
        <Footer></Footer>

      </div>
    );
  }
}

export default App;
