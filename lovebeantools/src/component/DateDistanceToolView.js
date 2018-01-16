//@flow

import React, { Component } from 'react';
import { DatePicker, Dropdown, Menu } from 'antd';
const {RangePicker} = DatePicker;
const {ClickParam} = Menu;

export default class DateDistanceToolView extends Component {

    state: {
        //是否包含结束时间当天
        isContainEndDay: boolean,
    };

    constructor(){
        super();
        this.state = {
            isContainEndDay: true,
        }
    }

    render(){
        let menu = this.renderMenu(this.state.isContainEndDay);
        return (
            <div>
                <RangePicker placeholder={['开始时间','结束时间']}/>
                <Dropdown overlay={menu}>
                    <a>({this.isContainDesp(this.state.isContainEndDay)})</a>
                </Dropdown>
                <span> 共有 </span>
                <span style={{fontSize: 20}}>  5  </span>
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

    isContainDesp = (isContainEndDay: boolean) => {
        return isContainEndDay ? "包含结束当天" : "不含结束当天";
    };


    onSelect = (param: ClickParam) => {
        let isContainEndDay = param.key === 'true' ? true : false;
        this.setState({
            isContainEndDay: isContainEndDay,
        })
    };

}