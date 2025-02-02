import React from 'react';
import { Avatar, Menu } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const ProfileMenu = ({ user, logout }) => {
  const navigate = useNavigate();
  return (
    <Menu shadow="md cursor-pointer">
      <Menu.Target>
        <Avatar src="https://www.psdgraphics.com/file/user-icon.jpg" alt="userImg" radius="xl" />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => navigate('./favourites', {replace: true})}>Favourites</Menu.Item>
        <Menu.Item onClick={() => navigate('./bookings', {replace: true})}>Bookings</Menu.Item>
      
        <Menu.Item color='red' onClick={() => {
          localStorage.clear()
          logout()
        }}>logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
