import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div>
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p>
                            <strong>Definition:</strong> {definition.definition}
                        </p>
                        <br />

                        <Example example={definition.example} />
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
                )
            })}
        </div >
    )
}