//@flow

import type {Action, ToolType} from '../actions/types';
import {ActionType} from "../actions/types";
import {computeGrowthRate} from "../units";

export type subState = {
    thisValue?: number,
    lastValue?: number,
    result?: number,
}

export type State = {
    [reuseid: string] : subState,
}

const initialState: State = {

};

export default function growthRate(state: State = initialState, action: Action): State {
    if (action.type === ActionType.computeGrowthRate) {
        let result = computeGrowthRate(action.thisValue, action.lastValue);
        return {
            ...state,
            [action.reuseid]: {
                thisValue:action.thisValue,
                lastValue:action.lastValue,
                result: result,
            },
        }
    }
    return state;
}

//缺少一个移除reuseid的逻辑，想尽量复用