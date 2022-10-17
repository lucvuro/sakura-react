import { DatabaseFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react'
import Logo from '../../assets/icon/database-solid.svg'

const MenuTop: React.FC = () => {
    const items = [
        { label: <><DatabaseFilled/> <b>Clow Card Database</b></>, key: 'item-1' }, // remember to pass the key prop
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