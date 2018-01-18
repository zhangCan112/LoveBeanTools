//@flow

import moment, {Moment} from 'moment';
import React, { Component } from 'react';
import { DatePicker, InputNumber } from 'antd';

export default class DateAfterToolView extends Component {

    state: {
        pickDate?: Moment,
        afterDay?: number,
    };

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <DatePicker placeholder={'YYYY-MM-DD'}
                            onChange={(date: Moment,)=>{this.onDateChange(date.clone())}}/>
                <span>的</span>
                <InputNumber style={{width: 100}}
                             size={'default'}
                             placeholder={'多少'} onChange={(num: number)=>{this.onAfterDayChange(num)}}/>
                <span>天之后是</span>
                <span style={{fontSize: 20, color: 'red'}}>{this.computeNewDate(this.state.pickDate, this.state.afterDay)}</span>
            </div>
        )
    }

    onDateChange = (pickDate: Moment): void => {
        this.setState({
            ...this.state,
            pickDate: pickDate,
        });
    };
    onAfterDayChange = (afterDay: number): void => {
        this.setState({
            ...this.state,
            afterDay: afterDay,
        });
    };
    computeNewDate = (pickDate?: Moment, afterDay?: number): string => {
        if (!pickDate || afterDay == null) return '某月某日';
        let date = pickDate.clone().add(afterDay, 'day');
        return date.format('YYYY年M月D日') + " " + this.transformWeekDay(date.day());
    }

    transformWeekDay = (day: (0 | 1 | 2 | 3 | 4 | 5 | 6)): string => {
       return ["周日", "周一", "周二", "周三", "周四", "周五","周六"][day];
    }
}