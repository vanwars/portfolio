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
          clicked_nav: "home"
      }
      this.getPage = this.getPage.bind(this);
  }
  getPage(page) {  
      this.setState({
        clicked_nav: page
      });
      console.log(this.state.clicked_nav);
  }

  render () {
    console.log(this.getPage);
    return (
      <BrowserRouter>
        <div className="App">
          <div className="navigation">
          <div className="Name">
          <Link to="/" className="item" id="Name">Ayelet Blumovitz</Link>
          </div>
          <div className="NavButtons">
            <Link to="/" className="item">HOME</Link>
            <Link to="/Resume" className="item">RESUME</Link>
            <Link to="/Contact" className="item">CONTACT</Link>
            <Link to="/About" className="item">ABOUT</Link>
          </div>
          </div>
          <div className="main">
            <Route exact path="/" component={Home} getPageFunction={this.getPage}/>
            <Route path="/Contact" component={Contact} getPageFunction={this.getPage}/>
            <Route path="/Resume" component={Resume} getPageFunction={this.getPage}/>
            <Route path="/About" component={About} getPageFunction={this.getPage}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }

  
}
export default App;
