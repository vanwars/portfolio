import React from 'react';
import p1 from './prodpics/photo1.png';
import p2 from './prodpics/photo2.png';
import p3 from './prodpics/photo3.png';
import p4 from './prodpics/photo4.png';
import p5 from './prodpics/photo5.png';

class ProductDesign extends React.Component {  
    
    render () {
      return (
        <div className="picDetails">
          <button className="backToMain" onClick={this.props.backFunc}>BACK</button>
          <div>
            <img src={p1}></img>
            <img src={p2}></img>
            <img src={p3}></img>
            <img src={p4}></img>
            <img src={p5}></img>
          </div>
        </div>
        
      );
    }
  
    
  }
  export default ProductDesign;