//@flow
import React, { Component } from 'react';
import GrowthRateView from '../component/GrowthRateView';
import {setGrowthRateLastValue, setGrowthRateThisValue} from '../actions';
import type {State as GrowthRates, subState as GrowthRate} from '../reducer/growthRate';
import type {Dispatch} from '../actions/types';


type Props = {
    placeHolders?: [?string, ?string, ?string, ?string],
    reuseid: string,
    growthRate: GrowthRates,
    dispatch: Dispatch,
}

export default class GrowthRateContainer extends Component {

    props: Props;

    render() {
        let growtRate: GrowthRate = this.props.growthRate[this.props.reuseid];
        let result = growtRate && growtRate.result;
        let resultStatus = 'add';
        if  (result) {
            result = result.split("%").join("");
            if (!isNaN(result)) {
                resultStatus =  Number(result) <= 0 ? 'reduce' : 'add';
            }
        }
        return (
                <div>
                    <GrowthRateView placeHolders={this.props.placeHolders}
                                    reuseid={this.props.reuseid}
                                    numerator_left={growtRate && (growtRate.thisValue ? growtRate.thisValue : null)}
                                    numerator_right={growtRate && (growtRate.lastValue ? growtRate.lastValue : null)}
                                    denominator={growtRate && (growtRate.lastValue ? growtRate.lastValue : null)}
                                    result={growtRate ? growtRate.result : null}
                                    resultStatus={resultStatus}
                                    onDenominatorChange={(text) => this.onDenominatorChange(text)}
                                    onNumeratorRightChange={(text) => this.onNumeratorRightChange(text)}
                                    onNumeratorLeftChange={(text) => this.onNumeratorLeftChange(text)}/>
                </div>
        )
    }

    onNumeratorRightChange = (num: ?string) => {
        this.props.dispatch(setGrowthRateLastValue(num, this.props.reuseid));
    };

    onNumeratorLeftChange = (num: ?string) => {
        this.props.dispatch(setGrowthRateThisValue(num, this.props.reuseid));
    };

    onDenominatorChange = (num: ?string) => {
        this.props.dispatch(setGrowthRateLastValue(num, this.props.reuseid));
    };
}