//@flow
//美团打款扣点item

import React, { Component } from 'react';
import {Input} from 'antd';


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
    //原金额
    originAmount?: ?string,
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
                       readOnly={true}/>
                <span>元</span>
            </span>
        );
    }

    //onActualAmountChange
    onActualAmountChange = (value: string)=>{
        let onChange = this.props.onChange;
        let detail: Value = {...this.props.value};
        detail.actualAmount = value;
        if (onChange){
            onChange(detail);
        }
    };
    //onDeductPointChange
    onDeductPointChange = (value: string)=>{
        let onChange = this.props.onChange;
        let detail: Value = {...this.props.value};
        detail.deductPoint = value;
        if (onChange){
            onChange(detail);
        }
    };
}