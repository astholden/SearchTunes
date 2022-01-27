import React, { Component } from 'react';
import Songs from './Songs';


function Display (props) {

    console.log(props)
    const trackInfo = []
    for (let i = 0; i < props.info.length; i++){
        console.log('you might be right', trackInfo)
        trackInfo.push(<Songs
                song={props.info[i]}
            />);
        }
        return (
            <div id='display'>
                {trackInfo}
            </div>
        )


}

export default Display;

