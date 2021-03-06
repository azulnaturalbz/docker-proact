import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import OtherPage from './OtherPage'
import Fib from './Fib'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
              <Route exact path="/" component={Fib} />
              <Route path="/otherpage" component={OtherPage} />
              <Link to="/">Home</Link>
              <Link to="/otherpage">Other Page</Link>
            </div>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fib Calc React
            </a>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
