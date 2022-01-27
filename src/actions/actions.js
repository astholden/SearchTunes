import * as types from '../constant/actionTypes'
import fetch from 'node-fetch'
import reducers from '../reducers/index'

const populate = async (data, dispatch) => {
    
    await dispatch({
        type: types.GET_MUSIC,
        payload: data
    })
}

export const getMusic = (value) => (dispatch, getState) => {
    const word = getState().music.value
    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({keyword : word})   
        })
        .then((res) => res.json())
        .then((res) => {populate(res, dispatch)})
        .then(() => {
            dispatch({
                type: types.SET_SEARCHED,
                payload: true
            })
        })
        
}

export const setKeywordActionCreator = value => ({
    type: types.SET_KEYWORD,
    payload: value
})

// export const switchPlayActionCretor = boolean => ({
//     type: types.SWITCH_PLAY,
//     payload: boolean
// })


