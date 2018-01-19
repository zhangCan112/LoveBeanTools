//@flow

import type {Action, ToolType} from '../actions/types';
import {ActionType} from "../actions/types";

export type State = {
    tooltype: ?ToolType,
}

const initialState: State = {
    tooltype: null,
};

export default function tool(state: State = initialState, action: Action): State {
    if (action.type === ActionType.selelctTool) {
        let tool = action.tool;
        return {
            ...state,
            tooltype: tool,
        }
    }
    return state;
}