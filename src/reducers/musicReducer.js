import * as types from '../constant/actionTypes.js';

const initialState = {
        searchInfo:[],
        searched: false,
        play: false,
        audio: "url",
        value : "",
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_KEYWORD:
      return {
        ...state,
        value : action.payload
      };
    
    case types.GET_MUSIC:
      
    return {
        ...state,
        searchInfo: action.payload,
      };
    
    case types.SET_SEARCHED:
      return {
        ...state,
        searched: action.payload,
      };
    
    // case types.SWITCH_PLAY:
    //   return {
    //     ...state,
    //     play: !action.payload,
    //   }


        
        
        
        
        
        
        
    default:
        return state;
  }
}

export default musicReducer;