import React, { Component } from "react";
import { format } from 'date-fns'

function Songs(props) {
    let audio
    let play = false
 
    function playMusic () {
        audio = new Audio(props.song.previewUrl)
        play = !play
        audio.play()
    }

    function pauseMusic () {
        play = !play
        audio.pause()
    }

    return(
        <div id='song-display'>
            <h3>
                Artist Name : 
            </h3>
            <p>
                {props.song.artistName}
            </p>
            <h3>
                Song : 
            </h3>
            <p>
                {props.song.trackName}
            </p>
            <h3>
                Release Date : 
            </h3>
            <p>
                {format (new Date(props.song.releaseDate), 'yyyy-MM-dd')}
            </p>
            <button class="media-button" id="play-music" onClick={playMusic}>
                Play Me!
            </button>
            <button class="media-button" id="pause-music" onClick={pauseMusic}>
                Pause Me!
            </button>

        </div>
    )
}


export default Songs