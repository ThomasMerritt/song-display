import React from "react";
import "../styles/Johmo.css";
import Song from "../components/Song";

function Johmo() {
    return (
        <div className="johmo">
            <div className="johmo-content">
                <div className="johmo-content-left">
                    <div className="johmo-content-gif">

                    </div>

                </div>
                <div className="johmo-content-right">
                    <div className="music-container">
                        <Song />

                    </div>
                    <div className="socials-container">

                    </div>
        
                </div>
            </div>
        </div>
    );
}

export default Johmo;