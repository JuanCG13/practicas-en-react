import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

var nombre = 'Juan Jesus Cubells'

function A(){
  return <p> hola {nombre} eres beutiful</p>;
}
function B(){
  return <p> hola bebis </p>;
}
function C(){
  return <p> hola bebis </p>;
}

class Componenteclass extends Component{
  render(){
    return <p> hola mundo</p>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        < A />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
