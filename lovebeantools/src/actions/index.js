//@flow
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
        type: "selectGroup",
        group: group,
    }
}

//选择了某个工具
export function selectTool(tool: ToolType): Action {
    return {
        type: "selelctTool",
        tool: tool,
    }
}

//设置了增长率的本期值
export function setGrowthRateThisValue(thisValue: ?string, reuseid: string): Action {
    return {
        type: "setGrowthRateThisValue",
        thisValue: thisValue,
        reuseid: reuseid,
    }
}

//设置了增长率的上期值
export function setGrowthRateLastValue(lastValue: ?string, reuseid: string): Action {
    return {
        type: "setGrowthRateLastValue",
        lastValue: lastValue,
        reuseid: reuseid,
    }
}

//移除增长率复用数据
export function deleteGrowthRate(reuseid: string): Action {
    return {
        type: "deleteGrowthRate",
        reuseid: reuseid,
    }
}