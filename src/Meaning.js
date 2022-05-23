import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <div className="definition">
                            <p>{definition.definition}</p>
                        </div>
                        <div><Example example={definition.example} /></div>
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
                )
            })}
        </div >
    )
}