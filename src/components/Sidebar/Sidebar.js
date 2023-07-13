import './sidebar.css';
import React, { useState } from 'react';
import {
  LinkOutlined,
  SettingOutlined,
  
} from '@ant-design/icons';
import {BiSolidUserCircle,BiSolidBookBookmark} from 'react-icons/bi'
import {MdAdminPanelSettings,MdNotifications,MdOutlineSecurity} from 'react-icons/md'
import {PiUsersLight,PiEqualizer,PiExamFill} from 'react-icons/pi'

import {  Menu } from 'antd';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Yönetici Adı', 1 ,  <BiSolidUserCircle  />),
  getItem('Kullanıcı Paneli', '2', <MdAdminPanelSettings />),
  getItem('Kullanıcılar ', 'sub1', <PiUsersLight />, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Submenu', 'sub1-2', null, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),

    ]),
  ]),
  getItem('Gruplar', 5 ,  <PiEqualizer  />),
  getItem('Dersler', 'sub2', <BiSolidBookBookmark />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
  getItem('Sınavlar', 'sub2', <PiExamFill />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
  getItem('Bildirimler', 14 ,  <MdNotifications  />),
  getItem('Güvenlik', 13,  <MdOutlineSecurity  />),
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
  const [theme, setTheme] = useState('dark');
 

  return (
    <div className='sidebar-container'>
      <img
        className='sidebar-logo'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbbaEKw0EDx8BuB2TkStKC3nUkH0nefumiw&usqp=CAU'
        alt='logo'
      />
      <div className='sidebar-links'>
      
        <br />
        <br />
        <Menu
          style={{
            width: 230,
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
