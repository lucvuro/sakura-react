import { DatabaseFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react'
import Logo from '../../assets/icon/database-solid.svg'

const MenuTop: React.FC = () => {
    const items = [
        { label: <><DatabaseFilled/> <b>Clow Card Database</b></>, key: 'item-1' }, // remember to pass the key prop
        { label: 'item 2', key: 'item-2' }, // which is required
        {
          label: 'sub menu',
          key: 'submenu',
          children: [{ label: 'item 3', key: 'submenu-item-1' }],
        },
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