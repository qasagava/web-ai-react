import React from "react";
import "./Section2.css"; 
import "../App.css";
import Web2 from "../assets/web2.png";

function NextSection() {
    return (
        <div className="section2">
            <img src={Web2} alt="" className="Web2" /> 
    <div className="showcase-container" id="custom-position">
        <div className="gradient-bar"></div>
        <h2 className="showcase-title">Showcase</h2>

        <div className="main__video2">
        <video autoPlay loop muted playsInline className="video-bg">
                <source src="/zag.mp4" type="video/mp4" />
            </video>
        </div>
    </div> 

    <div className="container">
        <div className="main"></div>

    </div>
</div>

    );
}

export default NextSection;