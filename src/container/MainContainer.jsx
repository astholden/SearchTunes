import React from 'react';
import { connect } from 'react-redux';

import MusicEntryCreater from '../components/MusicEntryCreater.jsx'
import Display from '../components/Display.jsx';

import * as actions from '../actions/actions'

const mapStateToProps = state => ({
    searchInfo: state.music.searchInfo,
    url: state.music.url,
    searched: state.music.searched,
    value: state.music.value,
})

const mapDispatchToProps = dispatch => ({
    getMusic: (value) => dispatch(actions.getMusic(value)),
    setKeyword: (value) => dispatch(actions.setKeywordActionCreator(value)),
})


const MainContainer = props => (

    <div id='main'>
        <h1>Testing the React App</h1>
        <MusicEntryCreater 
            getMusic={props.getMusic}
            setKeyword={props.setKeyword}
        />
        {props.searched && 
        <Display 
        info={props.searchInfo}
        play={props.play}
        />}
    </div>
    
)


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);