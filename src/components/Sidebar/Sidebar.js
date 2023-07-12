import './sidebar.css';
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Navigation One', '1', <MailOutlined />),
  getItem('Navigation Two', '2', <CalendarOutlined />),
  getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Submenu', 'sub1-2', null, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
    ]),
  ]),
  getItem('Navigation Three', 'sub2', <SettingOutlined />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
  getItem(
    <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
      Ant Design
    </a>,
    'link',
    <LinkOutlined />
  ),
];

function Sidebar() {
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');
  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <div className='sidebar-container'>
      <img
        className='sidebar-logo'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbbaEKw0EDx8BuB2TkStKC3nUkH0nefumiw&usqp=CAU'
        alt='logo'
      />
      <div className='sidebar-links'>
        <Switch onChange={changeMode} /> Change Mode
        <Divider type='vertical' />
        <Switch onChange={changeTheme} /> Change Style
        <br />
        <br />
        <Menu
          style={{
            width: 256,
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={mode}
          theme={theme}
          items={items}
        />
      </div>
    </div>
  );
}

export default Sidebar;
