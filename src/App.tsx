import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.scss";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import MenuTop from "./components/MenuTop";
import NightSkyBackground from "./components/NightSkyBackground";
import useAuthenication from "./hooks/useAuthenication";

function App() {
  const navigate = useNavigate();
  const location = useLocation()
  const {currentUser} = useAuthenication()
  useEffect(() => {
    const refreshToken = sessionStorage.getItem("refreshToken")
    if(refreshToken || currentUser){
      if (location.pathname.includes('detail')){
        return;
      }
      navigate("/home");
    }else{
      navigate("/login")
    }
  }, [currentUser, navigate, location.pathname]);
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
