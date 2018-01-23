//@flow




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
export type SetGrowthRateThisValue = {type: "setGrowthRateThisValue", reuseid: string, thisValue: ?string}
export type SetGrowthRateLastValue = {type: "setGrowthRateLastValue", reuseid: string, lastValue: ?string}
export type DeleteGrowthRateAction = {type: "deleteGrowthRate",  reuseid: string}

export type Action =
      SelectGroupAction
    | SelelctToolAction
    | DeleteGrowthRateAction
    | SetGrowthRateThisValue
    | SetGrowthRateLastValue


