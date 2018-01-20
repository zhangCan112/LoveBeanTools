//@flow

import React, { Component } from 'react';
import {Input} from 'antd';


type Props = {
    placeHolders?: [?string,?string,?string,?string];
    denominator?: number,
    numerator_left?: number,
    numerator_right?: number,
    onDenominatorChange?: (text: ?string)=> void,
    onNumeratorLeftChange?: (text: ?string)=> void,
    onNumeratorRightChange?: (text: ?string)=> void,
};

export default class GrowthRateView extends Component {

    props: Props;

    constructor() {
        super();
        this.props = {
            placeHolders: ['请输入', '请输入', '请输入', '结果'],
        }
    }

    render(){
        let placeholders = this.props.placeHolders ? this.props.placeHolders :  this.defaultPlaceHolders();
        return (
            <div>
                <span style={{fontSize: 30}}>(</span>
                <span> </span>
                <Input style={{width: 100}}
                       placeholder={placeholders[0]}
                       onChange={(text) => {this.props.onNumeratorLeftChange && this.props.onNumeratorLeftChange(text)}}/>
                <span> </span>
                <span style={{fontSize: 30}}>-</span>
                <span> </span>
                <Input style={{width: 100}}
                       placeholder={placeholders[1]}
                       onChange={(text) => {this.props.onNumeratorRightChange && this.props.onNumeratorRightChange(text)}}/>
                <span> </span>
                <span style={{fontSize: 30}}>)</span>
                <span> </span>
                <span style={{fontSize: 30}}>/</span>
                <span> </span>
                <Input style={{width: 100}}
                       placeholder={placeholders[2]}
                       onChange={(text) => {this.props.onDenominatorChange && this.props.onDenominatorChange(text)}}/>
                <span> </span>
                <span style={{fontSize: 30}}>=</span>
                <span> </span>
                <span style={{fontSize: 30, color: 'red'}}>{placeholders[3]}</span>
            </div>
        );
    }

    //默认的placeHolder文案
    defaultPlaceHolders = (): [?string,?string,?string,?string]  => {
        return  ['请输入', '请输入', '请输入', '结果'];
    };
}