import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Home from './Home.js'; 
import Contact from './Contact.js'; 
import About from './About.js'; 
import Resume from './Resume.js';
import './App.css';

class App extends React.Component {  
  constructor(props) {
      super(props);
      this.state = {
          
      }
  }
  
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="navigation">
          <div className="upperName">
          <Link to="/" className="logo" id="Name">Ayelet Blumovitz</Link>
          </div>
          <div className="NavButtons">
            <Link to="/" className="item">HOME</Link>
            <Link to="/Resume" className="item">RESUME</Link>
            <Link to="/Contact" className="item">CONTACT</Link>
            <Link to="/About" className="item">ABOUT</Link>
          </div>
          </div>
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Resume" component={Resume} />
            <Route path="/About" component={About}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }

  
}
export default App;
