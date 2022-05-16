import React from "react";

export default function Meaning(props) {
    console.log(props)
    return (
        <div>
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div>
                        <p>{definition.definition}</p>
                        <em><p>{definition.example}</p></em>
                    </div>
                )
            })}
        </div >
    )
}