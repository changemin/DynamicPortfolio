import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Layouts/header';
import Footer from './Layouts/footer';
import Project from './Pages/Project';
import About from './Pages/About';
import Home from './Pages/Home';
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