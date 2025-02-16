import React, { useState } from "react";
import "./Section9.css"; 
import "../App.css";
import Web10 from "../assets/web10png.png";

function NextSection() {
    const [openIndex, setOpenIndex] = useState(null); 

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        { id: 1, question: "What is web.ai?", answer: "Web Ai is the next evolution of AI-powered DeFi intelligence—an advanced network of autonomous AI agents designed to analyze, predict, and execute trades faster than any human ever could. Web Ai deciphers market sentiment, tracks on-chain movements, and automates precision trading, giving users an unmatched edge in crypto markets." },
        { id: 2, question: "How does Web Ai improve trading and investing?", answer: "Web Ai doesn’t just track markets—it dominates them. Our AI agents handle everything: instant trade execution, sniper-level precision, whale tracking, liquidity optimization, and security monitoring. With real-time intelligence and automated execution, Web Ai ensures users react before the market moves, not after." },
        { id: 3, question: "Which blockchains does Web Ai support?", answer: "Web Ai operates across 35+ major chains, including Solana, Bitcoin, Ethereum, BSC, Polygon, Arbitrum, Optimism, and other leading ecosystems. Our AI continuously scans cross-chain liquidity, price inefficiencies, and whale movements, ensuring you’re always ahead, no matter the blockchain." },
        { id: 4, question: "Is Web Ai fully autonomous, or do I control it?", answer: "Web Ai gives you full control, with AI precision. Users can set parameters, define strategies, and let AI agents execute at lightning speed, or allow full automation to run 24/7, eliminating human delay and emotions. Whether you want guidance or complete AI-driven execution, Web Ai adapts to your trading style and maximizes your edge." },
        { id: 5, question: "When will Web Ai be live?", answer: "Web Ai goes live just hours before the token launch, making it a fully operational AI-driven DeFi powerhouse from day one. But this is just the beginning—new AI agents, cutting-edge features, and relentless improvements will be constantly deployed to push the boundaries of AI-powered trading and DeFi intelligence.Stay ahead forever." }

    ];

    return (
        <div className="section9" id="faq">
            <img src={Web10} alt="" className="Web10" />
                <div className="showcase-container9" id="custom-position9">
                <div className="gradient-bar9"></div>
                <h2 className="showcase-title9">FAQ</h2>
            </div>
                    <div className="main9__textbox9">
                        <h1 className="text9">Have some questions?</h1>
                        <p className="discription9">
                        Here are the answers to the most popular ones!
                        </p>
                    </div>

                    {}
                    <div className="main__acardeon">
                        {accordionData.map((item, index) => (
                            <div className={`accordion-item ${openIndex === index ? "open" : ""}`}>
                            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                <span>{item.question}</span>
                                <div className={`accordion-icon ${openIndex === index ? "rotate" : ""}`}>&#9660;</div>
                            </div>
                            <div className="accordion-content">
                                <p>{item.answer}</p>
                            </div>
                        </div>

                        ))}

                        <div className="acardeon-discription">
                        <p className="acardeon-discription__text">
    Any other questions? 
    <a href="mailto:webaidefi@outlook.com" className="acardeon-link">
        <strong>Contact us!</strong>
    </a>
</p>

                        </div>
                    </div>
        </div>
    );
}

export default NextSection;