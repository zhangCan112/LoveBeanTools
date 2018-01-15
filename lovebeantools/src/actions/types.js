//@flow




/*
 * group 类型
 */
export type GroupType = "Date" | "Rate" | "Other";

/*
 * tool 类型
 */
export type ToolType = "DateDistance" | "CalculateOneDay" | "OnYearOnYearBasisRatio" | "LinkRelativeRatio";


/*
 * actionType
 */
export const ActionType = {
    selectGroup: "selectGroup",
    selelctTool: "selelctTool",
};

/*
 * action 类型
 */
export type Action =
      {type: ActionType.selectGroup, group: GroupType}
    | {type: ActionType.selelctTool, tool: ToolType}

