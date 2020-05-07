import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function micomp(){
  return <p> hola bebis </p>;
}

class componenteclass extends Component{
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
        < componenteclass />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
