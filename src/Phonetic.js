import React from "react";
import "./Phonetics.css"

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <audio controls preload="auto">
                <source src={props.phonetic.audio} />
            </audio>
            <span className="text">{props.phonetic.text}</span>
        </div>
    )
}