//@flow
import type {SubState as DeductPointAmountItem}  from '../reducer/deductPointAmount';


/*
 * group 类型
 */
export type GroupType = "Date" | "Rate" | "Other";

/*
 * tool 类型
 */
export type ToolType = "DateDistance" | "CalculateOneDay" | "OnYearOnYearBasisRatio" | "LinkRelativeRatio" | "ISaveMoneyFromMT";


/*
 * action 类型
 */

export type SelelctToolAction = {type: "selelctTool", tool: ToolType}
export type SelectGroupAction = {type: "selectGroup" , group: GroupType}
//growthRate
export type SetGrowthRateThisValue = {type: "setGrowthRateThisValue", reuseid: string, thisValue: ?string}
export type SetGrowthRateLastValue = {type: "setGrowthRateLastValue", reuseid: string, lastValue: ?string}
export type DeleteGrowthRateAction = {type: "deleteGrowthRate",  reuseid: string}
//deductPointAmount
export type SetDeductPoint = {type: "setDeductPoint", key: number, deductPoint: ?string}
export type SetActualAmount = {type: "setActualAmount", key: number, actualAmount: ?string}
export type SetDeducPointAmount = {type: "setDeducPointAmount", key: number, deductPoint: ?string, actualAmount: ?string}
export type AddDeducPointAmount = {type: "addDeducPointAmount"}
export type DeleteDeducPointAmount = {type: "deleteDeducPointAmount", key: number}
//deductPointSaveAmount
export type ComputeDeductPointSaveAmount = {type: "computeDeductPointSaveAmount", details: DeductPointAmountItem[]}

export type Action =
      SelectGroupAction
    | SelelctToolAction
    | DeleteGrowthRateAction
    | SetGrowthRateThisValue
    | SetGrowthRateLastValue
    | SetDeductPoint
    | SetActualAmount
    | ComputeDeductPointSaveAmount
    | AddDeducPointAmount
    | DeleteDeducPointAmount
    | SetDeducPointAmount



export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
