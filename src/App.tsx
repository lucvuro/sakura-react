import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.scss";
import { Outlet, useNavigate } from "react-router";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import MenuTop from "./components/MenuTop";
import NightSkyBackground from "./components/NightSkyBackground";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <Layout>
      <Header>
        <MenuTop />
      </Header>
      <NightSkyBackground>
        <Content style={{ padding: "24px 48px" }}>
          <Outlet />
        </Content>
      </NightSkyBackground>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
