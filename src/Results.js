import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
    if (props.definitions) {
    return <div className="Results">
        <h2>{props.definitions.word}</h2>
        {props.definitions.meanings.map(function(meaning, index) {
            return <div key="{index}">
                <Meaning meaning={meaning} />
            </div>;
        })}
           </div>;
    } else {
        return null;
    }
        
}