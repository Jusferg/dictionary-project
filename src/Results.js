import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
    if (props.definitions) {
    return (
        <div className="Results">
            <h2>{props.definitions.word}</h2>
        {props.definitions.phonetics.map(function(phonetics, index) {
            return (
            <div key="{index}">
                    <Phonetics phonetics={phonetics} />
            </div>
            );
            })}  

        {props.definitions.meanings.map(function(meaning, index) {
            return (
            <div key="{index}">
                    <Meaning meaning={meaning} />
            </div>
            );
        })}
        </div>
    );
    } else {
        return null;
    }
        
}