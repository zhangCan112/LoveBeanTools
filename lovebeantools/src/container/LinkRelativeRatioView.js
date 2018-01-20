//@flow

import React, { Component } from 'react';
import GrowthRateView from '../component/GrowthRateView';

export default class LinkRelativeRatioView extends Component {

    render() {
        return (
            <div>
                <h1>环比增长</h1>
                <p>
                    环比（Ring growth）即与上期的数量作比较，环比有环比增长速度和环比发展速度两种方法。例如2005年7月份与2005年6月份相比较称其为环比。
                </p>
                <h2>计算方法</h2>
                <p>
                    环比增长速度=（本期数－上期数）/上期数×100% <br/>
                    反映本期比上期增长了多少<br/>
                    环比发展速度=本期数 / 上期数×100%<br/>
                    环比发展速度是报告期水平与前一期水平之比，反映现象在前后两期的发展变化情况<br/>
                    如：本期销售额为500万，上期销售额为350万<br/>
                    环比增长速度=（500-350）÷350×100%=42.86%<br/>
                    环比发展速度=500/350×100%=142.86%<br/>
                </p>
                <div>
                    <GrowthRateView placeHolders={['本期数', '上期数', '上期数', '环比增长率结果']}/>
                </div>
                <div>
                    下面这个目前存在错误
                    <GrowthRateView placeHolders={['本期数', '上期数', '上期数', '环比发展速度']}/>
                </div>
            </div>
        )
    }
}