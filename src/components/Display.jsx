import React from 'react';
import Songs from './Songs.jsx';


const Display = props => {


    const songList = props.info;

    const songs = songList.map(song =>
      <Songs
        artistName={song.artistName}
        trackName={song.trackName}
        releaseDate={song.releaseDate}
        audio={new Audio(song.previewUrl)}
        play={props.play}
        switchPlay={props.switchPlay}
      />);

     return (
    <div id='display'>
    {songs}
    </div>
    )
}







export default Display;
