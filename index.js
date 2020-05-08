import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

var nombre = 'Juan Jesus Cubells'

function A(props){
  return <p> hola {props.nombre} eres beutiful {props.children}</p>;
  console.log(props.children)

}
function B(props){
  return <p> hola bebis {props.nombre} </p>;
}
function C(props){
  return <p> hola bebis {props.nombre} </p>;
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
    var nombre = 'Sabrina Carpenter';
    return (
      <div>
        < A nombre={nombre}> 
          <p> hola muchacho</p>
        </A>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
