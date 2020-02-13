import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/header';
import Footer from './layout/footer';
import Project from './pages/Project';
import About from './pages/About';
import Home from './pages/Home';
import Blog from './pages/Blog';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/project" component={Project} />
        <Footer />
      </Router>
    )
  }
}

export default App