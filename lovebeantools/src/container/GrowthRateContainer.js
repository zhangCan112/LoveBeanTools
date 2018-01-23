//@flow
import React, { Component } from 'react';
import GrowthRateView from '../component/GrowthRateView';
import {setGrowthRateLastValue, setGrowthRateThisValue} from '../actions';


type Props = {
    placeHolders?: [?string,?string,?string,?string];
    reuseid: string;
}

export default class GrowthRateContainer extends Component {
    render() {
        let growtRate = this.props.growthRate[this.props.reuseid];
        return (
                <div>
                    <GrowthRateView placeHolders={this.props.placeHolders}
                                    reuseid={this.props.reuseid}
                                    numerator_left={growtRate && (growtRate.thisValue ? growtRate.thisValue : null)}
                                    numerator_right={growtRate && (growtRate.lastValue ? growtRate.lastValue : null)}
                                    denominator={growtRate && (growtRate.lastValue ? growtRate.lastValue : null)}
                                    result={growtRate && growtRate.result}
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