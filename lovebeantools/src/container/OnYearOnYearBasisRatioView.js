//@flow

import React, { Component } from 'react';
import GrowthRateView from '../component/GrowthRateView';

export default class OnYearOnYearBasisRatioView extends Component {
    
    render() {
        return (
            <div>
                <h1>同比增长</h1>
                <p>
                    同比增长，和上一时期、上一年度或历史相比的增长（幅度）。计算公式：同比增长率=（本期数－同期数）/ 同期数×100%。某个指标的同比增长率=（现年的某个指标的值-上年同期这个指标的值）/上年同期这个指标的值。
                </p>
                <div>
                    <GrowthRateView placeHolders={['现年本期数', '上年同期数', '上年同期数', '同比增长率结果']}/>
                </div>
            </div>
        )
    }
}