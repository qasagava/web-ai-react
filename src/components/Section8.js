import React from "react";
import "./Section8.css"; 
import "../App.css";
import Icon1 from "../assets/Icon1.svg";
import Icon2 from "../assets/Icon2.svg";
import Icon3 from "../assets/Icon3.svg";
import Icon4 from "../assets/Icon4.svg";
import Web9 from "../assets/web9.png";

function NextSection() {
    return (
        <div className="section8" >
            <img src={Web9} alt="icon8" className="Web9" />
                    <div className="showcase-container8" id="custom-position8">
                 <div className="gradient-bar8"></div>
                <h2 className="showcase-title8">Future</h2>
            </div>
                        <div className="main8__textbox8">
                            <h2 className="text8">Upcoming Agents</h2>
                            <p className="discription8">Effortlessly swap assets across Solana, Bitcoin, and EVM chains with AI-driven intelligence and one master wallet—precision execution in every trade.</p>
                        </div>
                        <div className="main-card8">
    <div className="card8">
    <div className="card__header8">
        <img src={Icon1} alt="icon8" className="card__icon8" />
        <div className="card__content8">
            <h3 className="card__title8">Liquidity</h3>
            <p className="card__subtitle8">AI-driven pool optimization, yield maximization.</p>
        </div>
    </div>
        <p className="card__description8">
            The Liquidity Agent scans real-time market data across 34+ chains, detecting the highest-yield pools and optimal staking opportunities. With instant capital flow analysis and deep liquidity tracking, it ensures your assets are always in the most profitable positions before trends shift. No wasted liquidity, no missed gains.
        </p>
    </div>

    <div className="card8">
    <div className="card__header8">
        <img src={Icon2} alt="icon8" className="card__icon8" />
        <div className="card__content8">
            <h3 className="card__title8">Arbitrage</h3>
            <p className="card__subtitle8">Zero-risk, AI-powered cross-chain arbitrage.</p>
        </div>
    </div>
        <p className="card__description8">
        The Arbitrage Agent hunts for pricing inefficiencies across multiple networks, instantly executing risk-free, high-speed trades. With sub-100ms execution speeds and real-time DEX order book analysis, it captures price gaps before human traders react, securing guaranteed profits without exposure to volatility.
        </p>
    </div>

    <div className="card8">
    <div className="card__header8">
        <img src={Icon3} alt="icon" className="card__icon8" />
        <div className="card__content8">
            <h3 className="card__title8">Security</h3>
            <p className="card__subtitle8">AI-driven smart contract security, real-time fraud detection.</p>
        </div>
        </div>
        <p className="card__description8">
        The Security Agent continuously monitors newly deployed contracts, liquidity shifts, and wallet movements, instantly flagging rug-pulls, honeypots, and hidden exploits before they drain liquidity. With on-chain forensic analysis and historical attack pattern recognition, it protects your assets before the damage is done.
        </p>
    </div>

    <div className="card8">
    <div className="card__header8">
        <img src={Icon4} alt="icon" className="card__icon8" />
        <div className="card__content8">
            <h3 className="card__title8">Automation</h3>
            <p className="card__subtitle8">Precision AI execution—trade at machine speed.</p>
        </div>
        </div>
        <p className="card__description8">
        The Automation Agent eliminates human delay, executing trades and portfolio adjustments at the exact moment conditions are met. Powered by predictive analytics, high-frequency trading strategies, and real-time market tracking, it removes emotional trading and maximizes efficiency—delivering perfect execution, every time.
        </p>
    </div>
</div>

            </div>
    );
}

export default NextSection;