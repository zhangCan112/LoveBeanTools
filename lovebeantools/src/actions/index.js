//@flow
import {ActionType} from './types';
import type {Action, GroupType, ToolType} from './types';


/*
 * 其它的常量
 */




/*
 * action 创建函数
 */
//选择了某组工具
export function selectGroup(group: GroupType): Action {
    return {
        type: ActionType.selectGroup,
        group: group,
    }
}

//选择了某个工具
export function selectTool(tool: ToolType): Action {
    return {
        type: ActionType.selelctTool,
        tool: tool,
    }
}