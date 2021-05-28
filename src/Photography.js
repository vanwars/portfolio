import React from 'react';
import p1 from './photographypics/photo1.jpeg';
import p2 from './photographypics/photo2.jpeg';
import p3 from './photographypics/photo3.jpeg';
import p4 from './photographypics/photo4.jpeg';
import p5 from './photographypics/photo5.jpeg';
import p6 from './photographypics/photo6.jpeg';
import p7 from './photographypics/photo7.jpeg';

class Photography extends React.Component {  
    
    render () {
      return (
        <div className="picDetails">
          <button className="backToMain" onClick={this.props.backFunc}>Back</button>
          <div>
          <img src={p1}></img>
          <img src={p2}></img>
          <img src={p3}></img>
          <img src={p5}></img>
          <img src={p4}></img>
          <img src={p6}></img>
          <img src={p7}></img>
          </div>
        </div>
      );
    }
  }
  export default Photography;