### react 学习步骤 及实践

#### 1. 全局安装 create-react-app
```
  create-react-app my-react-appName

  yarn start   -->  启动项目，项目初始化完成
```

#### 2. react 框架  
[Ant-Design](https://ant.design/docs/react/getting-started-cn)

#### 3. 起步 --> 组件的声明的两种方式
> vs code 可以安装插件 ES7 React/Redux/GraphQL/React-Native snippets  --> 使用快捷键

 * 箭头函数 --> 声明组件的第一种方式  rfc快捷方式创建
 ```
 import React from 'react';
 import ReactDOM from 'react-dom';

 const App = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p> 这是第一种函数声明组件的方式</p>
    </div>
  )
}

ReactDOM.render(
    <App title="测试react"/>,
  document.getElementById('root')
)
```

 * 类继承 --> 声明组件的第二种方式  rcc快捷方式创建
```
import { render } from 'react-dom';
import React, { Component } from 'react';

class App extends Component {
  render() {
    console.log(this.props)   
    return (
      <div>
        <h1>类组件</h1>
        <p>{this.props.title}</p>
      </div>
    )
  }
}

render(
  <App title="这是第二种声明方式"/>,
  document.getElementById('root')
)
```



