//@flow
import React, { Component} from 'react';
import './App.css';
import icon from './images/eson.jpg';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { connect } from 'react-redux';
import DateDistanceToolView from './component/DateDistanceToolView';
import DateAfterToolView from './component/DateAfterToolView';
import OnYearBasisRatioView from './container/OnYearBasisRatioView';
import LinkRelativeRatioView from './container/LinkRelativeRatioView';
import {selectTool} from "./actions";
import type {ToolType} from './actions/types';
const { SubMenu, ClickParam } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class App extends Component {

    state: {
        w?: ?number,
        h?: ?number,
        content?: ?string,
    };
    constructor() {
        super();
        let documentElement = document.documentElement;
        let clientWidth = 0;
        let clientHeight = 0;
        if (documentElement) {
            clientWidth = documentElement.clientWidth;
            clientHeight = documentElement.clientHeight;
        }
        this.state = {
            w: clientWidth,
            h: clientHeight,
            content: "不知道"
        };
    }

    componentWillMount() {
        window.addEventListener('resize',this.resize, true)
    }


  render() {
        let bodyWidth = this.state.w;
        let bodyHeight = (this.state.h ? this.state.h : 300) - 300;
        bodyHeight = bodyHeight>=800 ? bodyHeight : 800;
    return (
        <Layout className="App">
            <Header className="header">
                <div src={icon} className="logo"  style={{color:'pink', fontSize: 15}}>豆豆小工具</div>
                <div style={{color:'white', fontSize: 30}}>{this.headerTitle}</div>
            </Header>
            <Layout style={{width: {bodyWidth}, height:{bodyHeight}}}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        onClick={this.clickOptionAction}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" />日期转换</span>}>
                            <Menu.Item key="DateDistance">日期间隔</Menu.Item>
                            <Menu.Item key="CalculateOneDay">推算日期</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />增长率</span>}>
                            <Menu.Item key="OnYearOnYearBasisRatio">同比增长</Menu.Item>
                            <Menu.Item key="LinkRelativeRatio">环比增长</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="laptop" />返点计算</span>}>
                            <Menu.Item key="OnYearOnYearBasisRatio">同比增长</Menu.Item>
                            <Menu.Item key="LinkRelativeRatio">环比增长</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        {this.renderSelelctedToolView(this.props.tool.tooltype)}
                    </Content>
                </Layout>
            </Layout>
            <Footer style={{textAlign:'center'}}>豆豆小工具 ©2016 Created by LoveBean</Footer>
        </Layout>
    );
  }
    //选择个某个工具
    renderSelelctedToolView = (tool: ToolType) => {
      switch (tool) {
          case "DateDistance":
              return (<DateDistanceToolView/>);
          case "CalculateOneDay":
              return (<DateAfterToolView/>);
          case "OnYearOnYearBasisRatio":
              return (<OnYearBasisRatioView {...this.props}/>);
          case "LinkRelativeRatio":
              return (<LinkRelativeRatioView {...this.props}/>);
          default:
              return null;
      }
    };

    headerTitle = '"工欲善其事，必先利其器。"——孔子《论语·卫灵公》';

    //重新计算框体大小
    resize = () => {
        let documentElement = document.documentElement;
        let clientWidth = 0;
        let clientHeight = 0;
        if (documentElement) {
            clientWidth = documentElement.clientWidth;
            clientHeight = documentElement.clientHeight;
        }
        this.setState({...this.state,
            w: clientWidth,
            h: clientHeight,
        });
    };

    //点击了某个功能选项
    clickOptionAction = (param: ClickParam)=> {
        this.props.dispatch(selectTool(param.key))
    }
}

export default connect((state) => {return {...state}})(App);
