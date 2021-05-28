import React from 'react';
import content from './infocontent.png';

class InfoDesign extends React.Component {  
    
    render () {
    window.scrollTo(0, 0)
    return (
        <div className="infoDesignDetails">
            <i className="backToMain" id="arrow" onClick={this.props.backFunc}></i>
          {/* <button className="backToMain" onClick={this.props.backFunc}>BACK</button> */}
          <div>
            <img id="infographic" src={content}></img>
          </div>
        </div>
        
      );
    }
  }
export default InfoDesign;