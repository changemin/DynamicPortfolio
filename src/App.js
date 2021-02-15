import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Layouts/header';
import Footer from './Layouts/footer';
import Project from './pages/Project';
import About from './pages/About';
import Home from './pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Footer />
      </Router>
    )
  }
}

export default App