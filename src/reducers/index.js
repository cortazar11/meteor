import {combineReducers} from 'redux';
import meteorReducer from './meteorReducer';

export default combineReducers({
    meteors: meteorReducer
    
})