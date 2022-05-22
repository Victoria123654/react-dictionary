import React from "react";

export default function Example(props) {
    if (props.example) {
        return (<p><strong>Example:</strong> <em>{props.example}</em></p>);
    }
    else {
        return null;
    }

}