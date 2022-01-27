import { combineReducers } from 'redux';
import musicReducer from './musicReducer'

const reducers = combineReducers({

    music: musicReducer,
});

export default reducers;