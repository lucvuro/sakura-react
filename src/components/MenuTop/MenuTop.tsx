import { DatabaseFilled } from "@ant-design/icons";
import { Avatar, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";
import { auth } from "../../firebase";
import useMenuTop from "./hooks/useMenuTop";

const MenuTop: React.FC = () => {
  const {onClickLogOut} = useMenuTop()
  const userModel = useAppSelector(selectUser);
  const navigate = useNavigate();
  const items = [
    {
      label: (
        <React.Fragment>
          <div onClick={() => navigate("/home")}>
            <DatabaseFilled /> <b>Clow Card Database</b>
          </div>
        </React.Fragment>
      ),
      key: "item-1",
    },
    {
      label: (
        <React.Fragment>
          {userModel.currentUser && (
            <div onClick={() => navigate("/home")}>
              <Avatar
                style={{ backgroundColor: "black", verticalAlign: "middle" }}
                size="small"
              >
                {userModel.currentUser.email[0]}
              </Avatar>{" "}
              <span style={{ verticalAlign: "middle" }}>
                <b>{userModel.currentUser.email}</b>
              </span>
            </div>
          )}
        </React.Fragment>
      ),
      key: "item-2",
      children: [
        { label: "Profile", key: "sub-item-1" },
        { label: <React.Fragment><span onClick={() => onClickLogOut()}>Log out</span></React.Fragment>, key: "sub-item-2" },
      ],
    }, // remember to pass the key prop
  ];
  return (
    <Menu theme="dark" mode="horizontal" items={items} selectable={false} />
  );
};

export default MenuTop;
