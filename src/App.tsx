import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.scss";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import MenuTop from "./components/MenuTop";
import NightSkyBackground from "./components/NightSkyBackground";

function App() {
  const navigate = useNavigate();
  const location = useLocation()
  useEffect(() => {
    if (location.pathname.includes('detail') || location.pathname.includes('login')){
      return;
    }
    navigate("/home");
  }, []);
  return (
    <Layout>
      <Header>
        <MenuTop />
      </Header>
      <NightSkyBackground>
        <Content style={{ padding: "24px 48px", minHeight: "calc(100vh - 64px - 7px)" }}>
          <Outlet />
        </Content>
      </NightSkyBackground>
    </Layout>
  );
}

export default App;
