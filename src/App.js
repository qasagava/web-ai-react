import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NextSection from "./components/Section2";
import NextSection2 from "./components/Section3";
import NextSection3 from "./components/Section4";
import NextSection4 from "./components/Section5";
import NextSection5 from "./components/Section6";
import NextSection6 from "./components/Section7";
import NextSection7 from "./components/Section8";
import NextSection8 from "./components/Section9";
import NextSection9 from "./components/Section10";
import Image from "./assets/Maskgroup.png";
import link1 from "./assets/X2.svg";
import link2 from "./assets/Git2.svg";
import link3 from "./assets/Docs2.svg";
import mobileLogo from "./assets/Logo4.svg";

function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (isMobile) {
        return (
            <div className="mobile-placeholder">
                <img src={mobileLogo} alt="Logo" />
                <p className="mobiledescription">Please switch to the desktop version.</p>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="section" id="home">
                <img src={Image} alt="" className="Image" />
                <div className="container">
                    <div className="main">
                        <h1>Weave the Future of DeFi with AI Precision</h1>
                        <p>Your AI-powered DeFi companion...</p>
                        <button className="main-button">Enter Web Ai</button>
                        <div className="link-icon">
    <a href="https://x.com/WebAiDeFi" target="_blank" rel="noopener noreferrer">
        <img src={link1} alt="x" className="link-icon__img1 transition-transform duration-300 hover:scale-110" />
    </a>
    <a href="https://github.com/webai-defi" target="_blank" rel="noopener noreferrer">
        <img src={link2} alt="github" className="link-icon__img2 transition-transform duration-300 hover:scale-110" />
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={link3} alt="doc" className="link-icon__img3 transition-transform duration-300 hover:scale-110" />
    </a>
</div>

                    </div>
                </div>
            </div>
            <NextSection />
            <NextSection2 />
            <NextSection3 />
            <NextSection4 />
            <NextSection5 />
            <NextSection6 />
            <NextSection7 />
            <NextSection8 />
            <NextSection9 />
        </>
    );
}

export default App;
