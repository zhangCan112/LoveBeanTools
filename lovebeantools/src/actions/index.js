//@flow
import type {Action, GroupType, ToolType} from './types';
import type {SubState as DeductPointAmountItem}  from '../reducer/deductPointAmount';

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

//设置打款明细的实际打款额
export function setDeductPoint(key: number, deductPoint: ?string): Action {
    return {
        type: "setDeductPoint",
        key: key,
        deductPoint: deductPoint,
    }
}

//设置打款明细的折扣点数
export function setActualAmount(key: number, actualAmount: ?string): Action {
    return {
        type: "setActualAmount",
        key: key,
        actualAmount: actualAmount,
    }
}

//设置打款明细
export function setDeducPointAmount(key: number,  deductPoint: ?string, actualAmount: ?string): Action {
    return {
        type: "setDeducPointAmount",
        key: key,
        actualAmount: actualAmount,
        deductPoint:deductPoint,
    }
}

//添加打款明细
export function addDeducPointAmount(): Action {
    return {
        type: "addDeducPointAmount",
    }
}

//删除打款明细
export function deleteDeducPointAmount(key: number): Action {
    return {
        type: "deleteDeducPointAmount",
        key: key,
    }
}

//计算打款折扣的优惠省了多少钱
export function computeDeductPointSaveAmount(details: any[]): Action {
    return {
        type: "computeDeductPointSaveAmount",
        details: details,
    }
}

//修改正常扣点的额度
export function setRuleDeducePoint(ruleDeducePoint: ?string): Action {
    return {
        type: 'setRuleDeducePoint',
        ruleDeducePoint: ruleDeducePoint,
    }
}