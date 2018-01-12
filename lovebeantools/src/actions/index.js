//@flow
import {Action, GroupType, ActionType} from './types';


/*
 * 其它的常量
 */




/*
 * action 创建函数
 */
//选择了某组工具
function selectGroup(group: GroupType): Action {
    return {
        // type: ActionType.selectGroup,
        group1: group,
    }
}