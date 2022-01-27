import React from "react";
import { format } from 'date-fns'




const Songs = props => {

    const preview = props.audio
    const play = props.play
        
    const playMusic = () => {
        console.log(preview)
        preview.play()
    }

    const pauseMusic = () => {
        preview.pause()
    }
        
        
        return (
        
        <div id='song-display'>
            <h3>
                Artist Name : 
            </h3>
            <p>
                {props.artistName}
            </p>
            <h3>
                Song : 
            </h3>
            <p>
                {props.trackName}
            </p>
            <h3>
                Release Date : 
            </h3>
            <p>
                {format (new Date(props.releaseDate), 'yyyy-MM-dd')}
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

// let audio
// let play = false

// function playMusic () {
//     audio = new Audio(props.song.previewUrl)
//     play = !play
//     audio.play()
// }

// function pauseMusic () {
//     play = !play
//     audio.pause()
// }