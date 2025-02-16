import React, { useState } from "react";
import "./Section7.css"; 
import "../App.css";
import Web8 from "../assets/web8.png";
import Spider7 from "../assets/spider2222.png";
import Spidericon1 from "../assets/Spidericon1.svg";
import Spidericon2 from "../assets/Spidericon2.svg";
import Spidericon3 from "../assets/Spidericon3.svg";
import Spidericon4 from "../assets/Spidericon4.svg";
import Spidericon5 from "../assets/Spidericon5.svg";
import Spidericon6 from "../assets/Spidericon6.svg";

const iconData = [
    { id: "icon1", src: Spidericon1, text: "Trade", description: "Lightning-fast swaps, AI-optimized execution.", details: "Web Ai's Trade Agent leverages real-time order flow analysis, slippage reduction, and deep liquidity routing to execute trades at the best possible price." },
    { id: "icon2", src: Spidericon2, text: "Competence", description: "The backbone of blockchain intelligence.", details: "Web Ai's Competence Agent provides an AI-enhanced knowledge layer for deep on-chain analysis, smart contract tracking, and governance monitoring. It scans, deciphers blockchain data, and automatically detects anomalies—from liquidity shifts to whale accumulations—delivering real-time intelligence that keeps you ahead of the curve.  " },
    { id: "icon3", src: Spidericon3, text: "Supervision", description: "The AI-Powered Market Domination Tool", details: "Real-time whale tracking, liquidity monitoring and smart contract surveillance—Supervision detects high-impact wallet moves, insider accumulations, and potential rug-pulls before they unfold. Enhanced with Sniper execution, instantly auto-buying new contracts from top influencers, projects ca tweets  and private deployments. Trade faster, track smarter, and execute ahead of the market." },
    { id: "icon4", src: Spidericon4, text: "Visualize", description: "On-chain data, decoded into clarity.", details: "Forget raw blockchain logs—Web Ai’s Visualize Agent transforms complex transaction flows, liquidity movements, and token holder activity into clear, real-time graphical insights. Track whale trades, liquidity injections, and smart contract interactions in a visual-first interface designed for fast decision-making."},
    { id: "icon5", src: Spidericon5, text: "Assistant", description: "Your AI-powered portfolio strategist.", details: "The Assistant Agent monitors your win rate, best trades, worst trades, and overall trading efficiency. It detects patterns in your strategy, suggests portfolio optimizations, and provides tailored AI-generated trade reports—helping you minimize losses, maximize gains, and refine execution like a professional trader." },
    { id: "icon6", src: Spidericon6, text: "Analyze", description: "Predict the market before it moves.", details: "Web Ai’s Analyze Agent continuously scans social media, blockchain chatter, and influential traders, using AI-powered sentiment analysis to predict market movements before they happen. Identify upcoming trends, detect FUD cycles, and ride early-stage hype with unparalleled intelligence. Stop reacting—start anticipating." },
];

function NextSection() {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    return (
        <div className="section7" id="agent" >
            <img src={Web8} alt="" className="Web8" />
            <img src={Spider7} alt="" className="spider7" />

            {}

            <div className="showcase-container7" id="custom-position7">
                <div className="gradient-bar7"></div>
                <h2 className="showcase-title7">Showcase</h2>
            </div>
                    <div className="textbox">
                    <h2 className="text7">Try Our Model Today</h2>
                    <p className="discription7">A modular network of interoperable DeFi agents</p>
                    </div>
                    <div className="main7__button">
                        <button className="main-button7">Get Started</button>
                    </div>
                    <div className="img-container">
                {iconData.map((icon) => (
                    <div
                        key={icon.id}
                        className={`imgcon ${icon.position}`}
                        style={{ top: icon.top, left: icon.left }}
                        onMouseEnter={() => setHoveredIcon(icon.id)}
                        onMouseLeave={() => setHoveredIcon(null)}
                    >
                        <img src={icon.src} alt="" className={`spidericon ${hoveredIcon === icon.id ? "active" : ""}`} />
                        {hoveredIcon === icon.id && (
                            <div className={`iconcard ${icon.position}`}>
                                <h2 className="iconcard__title">{icon.text}</h2>
                                <h3 className="iconcard__subtitle">{icon.description}</h3>
                                <p className="iconcard__description">{icon.details}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NextSection;