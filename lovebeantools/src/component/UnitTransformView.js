//@flow

import React, { Component, Element } from 'react';
import { Input } from 'antd';
import ValidateDecorator from '../higherOrderComponent/ValidateDecorator';
import {transformTextToNumber, digitUppercase, digitAddUnit} from '../units';


type State = {
    text1: ?string,
    text2: ?string
}

export default class UnitTransformView extends Component {
    state: State;

    constructor() {
        super();
        this.state = {
            text1: null,
            text2: null,
        }
    }

    render() {
        let text1 = this.state.text1;
        let text2 = this.state.text2;
        return (
            <div>
                <h4>转换为看得懂的数字:<span style={{color: 'red'}}>(测试中不保证完全准确哦)</span></h4>
                {
                    ValidateDecorator(this.props,(props) => {
                        if (!text2) return '';
                        let number = transformTextToNumber(text2)
                        if (!number) return (<span style={{color: 'red'}}>输入值不是一个有效数字（最大12位）</span>);
                        if (number > 999999999999.999) return (<span style={{color: 'red'}}>输入值不能大于12位，公司业务还没这么大！</span>);
                        return digitAddUnit(number)
                    })(this.renderInputView(text2, this.onChangeInText2))
                }
                <h4>转换为大写金额:<span style={{color: 'red'}}>(测试中不保证完全准确哦)</span></h4>
                {
                    ValidateDecorator(this.props,(props) => {
                        if (!text1) return '';
                        let number = transformTextToNumber(text1)
                        if (!number) return (<span style={{color: 'red'}}>输入值不是一个有效数字（最大12位）</span>);
                        if (number > 999999999999.999) return (<span style={{color: 'red'}}>输入值不能大于12位，公司业务还没这么大！</span>);
                        return digitUppercase(number)
                    })(this.renderInputView(text1,this.onChangeInText1))
                }
            </div>
        )
    }

    renderInputView(text: ?string, onChange: (?string)=>void):  Element<any>{
        return (
            <div>
                <Input placeholder='请粘贴进要转换的数值（最大12位)' onChange={e =>{onChange(e.target.value)}} value={text}/>
            </div>
        )
    }

    onChangeInText1 = (text: ?string): void => {
        this.setState(
            {
                ...this.state,
                text1: text
            }
        )
    };

    onChangeInText2 = (text: ?string): void => {
        this.setState(
            {
                ...this.state,
                text2: text
            }
        )
    }
}