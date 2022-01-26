import React, { Component } from "react";

function Songs(props) {

    


    return(
        <div id='song-display'>
            <p>
                Artist Name : {props.song.artistName}
            </p>
            <p>
                Song : {props.song.trackName}
            </p>
            <p>
                Release Date : {props.song.releaseDate}
            </p>
        </div>
    )
}


export default Songs