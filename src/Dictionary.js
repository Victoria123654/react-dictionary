import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results";
import "./Results.css"


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword)
    let [results, setResults] = useState(null)
    let [loaded, setLoaded] = useState(false)
    function handleResponse(response) {

        setResults(response.data[0])
    }

    function handleSubmit(event) {
        event.preventDefault()
        search()
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse);
    }
    function updateKeyword(event) {
        setKeyword(event.target.value)

    }
    function load() {
        setLoaded(true);
        search()
    }
    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What are you looking for?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={updateKeyword} defaultValue={props.defaultKeyword} />
                    </form>
                </section>
                <Results info={results} />
            </div>)
    }
    else {
        load()
        return "loading"
    }

}