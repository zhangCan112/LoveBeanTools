//@flow

import type {DeleteGrowthRateAction, SetGrowthRateLastValue, SetGrowthRateThisValue, Action, ToolType} from '../actions/types';
import {computeGrowthRate} from "../units";

export type subState = {
    thisValue?: ?string,
    lastValue?: ?string,
    result?: ?string,
}

export type State = {
    [reuseid: string] : subState,
}

const initialState: State = {

};

export default function growthRate(state: State = initialState, action: Action): State {
    switch (action.type) {
        case "setGrowthRateThisValue":
            return setGrowthRateThisValueReducer(state, action);
        case "setGrowthRateLastValue":
            return setGrowthRateLastValueReducer(state, action);
        case "deleteGrowthRate":
            return deleteGrowthRateReducer(state, action);
        default:
            return state;
    }
}

function setGrowthRateThisValueReducer(state: State = initialState, action: SetGrowthRateThisValue): State {
    let growthRate = state[action.reuseid];
    let thisValue = action.thisValue;
    let lastValue = growthRate && growthRate.lastValue;
    let result = null;
    if  (!isNaN(thisValue) && !isNaN(lastValue)) {
        result = computeGrowthRate(Number(thisValue), Number(lastValue));
        if (result != null) {
            result = String((result * 100).toFixed(2)) + '%';
        }
    }
    return {
        ...state,
        [action.reuseid]: {
            ...growthRate,
            thisValue:action.thisValue,
            result: result,
        },
    }
}

function setGrowthRateLastValueReducer(state: State = initialState, action: SetGrowthRateLastValue): State {
    let growthRate = state[action.reuseid];
    let lastValue = action.lastValue;
    let thisValue = growthRate &&  growthRate.thisValue;
    let result = null;
    if  (!isNaN(thisValue) && !isNaN(lastValue)) {
        result = computeGrowthRate(Number(thisValue), Number(lastValue));
        if (result != null) {
            result = String((result * 100).toFixed(2)) + '%';
        }
    }
    return {
        ...state,
        [action.reuseid]: {
            ...growthRate,
            lastValue: action.lastValue,
            result: result,
        },
    }
}



function deleteGrowthRateReducer(state: State = initialState, action: DeleteGrowthRateAction): State {
    let newState = {
        ...state,
    };
    newState = newState.remove(action.reuseid);
    return newState;
}
