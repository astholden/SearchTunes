import React from "react";



const MusicEntryCreater = props => {

    const handler = (e) => {
        e.preventDefault();
        props.setKeyword(e.target.value)
    }


    return (
        <div id="user-input">
                <input id="search-field" onChange={handler}></input>
                <button id="search" type="submit" onClick={props.getMusic}>Search</button>
        </div>
    )

}

export default MusicEntryCreater;



















