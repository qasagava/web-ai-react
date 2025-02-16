import React from "react";
import "./Section6.css"; 
import "../App.css";
import Web7 from "../assets/Web7.png";
import Solana from "../assets/solana.png";
import BTC from "../assets/btc.png";
import EVM from "../assets/evm.png";

function NextSection() {
    return (
        <div className="section6">
            <img src={Web7} alt="" className="Web7" />
            <div className="showcase-container6" id="custom-position6">
                <div className="gradient-bar6"></div>
                <h2 className="showcase-title6">Instant Cross-Chain Liquidity</h2>
                <div className="container6">
                    <div className="main6">
                        <h2 className="text6">The Future of Cross-Chain Trading</h2>
                        <p>Effortlessly swap assets across Solana, Bitcoin, and EVM chains with AI-driven intelligence and one master wallet—precision execution in every trade.</p>
                        <button className="main-button6">Wallet balance across all chains: $57,489</button>
                        <p className="buttondiscription">
                        Easy trade with one tap.
                        </p>
                        <div className="bar">
                            <div className="bar__tabl">
                            <div className="showcase-container6-2" id="custom-position6-2">
                                <div className="gradient-bar6-2"></div>
                                 <h2 className="showcase-title6-2">We support</h2>
                            </div>
                            <img src={Solana} alt="" className="sol" />
                            <img src={BTC} alt="" className="btc" />
                            <img src={EVM} alt="" className="evm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NextSection;