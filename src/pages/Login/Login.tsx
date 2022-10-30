import { Typography } from "antd";
import React from "react";
import LoginForm from "./components/LoginForm";
import './Login.scss'
const Login = () => {
  return <div className="login-page">
    <div className="login-container">
        <div className="login-container__header">
            <Typography.Title level={2}>LOGIN</Typography.Title>
        </div>
        <div className="login-container__body">
            <LoginForm />
        </div>
    </div>
  </div>;
};

export default Login;
