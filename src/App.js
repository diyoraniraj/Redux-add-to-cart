import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Cart from './Components/Cart'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;