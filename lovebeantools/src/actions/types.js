//@flow




/*
 * action type
 */
export const ActionType = {
    selectGroup: "a"
};

/*
 * group 类型
 */
export type GroupType = "Date" | "Rate" | "Other"

/*
 * action 类型
 */
export type Action =
      {type: ActionType.selectGroup, group: GroupType}
    | {}
    | {}

