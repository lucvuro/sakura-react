import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Form, Input } from "antd";
import React from "react";
import useLoginForm from "./hooks/useLoginForm";
import "./LoginForm.scss";

const LoginForm = () => {
  const { onLogin, loading } = useLoginForm();

  return (
    <>
    <Alert
      message="Account Test"
      description="Username: test@test.com/Password: 123456"
      type="info"
      showIcon
      style={{marginBottom: "24px"}}
    />
      <Form name="login-form" className="login-form" onFinish={onLogin}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Username!" }]}
          wrapperCol={{ span: 24 }}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            size="large"
            disabled={loading}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 24 }}
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            size="large"
            disabled={loading}
          />
        </Form.Item>
        <Form.Item className="button-field" wrapperCol={{ span: 24 }}>
          <Button
            loading={loading}
            type="primary"
            size="large"
            htmlType="submit"
            className="login-form-button"
          >
            LOG IN
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
