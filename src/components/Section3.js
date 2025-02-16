import React from "react";
import "./Section3.css"; 
import "../App.css";
import Web3 from "../assets/Web3.png";
import spider from "../assets/spider.svg";

function NextSection() {
    return (
        <div className="section3" id="webai" >
    <div className="showcase-container2" id="custom-position2">
        <div className="gradient-bar2"></div>
        <h2 className="showcase-title2">Meet web.ai</h2>

    </div> 

    <img src={Web3} alt="" className="Web3" />  
    <img src={spider} alt="" className="spider" /> 
    <div className="container">
        <div className="section3-title">
            <h1 className="section3-title__text">
            The Intelligence Network for DeFi
            </h1>
        </div>
        <div className="main2">
    <div className="left-tabl">
        <div className="tabl tabl1">
            <div className="main__video3">
            <video autoPlay loop muted playsInline className="video-bg3">
                <source src="/api.mp4" type="video/mp4" />
            </video>
        </div>
        </div>
        <div className="tabl-group">
            <div className="tabl tabl2">
                <div className="tabl2__con">
                    <h2 className="tabl2__text">Web Ai Engine
                    Empowered by the Revolutionary Force of Artificial Intelligence</h2>
                    <p className="tabl2_discription">Analyzing and processing millions of signals in real-time, seamlessly converting the overwhelming noise of the market into clear, actionable insights that drive smarter decisions.</p>
                </div>
            </div>
            <div className="tabl tabl3">
            <div className="main__video6">
            <video autoPlay loop muted playsInline className="video-bg6">
                <source src="/ai3.mp4" type="video/mp4" />
            </video>
        </div>
            </div>
        </div>
    </div>

    <div className="right-tabl">
        <div className="tabl tabl4">
        <div className="main__video4">
            <video autoPlay loop muted playsInline className="video-bg4">
                <source src="/ai2.mp4" type="video/mp4" />
            </video>
        </div>
        </div>
        <div className="tabl tabl5">
        <div className="main__video5">
            <video autoPlay loop muted playsInline className="video-bg5">
                <source src="/ai5.mp4" type="video/mp4" />
            </video>
        </div>
        </div>
    </div>
</div>

    </div>
</div>

    );
}

export default NextSection;