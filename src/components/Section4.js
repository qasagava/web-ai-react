import React from "react";
import "./Section4.css"; 
import "../App.css";
import Web4 from "../assets/Framee.png";
import tab1 from "../assets/Frame70.svg";

import Web5 from "../assets/web5.png";

function NextSection() {
    return (
        <div className="section4">
            <img src={Web4} alt="" className="Web4" /> 
            <img src={Web5} alt="" className="Web5" /> 
            <img src={tab1} alt="" className="tab1" /> 

    <div className="showcase-container44" id="custom-position44">
        <div className="gradient-bar44"></div>
        <h2 className="showcase-title44">Metrics</h2>
    </div> 

        <div className="section3-title3">
            <h2 className="section3-title__text3">
            Market Intellegence Redifined
            </h2>
            <p className="description">Metric at glance</p>
        </div>

        <div className="toptext">
                <h2 className="toptext__text">98.74%</h2>
                <p className="descriptiontop">mapping
                accuracy</p>
            </div>
        <div className="lefttext">
                <h2 className="lefttext__text">34+</h2>
                <p className="descriptionleft">supported chains</p>
            </div>

            <div className="righttext">
                <h2 className="righttext__text">&gt;10 mins</h2>
                <p className="descriptionright">event processing</p>
            </div>

            <div className="downtext">
                <h2 className="downtext__text">10,000+</h2>
                <p className="descriptiondown">data source</p>
            </div>
        <div className="main2">

        </div>
</div>

    );
}

export default NextSection;