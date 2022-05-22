import React from "react";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <audio controls>
                <source src={props.phonetic.audio} />
            </audio>
            {props.phonetic.text}
        </div>
    )
}