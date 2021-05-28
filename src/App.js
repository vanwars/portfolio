import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Home from './Home.js'; 
import Contact from './Contact.js'; 
import About from './About.js'; 
import Resume from './Resume.js';
import './App.css';
import emaillogo from './email-icon.png'
import linkedinlogo from './linkedin-icon.png'
import pinterestlogo from './pinterest-icon.png'

class App extends React.Component {  
  constructor(props) {
      super(props);
      this.state = {
          
      }
      this.goToContact = this.goToContact.bind(this);
  }
  goToContact() {
    window.scrollTo(1000, 1000)
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
            <Link to="/About" className="item">ABOUT</Link>
            <Link className="item" onClick={this.goToContact} >CONTACT</Link>
          </div>
          </div>
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route path="/Resume" component={Resume} />
            <Route path="/About" component={About}/>
            <div className="contact">
              <div className="icons">
              <p id="sec1">CONTACT</p>
              <section id="sec2">
                <img src={emaillogo}></img>
                <p>LinkedIn: https://www.linkedin.com/in/ayeletblumovitz/</p>
              </section>
              <section id="sec3">
                <img src={linkedinlogo}></img>
                <p>Email: ayelet.blumovitz@gmail.com</p>
              </section>
              <section id="sec4">
                <img src={pinterestlogo}></img>
                <p>LinkedIn: https://www.linkedin.com/in/ayeletblumovitz/</p>
              </section>
              </div>
              <div className="contactForm">
              <p>SEND ME A MESSAGE</p>
              <div className="formInputs">
              <input type="text" className="form" value="Name" /> 
              {/* onChange={this.onNameChange.bind(this)} */}
              <input type="text" className="form" value="Email" /> 
              <input type="text" className="form" value="Subject" /> 
              <input type="text" className="form" value="Message" /> 
              </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }

  
}
export default App;
