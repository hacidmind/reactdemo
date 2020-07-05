import React, { Component } from 'react';
import './App.css';
import Menu from './component/Navbar'

import { BrowserRouter, Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Menu />
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Contact' component={Contact} />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;