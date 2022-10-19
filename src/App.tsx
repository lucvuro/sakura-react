import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.scss";
import { Outlet, useNavigate } from "react-router";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import MenuTop from "./components/MenuTop";

function App() {
  const navigate = useNavigate()
  useEffect(() => {navigate("/home")}, [])
  return (
    <Layout>
      <Header>
        <MenuTop />
      </Header>
      <Content style={{padding: "25px 50px"}}>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
