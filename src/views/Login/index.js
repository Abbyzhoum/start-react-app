import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import styled from 'styled-components';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginModal = styled.div`
  background-color: #f2f2f2;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
 `

export default class Login extends Component {
   onFinish (values) {
    console.log('Received values of form: ', values);
  };

  render() {
    return (
      <div>
         <Row>
           <Col span={12} offset={6}>
           <LoginModal>
            <Form
              style={}
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
             >
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                 忘记密码
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
            </LoginModal>
           </Col>
         </Row>          
       </div>
    )
  }
}
