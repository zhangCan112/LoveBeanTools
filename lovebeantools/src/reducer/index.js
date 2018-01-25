//@flow

import {combineReducers} from 'redux';
import tool from './tool';
import growthRate from './growthRate';
import deductPointSaveAmount from './deductPointSaveAmount';
import deductPointAmount from './deductPointAmount';
let reducer = combineReducers({
    tool,
    growthRate,
    deductPointSaveAmount,
    deductPointAmount,
});
export default reducer;