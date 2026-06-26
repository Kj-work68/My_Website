import React from 'react';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useAuth } from '../../contexts/AuthContext'; 
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // 1. เคลียร์ State ใน Context ให้เป็น false
    navigate('/', { replace: true }); // 2. เตะกลับไปหน้าแรก (Login)
  };

  return (
    <Button 
      type="primary" 
      danger 
      icon={<LogoutOutlined />} 
      onClick={handleLogout}
    >
      ออกจากระบบ
    </Button>
  );
};

export default Logout;