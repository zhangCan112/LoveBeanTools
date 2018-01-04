import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Icon }from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">"工欲善其事，必先利其器。"——孔子《论语·卫灵公》</h1>
        </header>
        <p className="App-intro">
            <Button type={"primary"} shape={"default"} size={"large"} style={{width: 200, height: 50}}>测试按钮</Button>
        </p>
      </div>
    );
  }
}

export default App;
