//@flow
//美团打款扣点item

import React, { Component } from 'react';
import {Input} from 'antd';
import {computeDeductPointOriginAmount} from '../units';


export type Value = {
    //打款金额
    actualAmount?: ?string,
    //扣点额度
    deductPoint?: ?string,
}

type Props = {
    value?: Value,
    onBlur?: (e: any)=>void,
    onChange?: (value: Value)=>void,
}

export default class MTReturnMoneyItem extends Component {

    props: Props;

    render() {
        return (
            <span>
                <span>打款金额：</span>
                <Input style={{width: 125}}
                       placeholder={'实际的打款金额'}
                       onChange={e => this.onActualAmountChange(e.target.value)}
                       onBlur={this.props.onBlur}/>
                <span>元</span>
                <span> 实际扣点：</span>
                <Input style={{width: 90}}
                       placeholder={'扣点额度'}
                       onChange={e => this.onDeductPointChange(e.target.value)}
                       onBlur={this.props.onBlur}/>
                <span>%</span>
                <span> 原金额：</span>
                <Input style={{width: 90}}
                       placeholder={'原款金额'}
                       value={this.compute()}
                       readOnly={true}/>
                <span>元</span>
            </span>
        );
    }

    //onActualAmountChange
    onActualAmountChange = (value: string)=>{
        let onChange = this.props.onChange;
        let detail: Value = {...this.props.value};
        if (onChange){
            onChange({
                ...this.props.value,
                actualAmount: value,
            });
        }
    };
    //onDeductPointChange
    onDeductPointChange = (value: string)=>{
        let onChange = this.props.onChange;
        if (onChange){
            onChange( {
                ...this.props.value,
                deductPoint: value,
            });
        }
    };
    //compute
    compute = (): ?number => {
        let value = this.props.value;
        if (!value) return null;
        let actualAmount = value.actualAmount;
        let deductPoint = value.deductPoint;
        if (!actualAmount || !deductPoint) return null;
        if (isNaN(actualAmount) || isNaN(deductPoint)) return null;
        let actualAmountNum = Number(actualAmount);
        let deductPointNum = Number(deductPoint);
       return computeDeductPointOriginAmount(actualAmountNum, deductPointNum);
    }
}