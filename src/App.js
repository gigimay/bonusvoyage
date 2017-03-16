import React, { Component } from 'react';
// import logo from './logo.svg';
import ScrollUpButton from "react-scroll-up-button";
import './App.css';
import Formulaire from './formulaire.js'
import Footer from './footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Formulaire></Formulaire>
        <Footer></Footer>
        <div className="ScrollButton">
          <ScrollUpButton ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled">
            <svg viewBox="0 0 32 32">
                <path class="path1" d="M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z">
                </path>
              </svg>
          </ScrollUpButton>
      </div>
      </div>
    );
  }
}

export default App;
