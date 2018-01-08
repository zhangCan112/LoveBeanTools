import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button }from 'antd';
import icon from './images/eson.jpg';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class App extends Component {

    constructor() {
        super();
        this.state = {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight
        };
    }

    componentWillMount() {
        window.addEventListener('resize',this.resize, true)
    }


  render() {
        const bodyWidth = this.state.w;
        const bodyHeight = this.state.h - 300;
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
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" />日期转换</span>}>
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />增长率</span>}>
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
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
                        Content
                    </Content>
                </Layout>
            </Layout>
            <Footer style={{textAlign:'center'}}>豆豆小工具 ©2016 Created by LoveBean</Footer>
        </Layout>
    );
  }

    headerTitle = '"工欲善其事，必先利其器。"——孔子《论语·卫灵公》';

    resize = () => {
        this.setState({
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight,
        });
    };
}


export default App;
