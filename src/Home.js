  import React from "react";
  import photographypic from './photography.jpg'
  import productdesign from './productdesign.jpg'
  import spacialdesign from './spacialdesign.png'
  import graphicdesign from './graphicdesign.jpg'
  import { BrowserRouter, Route, Link } from 'react-router-dom'; 
  import Photography from './Photography.js';
  import GraphicDesign from './GraphicDesign.js';
  import SpacialDesign from './SpacialDesign.js';
  import ProductDesign from './ProductDesign.js';
  
  class Home extends React.Component {  
    constructor(props) {
      super(props);
      this.state = {
        mode: "main"
      }
      this.updateState = this.updateState.bind(this);
      this.returnToMain = this.returnToMain.bind(this);
    }
    updateState (ev) {
      const newMode = ev.target.getAttribute("mode");
      this.setState({mode: newMode});
    }
    returnToMain () {
      this.setState({mode: "main"});
    }
    render () {
      return (
        <div>
          {this.state.mode === "main" &&
                <div className="Home">
                <div className ="photography">
                  <Link className="img_description" mode="photography" onClick={this.updateState}>PHOTOGRAPHY</Link>
                  <img src={photographypic} alt="photography" />
                </div>
                <div className ="productdesign">
                  <Link className="img_description" mode="productdesign" onClick={this.updateState}>PRODUCT DESIGN</Link>
                  <img src={productdesign} alt="productdesign" />
                </div>
                <div className ="spacialdesign">
                  <Link className="img_description" mode="spacialdesign" onClick={this.updateState}>SPACIAL DESIGN</Link>
                  <img src={spacialdesign} alt="spacialdesign" />
                </div>
                <div className ="graphicdesign">
                  <Link className="img_description" mode="graphicdesign" onClick={this.updateState}>GRAPHIC DESIGN</Link>
                  <img src={graphicdesign} alt="graphicdesign" />
                </div>
              </div>  
          }
          {this.state.mode === "photography" && 
          <Photography backFunc={this.returnToMain}/>
          }
          {this.state.mode === "productdesign" && 
          <ProductDesign backFunc={this.returnToMain}/>
          }
          {this.state.mode === "spacialdesign" && 
          <SpacialDesign backFunc={this.returnToMain}/>
          }
          {this.state.mode === "graphicdesign" && 
          <GraphicDesign backFunc={this.returnToMain}/>
          }
      </div>
        
          
    )
    }
  }
  export default Home;

  //onMouseOver={e => (e.currentTarget.src = productdesign)} onMouseOut={e => (e.currentTarget.src = photography)}