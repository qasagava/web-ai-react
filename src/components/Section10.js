import React from "react";
import "./Section10.css"; 
import "../App.css";
import Web11 from "../assets/web11.png";
import Logo2 from "../assets/Logo4.svg";
import Icon1 from "../assets/X2.svg";
import Icon2 from "../assets/Git2.svg";
import Icon3 from "../assets/Docs2.svg";

function NextSection() {
    return (
        <div className="section10" id="docs">
            <img src={Web11} alt="" className="Web11" />
                    <div className="showcase-container10" id="custom-position10">
                 <div className="gradient-bar10"></div>
                <h2 className="showcase-title10">Docs</h2>
            </div>
                        <div className="main10__textbox10">
                            <h1 className="text10">Unlock the Future of DeFi with Web Ai</h1>
                            <p className="discription10">Comprehensive documentation will be available one day before launch, detailing our AI-driven agents, trading infrastructure, and automation capabilities.</p>
                        </div>
                        <div className="main10__button">
                            <button className="main-button10">Docs Soon...</button>
                        </div>

                        <div className="footer">
                            <div className="footer__logo">
                                 <img src={Logo2} alt="Web AI Logo" className="footer-logo__img" />
                            </div>

                            <div className="footer__icon">
    <a href="https://x.com/WebAiDeFi" target="_blank" rel="noopener noreferrer">
        <img src={Icon1} alt="Icon 1" className="footer-icon__img transition-transform duration-300 hover:scale-110" />
    </a>
    <a href="https://github.com/webai-defi" target="_blank" rel="noopener noreferrer">
        <img src={Icon2} alt="Icon 2" className="footer-icon__img transition-transform duration-300 hover:scale-110" />
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={Icon3} alt="Icon 3" className="footer-icon__img transition-transform duration-300 hover:scale-110" />
    </a>
</div>


                            <div className="footer__text">
                                <p className="Footer__text-text">© 2025 web.ai. All Rights Reserved.</p>
                            </div>
                        </div>
            </div>
    );
}

export default NextSection;