//@flow

import {combineReducers} from 'redux';
import tool from './tool';
import growthRate from './growthRate';
let reducer = combineReducers({
    tool,
    growthRate,
});
export default reducer;