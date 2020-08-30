import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Home from './Home'
import Blog from './Blog'
import About from './About'
import Projects from './Projects'
import Weather from './Weather'

function App() {
  const projects = [
    { name: "Demon Killa", link:"https://michaudsr.github.io/Project_1/"},
    "https://tutortech.herokuapp.com/",
    "https://github.com/Michaudsr/tik-tak-toe"

  ]
  return (
    <Router>
    <div className="App">
     <nav>
     <Link to="/">Home</Link>{' '}
     <Link to="/blog">Blog</Link>{' '}
     <Link to="/about">About me</Link>{' '}
     <Link to="/projects">Projects</Link>{' '}
     <Link to="/weather">Weather</Link>{' '}
     </nav>
     <Route exact path="/" component={Home} />
     <Route exact path="/blog" component={Blog} />
     <Route exact path="/about" component={About} />
     <Route exact path="/projects" render={() => <Projects projects={projects} />} />
     <Route exact path="/weather" component={Weather} />
    </div>
    </Router>
  );
}

export default App;
