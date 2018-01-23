//@flow

import React, { Component } from 'react';
import GrowthRateView from '../component/GrowthRateView';
import {setGrowthRateLastValue, setGrowthRateThisValue} from '../actions';

export default class OnYearBasisRatioView extends Component {
    reuseid = "OnYearBasisRatioView";

    // 构造
      constructor() {
        super();
      }

    render() {
        let growtRate = this.props.growthRate[this.reuseid];
        return (
            <div>
                <h1>同比增长</h1>
                <p>
                    同比增长，和上一时期、上一年度或历史相比的增长（幅度）。计算公式：同比增长率=（本期数－同期数）/ 同期数×100%。某个指标的同比增长率=（现年的某个指标的值-上年同期这个指标的值）/上年同期这个指标的值。
                </p>
                <div>
                    <GrowthRateView placeHolders={['今年同期数', '上年同期数', '上年同期数', '同比增长率结果']}
                                    reuseid={this.reuseid}
                                    numerator_left={growtRate && (growtRate.thisValue ? growtRate.thisValue : null)}
                                    numerator_right={growtRate && (growtRate.lastValue ? growtRate.lastValue : null)}
                                    denominator={growtRate && (growtRate.lastValue ? growtRate.lastValue : null)}
                                    result={growtRate && growtRate.result}
                                    onDenominatorChange={(text) => this.onDenominatorChange(text)}
                                    onNumeratorRightChange={(text) => this.onNumeratorRightChange(text)}
                                    onNumeratorLeftChange={(text) => this.onNumeratorLeftChange(text)}/>
                </div>
            </div>
        )
    }

    onNumeratorRightChange = (num: ?string) => {
          this.props.dispatch(setGrowthRateLastValue(num, this.reuseid));
    };

    onNumeratorLeftChange = (num: ?string) => {
        this.props.dispatch(setGrowthRateThisValue(num, this.reuseid));
    };

    onDenominatorChange = (num: ?string) => {
        this.props.dispatch(setGrowthRateLastValue(num, this.reuseid));
    };
}