import React from 'react';
class GraphicDesign extends React.Component {  
    
    render () {
      return (
        <div className="picDetails">
          <button className="backToMain" onClick={this.props.backFunc}>Back</button>
        </div>
      );
    }
  }
  export default GraphicDesign;