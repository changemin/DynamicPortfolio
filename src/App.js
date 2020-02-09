import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import styled from 'styled-components';
import Header from './layout/header';
import MainPage from './layout/mainPage';
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
        <div className = "App">
          <div className = "container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <MainPage />
              </React.Fragment>
            )} />
          </div>
        </div>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/project" component={Project} />
        <Footer />
      </Router>
    )
  }
}

export default App