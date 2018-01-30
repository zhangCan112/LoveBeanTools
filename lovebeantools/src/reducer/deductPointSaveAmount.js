//@flow
//返点省钱
import type {Action, AddDeducPointAmount, DeleteDeducPointAmount, ComputeDeductPointSaveAmount, SetRuleDeducePoint} from '../actions/types';
import {computeDeductPointSaveAmout} from '../units';

export type State = {
    curuuid: number,
    keys: number[],
    ruleDeducePoint?: ?string,
    saveAmount?: ?number,
}

const initialState = {
    curuuid: 0,
    keys: [0],
};

export default function deductPointSaveAmount(state: State = initialState,action: Action): State {
    switch (action.type) {
        case 'addDeducPointAmount':
            return addDeducPointAmount(action, state);
        case 'deleteDeducPointAmount':
            return deleteDeducPointAmount(action, state);
        case 'computeDeductPointSaveAmount':
            return computeDeductPointSaveAmountReducer(action, state);
        case 'setRuleDeducePoint':
            return setRuleDeducePoint(action, state);
        default:
            return state;
    }
}

function addDeducPointAmount(action: AddDeducPointAmount, state: State): State {
    let uuid = state.curuuid;
    let keys = state.keys;
    uuid++;
    return {
        ...state,
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

function computeDeductPointSaveAmountReducer(action: ComputeDeductPointSaveAmount, state: State): State {
    let rulePoint = state.ruleDeducePoint;
    let details = action.details.map((item, index) => {
        return [Number(item.actualAmount), Number(item.deductPoint)]
    });
    if (!rulePoint || isNaN(rulePoint)) return state;
    let save = Number(computeDeductPointSaveAmout(Number(rulePoint), details).toFixed(2));
    return {
        ...state,
        saveAmount: save,
    }
}

function setRuleDeducePoint(action: SetRuleDeducePoint, state: State): State {
    return {
        ...state,
        ruleDeducePoint: action.ruleDeducePoint,
    }
}