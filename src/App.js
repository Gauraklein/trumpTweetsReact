import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'redux'
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.test}
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    test: state.test

  }
}

function mapDispatchToProps(dispatch) {
  return {
   
  };
 }

 export default connect(mapStateToProps, mapDispatchToProps)(App);
