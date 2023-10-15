import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const AppHeader: React.FC = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1"><Link to="/">Dashboard</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/users">Users</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/settings">Settings</Link></Menu.Item>
    </Menu>
  );
}

export default AppHeader;
