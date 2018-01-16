//@flow
import React, { Component } from 'react';
import './App.css';
import icon from './images/eson.jpg';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import DateDistanceToolView from './component/DateDistanceToolView';
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
        let clientWidth = document.documentElement.clientWidth;
        this.state = {
            w: clientWidth,
            h: document.documentElement.clientHeight,
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
                            <Menu.Item key="1">日期间隔</Menu.Item>
                            <Menu.Item key="2">某天日期</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />增长率</span>}>
                            <Menu.Item key="5">同比增长</Menu.Item>
                            <Menu.Item key="6">环比增长</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
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
                        <DateDistanceToolView></DateDistanceToolView>
                    </Content>
                </Layout>
            </Layout>
            <Footer style={{textAlign:'center'}}>豆豆小工具 ©2016 Created by LoveBean</Footer>
        </Layout>
    );
  }

    headerTitle = '"工欲善其事，必先利其器。"——孔子《论语·卫灵公》';

    //重新计算框体大小
    resize = () => {
        this.setState({...this.state,

            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight,
        });
    };

    //点击了某个功能选项
    clickOptionAction = (param: ClickParam)=> {
        this.setState(
            {
                ...this.state,
                content: param.key
            }
        );
    }

}


export default App;
