//@flow
//返点省钱
import type {Action, AddDeducPointAmount, DeleteDeducPointAmount, ComputeDeductPointSaveAmount} from '../actions/types';
import {computeDeductPointSaveAmout} from '../units';

export type State = {
    curuuid: number,
    keys: number[],
    ruleDeducePoint?: ?number,
    saveAmount?: ?number,
}

const initialState = {
    curuuid: 0,
    keys: [],
};

export default function deductPointSaveAmount(state: State = initialState,action: Action): State {
    switch (action.type) {
        case 'addDeducPointAmount':
            return addDeducPointAmount(action, state);
        case 'deleteDeducPointAmount':
            return deleteDeducPointAmount(action, state);
        case 'computeDeductPointSaveAmount':
            return computeDeductPointSaveAmount(action, state);
        default:
            return state;
    }
}

function addDeducPointAmount(action: AddDeducPointAmount, state: State): State {
    let uuid = state.curuuid;
    let keys = state.keys;
    uuid++;
    return {
        curuuid: uuid,
        keys: keys.concat(uuid),
    }
}

function deleteDeducPointAmount(action: DeleteDeducPointAmount, state: State): State {
    let keys = state.keys;
    return {
        ...state,
        keys: keys.filter(key => key !== action.key)
    }
}

function computeDeductPointSaveAmount(action: ComputeDeductPointSaveAmount, state: State): State {
    return state;
}