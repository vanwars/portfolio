import React from "react"

class Resume extends React.Component {  

    render () {
        // this.props.getPageFunction("resume");
        return (
        <div className="About">
            <a href='./Ayelet-Blumovitz-Resume.pdf' id="resumeDownload" download>DOWNLOAD</a>
            <h1>Ayelet Blumovitz</h1>
            <p>Design Student in the Tulane School of Architecture</p>
            <div className = "Education">
            <h3>Education</h3>
            <p>Tulane University Class of 2023</p>
            <p>Major in Design with a concentration in Architecture and a minor in Music</p>
            </div>
            <div className = "RelevantCoursework">
            <h3>Relevant Coursework</h3>
            <p>Design and Creative Thinking</p>
            <p>Design and Making Studio</p>
            <p>Design Studio Core II</p>
            <p>Introduction to Architecture</p>
            <p>Visual Communication and Advocacy</p>
            <p>Art History: Renaissance to Present</p>
            <p>Harmony</p>
            <p>Musicianship Lab</p>
            </div>
        </div>
    )
    }
}
export default Resume;