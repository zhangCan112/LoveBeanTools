//@flow
//美团打款扣点item

import React, { Component } from 'react';
import {Input} from 'antd';

export default class MTReturnMoneyItem extends Component {

    render() {
        return (
            <span>
                <span>打款金额：</span>
                <Input style={{width: 125}} placeholder={'实际的打款金额'} onChange={this.props.onChange} onBlur={this.props.onBlur}/>
                <span>元</span>
                <span> 实际扣点：</span>
                <Input style={{width: 90}} placeholder={'扣点额度'}/>
                <span>%</span>
                <span> 原金额：</span>
                <Input style={{width: 90}} placeholder={'原款金额'} readOnly={true}/>
            </span>
        );
    }
}