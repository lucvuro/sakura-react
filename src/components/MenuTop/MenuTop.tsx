import { DatabaseFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router';
import Logo from '../../assets/icon/database-solid.svg'

const MenuTop: React.FC = () => {
  const navigate = useNavigate()
    const items = [
        { label: <React.Fragment><div onClick={() => navigate("/home")}><DatabaseFilled/> <b>Clow Card Database</b></div></React.Fragment>, key: 'item-1' }, // remember to pass the key prop
      ];
  return (
    <Menu
        theme="dark"
        mode="horizontal"
        items={items}
      />
  )
}

export default MenuTop