//@flow

import React, { Component } from 'react';
import {Input} from 'antd';


type Props = {
    reuseid?: string;
    placeHolders?: [?string,?string,?string,?string];
    denominator?: ?number;
    numerator_left?: ?number;
    numerator_right?: ?number;
    result?: number;
    onDenominatorChange?: (text: ?string)=> void;
    onNumeratorLeftChange?: (text: ?string)=> void;
    onNumeratorRightChange?: (text: ?string)=> void;
};

export default class GrowthRateView extends Component {

    props: Props;
    static defaultProps = {
        placeHolders: ['请输入', '请输入', '请输入', '结果'],
    };
    constructor() {
        super();
    }

    render(){
        let placeholders = this.props.placeHolders ? this.props.placeHolders :  this.defaultPlaceHolders();
        return (
            <div>
                <span style={{fontSize: 30}}>(</span>
                <span> </span>
                <Input style={{width: 100}}
                       placeholder={placeholders[0]}
                       onChange={(event) => {this.props.onNumeratorLeftChange && this.props.onNumeratorLeftChange(event.target.value)}}
                       value={this.props.numerator_left}/>
                <span> </span>
                <span style={{fontSize: 30}}>-</span>
                <span> </span>
                <Input style={{width: 100}}
                       placeholder={placeholders[1]}
                       onChange={(event) => {this.props.onNumeratorRightChange && this.props.onNumeratorRightChange(event.target.value)}}
                       value={this.props.numerator_right}/>
                <span> </span>
                <span style={{fontSize: 30}}>)</span>
                <span> </span>
                <span style={{fontSize: 30}}>/</span>
                <span> </span>
                <Input style={{width: 100}}
                       placeholder={placeholders[2]}
                       onChange={(event) => {this.props.onDenominatorChange && this.props.onDenominatorChange(event.target.value)}}
                       value={this.props.denominator}/>
                <span> </span>
                <span style={{fontSize: 30}}>=</span>
                <span> </span>
                <span style={{fontSize: 30, color: 'red'}}>{ this.props.result ? this.props.result :  placeholders[3]}</span>
            </div>
        );
    }

    //默认的placeHolder文案
    defaultPlaceHolders = (): [?string,?string,?string,?string]  => {
        return  ['请输入', '请输入', '请输入', '结果'];
    };
}