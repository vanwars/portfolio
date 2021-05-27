import React from "react"
import pic from "./aboutPic.png";
 
class About extends React.Component {  

  render () {
    // this.props.getPageFunction("about");
    return (
      <div className="About">
        <div className="MainAbout">
          <div className="AboutText">
            <h2 id="AboutMe">ABOUT ME</h2>
          <p id="AboutMeContent">
          Ayelet Blumovitz is a third-year Design student, crafter, painter, and Pinterest enthusiast. She is studying in the Tulane school of Architecture, with interests in design that range from graphic to interior to product design. With an architecture concentration and music minor, Ayelet hopes to connect her design knowledge to her music education and continue to explore the many different outlets design thinking can reach.          </p>
          </div>
          <div className="AboutPic">
            <img src={pic}></img>
          </div>
          </div>
      </div>
    )
  }
}

export default About;