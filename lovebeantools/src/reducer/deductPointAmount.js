//@flow
//打款原金额
import type {Action, SetActualAmount, SetDeductPoint, SetDeducPointAmount} from '../actions/types';

export type SubState = {
    //打款金额
    actualAmount?: ?string,
    //扣点额度
    deductPoint?: ?string,
}

export type State = {
    [key: number]: SubState
}

const initialState: State = {

};

export default function deducPointAmount(state: State = initialState, action: Action): State {
    switch (action.type) {
        case 'setActualAmount':
            return setActualAmount(action, state);
        case 'setDeductPoint':
            return setDeductPoint(action, state);
        case 'setDeducPointAmount':
            return setDeducPointAmount(action, state);
        default:
            return state;
    }
}

function setActualAmount(action: SetActualAmount, state: State): State {
    let subState = state[action.key];
    if (!subState) return state;
    return {
        ...state,
        [action.key]: {...subState, actualAmount:action.actualAmount}
    }
}

function setDeductPoint(action: SetDeductPoint, state: State ): State {
    let subState = state[action.key];
    if (!subState) return state;
    return {
        ...state,
        [action.key]: {...subState, deductPoint:action.deductPoint}
    }
}
function setDeducPointAmount(action: SetDeducPointAmount, state: State): State {
    let subState = state[action.key];
    if (!subState) return state;
    return {
        ...state,
        [action.key]: {...subState, deductPoint:action.deductPoint, actualAmount:action.actualAmount}
    }
}

