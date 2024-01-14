import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
     let [keyword, setKeyword] = useState(""); 
     let [definitions, setDefinitions] = useState(null);
     
     
     function handleResponse(response) {
        console.log(response.data[0]);
        setDefinitions(response.data[0]);
     }

    function search(event) {
        event.preventDefault();
        
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }


    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return <div className="Dictionary">
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />  
        </form>
        <Results definitions={definitions} />
    </div>;
}