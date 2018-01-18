//@flow

import moment, {Moment} from 'moment';
import React, { Component } from 'react';
import { DatePicker, Dropdown, Menu } from 'antd';
const {RangePicker} = DatePicker;
const {ClickParam} = Menu;

export default class DateDistanceToolView extends Component {

    state: {
        //是否包含结束时间当天
        isContainEndDay: boolean,
        //开始和结束时间
        dateValue?: [moment.Moment, moment.Moment]
    };

    constructor(){
        super();
        this.state = {
            isContainEndDay: true,
        };
    }

    render(){
        let menu = this.renderMenu(this.state.isContainEndDay);
        return (
            <div>
                <RangePicker placeholder={['开始时间','结束时间']} onChange={(dates,) => {this.onSelectTimeChange(dates)}}/>
                <Dropdown overlay={menu}>
                    <a>({this.isContainDesp(this.state.isContainEndDay)})</a>
                </Dropdown>
                <span> 共有 </span>
                <span style={{fontSize: 20}}>   {this.computeDateDistance(this.state.dateValue, this.state.isContainEndDay)}  </span>
                <span> 天 </span>
            </div>
        );
    }

    renderMenu = (isContainEndDay: boolean) => {
        let key = isContainEndDay ? "false" : "true";
        let itemDesp = key === "true" ? "包含结束当天" : "不含结束当天";
        return (
            <Menu onClick={this.onSelect}>
                <Menu.Item key={key}>{itemDesp}</Menu.Item>
            </Menu>
        );
    };

    isContainDesp = (isContainEndDay: boolean): string => {
        return isContainEndDay ? "包含结束当天" : "不含结束当天";
    };

    onSelect = (param: ClickParam): void => {
        let isContainEndDay = param.key === 'true' ? true : false;
        this.setState({
            ...this.state,
            isContainEndDay: isContainEndDay,
        })
    };

    //所选时间发生了变化
    onSelectTimeChange = (value: [moment.Moment, moment.Moment]): void => {
        this.setState({
            ...this.state,
            dateValue: value,
        })
    };

    //计算两个时间的时间间隔
    computeDateDistance = (value?: [moment.Moment, moment.Moment], isContainEndDay: boolean): string  => {
        if (value) {
            let startDate = value[0];
            let endDate = value[1];
            let timeStamp = endDate.format('x') - startDate.format('x');
            let duration = moment.duration(timeStamp, 'millisecond').asDays() + (isContainEndDay ? 1 : 0);
            return '' + duration;
        }
        return '多少';
    }

}