import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Outlet } from "react-router";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import MenuTop from "./components/MenuTop";

function App() {
  return (
    <Layout>
      <Header>
        <MenuTop />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
