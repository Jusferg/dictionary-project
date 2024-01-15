import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
    if (props.definitions) {
    return (
        <div className="Results">
            <section>
                <h2>{props.definitions.word}</h2>
                    {props.definitions.phonetics.map(function(phonetics, index) {
                return (
                    <div key="{index}">
                        <Phonetics phonetics={phonetics} />
                    </div>
                 );
                 })}  
            </section>

        {props.definitions.meanings.map(function(meaning, index) {
            return (
            <section key="{index}">
                    <Meaning meaning={meaning} />
            </section>
            );
        })}
        </div>
    );
    } else {
        return null;
    }
        
}