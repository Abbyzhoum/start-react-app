import React from 'react';
import ReactDom from 'react-dom';
import App from './App'; 
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';
import './lessVars.less';
import { BasicRoute } from './routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


ReactDom.render(
  <ConfigProvider locale={zhCN}>
    <Router>
      <Switch>
        <Route path="/home" render ={( routerProps)=>{
          return <App {...routerProps}/>
        }} />
         {
           BasicRoute.map(route =>{
            return <Route key={route.path} path={route.path} component={route.component} />
           })
         }

        <Redirect to="/admin" from="/" exact/>
        <Redirect to="/404" />
      </Switch>
    </Router>
 </ConfigProvider>,
 document.getElementById('root')
)


