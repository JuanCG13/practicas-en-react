import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Componente extends Component {

  constructor(props){
    super(props);

    this.state = {
      contador: 0
    }
  }

  render(){

    return(
      <div>
        <p>{this.state.contador}</p>
        <button onclick="aumentar()"> Presioname </button>
      </div> 
    )
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
       <Componente/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
