  import React from "react";
  import photographypic from './photography.jpg'
  import productdesign from './productdesign.jpg'
  import spacialdesign from './spacialdesign.png'
  import graphicdesign from './graphicdesign.jpg'
  import tooldesign from './tooldesign.png'
  import cubeproject from './cubeproject.png'
  import pedestalproject from './pedestalproject.png'
  import infodesign from './infodesign.png'
  import { BrowserRouter, Route, Link } from 'react-router-dom'; 
  import Photography from './Photography.js';
  import GraphicDesign from './GraphicDesign.js';
  import SpacialDesign from './SpacialDesign.js';
  import ProductDesign from './ProductDesign.js';
  import InfoDesign from './InfoDesign.js';
  
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
                  <Link className="img_description" mode="productdesign" onClick={this.updateState}>SHOE PROJECT</Link>
                  <img src={productdesign} alt="productdesign" />
                </div>
                <div className ="spacialdesign">
                  <Link className="img_description" mode="spacialdesign" onClick={this.updateState}>EXHIBITION DESIGN</Link>
                  <img src={spacialdesign} alt="spacialdesign" />
                </div>
                <div className ="graphicdesign">
                  <Link className="img_description" mode="graphicdesign" onClick={this.updateState}>CAMPAIGN REDESIGN</Link>
                  <img src={graphicdesign} alt="graphicdesign" />
                </div>
                <div className ="cubeproject">
                  <Link className="img_description" mode="cubeproject" onClick={this.updateState}>CUBE PROJECT</Link>
                  <img src={cubeproject} alt="cubeproject" />
                </div>
                <div className ="tooldesign">
                  <Link className="img_description" mode="tooldesign" onClick={this.updateState}>TOOL DESIGN</Link>
                  <img src={tooldesign} alt="tooldesign" />
                </div>
                <div className ="pedestalproject">
                  <Link className="img_description" mode="pedestalproject" onClick={this.updateState}>PEDESTAL PROJECT</Link>
                  <img src={pedestalproject} alt="pedestalproject" />
                </div>
                <div className ="infodesign" >
                  <Link className="img_description" mode="infodesign" onClick={this.updateState}>INFOGRAPHIC DESIGN</Link>
                  <img src={infodesign} alt="infodesign" />
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
          {this.state.mode === "infodesign" && 
          <InfoDesign backFunc={this.returnToMain}/>
          }
      </div>
        
          
    )
    }
  }
  export default Home;

  //onMouseOver={e => (e.currentTarget.src = productdesign)} onMouseOut={e => (e.currentTarget.src = photography)}