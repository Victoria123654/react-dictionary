import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos"


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword)
    let [results, setResults] = useState(null)
    let [loaded, setLoaded] = useState(false)
    let [photos, setPhotos] = useState(null)
    function handleResponse(response) {

        setResults(response.data[0])
    }

    function handleSubmit(event) {
        event.preventDefault()
        search()
    }
    function handlePexelResponse(response) {
        setPhotos(response.data.photos)

    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse);
        let apiKey = "563492ad6f9170000100000114a0522419624fb694d5e583a3a37df6"
        let pexelsApi = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
        axios.get(pexelsApi, { headers: { "Authorization": `Bearer ${apiKey}` } }).then(handlePexelResponse)
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
                <Photos photos={photos} />
            </div>)
    }
    else {
        load()
        return "loading"
    }

}