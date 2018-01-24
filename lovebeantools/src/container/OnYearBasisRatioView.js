//@flow

import React, { Component } from 'react';
import GrowthRate from './GrowthRateContainer';
import {setGrowthRateLastValue, setGrowthRateThisValue} from '../actions';

export default class OnYearBasisRatioView extends Component {
    reuseid = "OnYearBasisRatioView";
    render() {
        let placeHolders: [?string, ?string, ?string, ?string] = ['今年同期数', '上年同期数', '上年同期数', '同比增长率结果'];
        return (
            <div>
                <h1>同比增长</h1>
                <p>
                    同比增长，和上一时期、上一年度或历史相比的增长（幅度）。计算公式：同比增长率=（本期数－同期数）/ 同期数×100%。某个指标的同比增长率=（现年的某个指标的值-上年同期这个指标的值）/上年同期这个指标的值。
                </p>
                <div>
                    <GrowthRate  {...this.props}
                                 placeHolders={placeHolders}
                                 reuseid={this.reuseid}/>
                </div>
            </div>
        )
    }
}