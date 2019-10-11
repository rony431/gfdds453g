import React, { Component } from 'react';
import { Router, Route, browserHistory,Link, IndexRoute } from 'react-router';

const Template = (props) => {
  return (
    <div>
      <nav>
          <Link to="/page1">page1</Link>
          <Link to="/page2">page2</Link>
        </nav>
       {props.children} 
    </div>  
  )
}


export class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="page1">Page1</Link>
          <Link to="page2">Page2</Link>
        </nav>
          {this.props.children}
      </div>
    )
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
