import React, { useRef } from "react";
import "./Section5.css";
import "../App.css";
import Web6 from "../assets/web6.png";
import Marquee from "react-fast-marquee";

const cardData = [
    { 
        id: 1, 
        title: "All In Buy", 
        suntitle:"First Time Buy",
        user: "8deJ...XhU6", 
        amount: "$22,731", 
        time: "3 mins ago"
    },
    { 
        id: 2, 
        title: "Sell All Position",
        suntitle:"Sell At Loss",
        user: "73Ln...Cw5B", 
        amount: "$27,803", 
        profit: "$-15,394",
        time: "15 mins ago"
    },
    { 
        id: 3, 
        title: "All In Buy ", 
        suntitle:"Positive DCA",
        user: "DpNV...wD26", 
        amount: "$10,899", 
        time: "21 mins ago"
    },
    { 
        id: 4, 
        title: "Sell All Position",
        suntitle:"Profit Sell",
        user: "DfMx...Xhzj", 
        amount: "$15,311", 
        profit: "$+10,032",
        time: "39 mins ago"
    },

    { 
        id: 5, 
        title: "All In Buy",
        suntitle:"First Time Buy",
        user: "6LCh...n6n7", 
        amount: "$8,779", 
        time: "52 mins ago"
    },

    { 
        id: 6, 
        title: "Major Sell Off", 
        suntitle:"Sell At Loss",
        user: "7VBT...HNnn", 
        amount: "$19,194", 
        profit: "$-10,864",
        time: "75 mins ago"
    },
    
    { 
        id: 7, 
        title: "Low Cap Buy", 
        suntitle:"First Time Buy", 
        user: "7SDs...seHS", 
        amount: "$3,412", 
        time: "108 mins ago"
    },

    { 
        id: 8, 
        title: "Low Cap Buy", 
        suntitle:"Positive DCA", 
        user: "CRVi...tReL", 
        amount: "$2,229", 
        time: "127 mins ago"
    },

    { 
        id: 9, 
        title: "Low Cap Buy",
        suntitle:"First Time Buy",  
        user: "8zFZ...c7Zd", 
        amount: "$26,111", 
        time: "141 mins ago"
    },

    { 
        id: 10, 
        title: "Major Sell Off",
        suntitle:"Take Profit Sell ", 
        user: "7iab...P4CY", 
        amount: "$42,417", 
        profit: "$+25,298",
        time: "172 mins ago"
    },

    
];

const colorMap = {
    1: "#18BC06", 
    2: "#CD0C0C", 
    3: "#18BC06", 
    4: "#CD0C0C", 
    5: "#18BC06", 
    6: "#CD0C0C", 
    7: "#18BC06", 
    8: "#18BC06", 
    9: "#18BC06", 
    10: "#CD0C0C", 
};

const profitColorMap = {
    2: "#CD0C0C", // Красный (убыток)
    4: "#18BC06", // Зеленый (прибыль)
    6: "#CD0C0C", // Красный (убыток)
    10: "#18BC06", // Зеленый (прибыль)
};

const hideProfitForIds = [1, 3, 5, 7, 9]; // ID, у которых нужно скрыть profit
const buyIds = [1, 3, 5, 7, 8, 9]; // ID, у которых "Buy" вместо "Sold"


function NextSection() {
    const videoRef2 = useRef(null);
    let pauseTimeout = null;

    const handleMouseEnter = () => {
        if (videoRef2.current) {
            videoRef2.current.currentTime = 0;
            videoRef2.current.play();

            pauseTimeout = setTimeout(() => {
                if (videoRef2.current) {
                    videoRef2.current.pause();
                }
            }, 500);
        }
    };

    const handleMouseLeave = () => {
        if (videoRef2.current) {
            clearTimeout(pauseTimeout);
            videoRef2.current.play();
        }
    };

    return (
        <div className="section5" id="sol" >
            <div className="showcase-container4" id="custom-position4">
                <div className="gradient-bar4"></div>
                <h2 className="showcase-title4">Features</h2>
            </div>

            <img src={Web6} alt="" className="Web6" />

            <div className="section4-title4">
                <h2 className="section4-title__text4">
                    See Everything. React Instantly. Profit First.
                </h2>
                <p className="description4">
                    Track wallets, execute sniper trades, and decode market sentiment with real-time AI intelligence.
                </p>
            </div>

            {}
            <div className="marquee-wrapper">
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
    {cardData.map((card) => (
        <div key={card.id} className="card">
            <div className="card-time">{card.time}</div>
            <h3>{card.title}</h3>

            {/* Цвет `suntitle` привязан к `id` */}
            <p 
                className="suntitle"
                style={{ color: colorMap[card.id] || "white" }}
            >
                {card.suntitle}
            </p>

            <div className="card-text">
                <p><strong>User:</strong> {card.user}</p>

                {/* Если ID есть в `buyIds`, отображаем "Buy", иначе "Sold" */}
                <p className="sold">
                    <strong>{buyIds.includes(card.id) ? "Buy" : "Sold"}:</strong> {card.amount}
                </p>

                {/* Скрываем `profit`, если ID в `hideProfitForIds`, иначе применяем цвет */}
                {!hideProfitForIds.includes(card.id) && card.profit && (
                    <p 
                        className="profit"
                        style={{ 
                            color: profitColorMap[card.id] || 
                                   (card.profit.includes("-") ? "#CD0C0C" : "#18BC06") 
                        }}
                    >
                        <strong>Profit:</strong> {card.profit}
                    </p>
                )}
            </div>
        </div>
    ))}
</Marquee>

            </div>

            {}
            <div className="tabl-main5">
                {}
                <div className="tabl5 tabl5__left">
                    <div className="main__video7">
                        <video autoPlay loop muted playsInline className="video-bg7">
                            <source src="/snipex.webm" type="video/webm" />
                        </video>
                    </div>
                </div>

                {}
                <div 
                    className="tabl5 tabl5__right"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="main__video7">
                        <video ref={videoRef2} muted playsInline className="video-bg7">
                            <source src="/ai4.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NextSection;